const express = require('express');
const path = require('path');
const stripe = require('stripe')('your_stripe_secret_key'); // 実際のStripe秘密キーに置き換え
const Web3 = require('web3');
const app = express();
const port = process.env.PORT || 3000;

// 静的ファイルの提供
app.use(express.static(__dirname));
app.use(express.json());

// ルートへのアクセスをindex.htmlにリダイレクト
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// /galleryへのアクセスをgallery.htmlにリダイレクト
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'gallery.html'));
});

// Stripe決済インテントの作成
app.post('/create-payment-intent', async (req, res) => {
    try {
        const { amount, currency } = req.body;
        
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.json({ 
            clientSecret: paymentIntent.client_secret 
        });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).json({ error: error.message });
    }
});

// 仮想通貨の取引確認
app.post('/verify-crypto-payment', async (req, res) => {
    try {
        const { transactionHash, network } = req.body;
        const web3 = new Web3(getNetworkProvider(network));
        
        const transaction = await web3.eth.getTransaction(transactionHash);
        if (!transaction) {
            throw new Error('Transaction not found');
        }

        // トランザクションの確認
        const receipt = await web3.eth.getTransactionReceipt(transactionHash);
        if (!receipt || !receipt.status) {
            throw new Error('Transaction failed or pending');
        }

        res.json({ 
            success: true, 
            transaction: receipt 
        });
    } catch (error) {
        console.error('Error verifying crypto payment:', error);
        res.status(500).json({ error: error.message });
    }
});

// ネットワークプロバイダーの取得
function getNetworkProvider(network) {
    switch (network) {
        case 'ETH':
            return process.env.ETH_PROVIDER_URL;
        case 'BTC':
            return process.env.BTC_PROVIDER_URL;
        case 'USDT':
            return process.env.USDT_PROVIDER_URL;
        default:
            throw new Error('Unsupported network');
    }
}

// 決済完了後のモデルファイル配信
app.post('/deliver-model', async (req, res) => {
    try {
        const { modelId, paymentId, paymentType } = req.body;
        
        // 支払い確認
        let paymentVerified = false;
        if (paymentType === 'card') {
            const payment = await stripe.paymentIntents.retrieve(paymentId);
            paymentVerified = payment.status === 'succeeded';
        } else if (paymentType === 'crypto') {
            // ブロックチェーンでの確認処理
            const transaction = await verifyBlockchainTransaction(paymentId);
            paymentVerified = transaction.confirmed;
        }

        if (!paymentVerified) {
            throw new Error('Payment not verified');
        }

        // モデルファイルのダウンロードURLを生成
        const downloadUrl = generateModelDownloadUrl(modelId);
        
        res.json({ 
            success: true, 
            downloadUrl 
        });
    } catch (error) {
        console.error('Error delivering model:', error);
        res.status(500).json({ error: error.message });
    }
});

function generateModelDownloadUrl(modelId) {
    // セキュアな一時ダウンロードURLを生成
    return `/download/${modelId}?token=${generateSecureToken()}`;
}

function generateSecureToken() {
    return require('crypto').randomBytes(32).toString('hex');
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});