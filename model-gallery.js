console.log("model-gallery.js loaded");

// モデルデータの定義
const modelData = [
    {
        id: 1,
        name: "MIYABI Item #001",
        description: "伝統的な日本の装飾品",
        modelPath: "assets/models/item1.glb",
        thumbnail: "assets/nft1.jpg",
        price: 0.21.2
    },
    {
        id: 2,
        name: "MIYABI Item #002",
        description: "現代的な解釈の和装アイテム",
        modelPath: "assets/models/item2.glb",
        thumbnail: "assets/nft2.jpg",
        price: 0.20.85
    },
    // 3-30までのモデルデータを追加
    {
        id: 3,
        name: "MIYABI Item #003",
        description: "伝統工芸の技が光る装飾品",
        modelPath: "assets/models/item3.glb",
        thumbnail: "assets/nft3.jpg",
        price: 0.22.5
    }
    // ... 続く
];

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded, initializing model gallery");
    initializeModelGallery();
    setupModalEventListeners();
});

function initializeModelGallery() {
    const gallery = document.getElementById('modelGallery');
    if (!gallery) {
        console.error("Model gallery container not found");
        return;
    }

    modelData.forEach(model => {
        const item = createModelItem(model);
        gallery.appendChild(item);
    });
}

function createModelItem(model) {
    const item = document.createElement('div');
    item.className = 'model-item';
    
    const img = document.createElement('img');
    img.src = model.thumbnail;
    img.alt = model.name;
    img.loading = 'lazy';
    
    const title = document.createElement('h3');
    title.textContent = model.name;
    
    item.appendChild(img);
    
    // SOLロゴ＋価格表示用ラッパー
    const solPriceWrapper = document.createElement('div');
    solPriceWrapper.className = 'sol-price-wrapper';
    
    const solLogo = document.createElement('img');
    solLogo.src = 'img/solana-logo.png'; // ロゴ画像パス
    solLogo.alt = 'Solana Logo';
    solLogo.className = 'sol-logo';
    
    const price = document.createElement('span');
    price.className = 'sol-price';
    price.textContent = model.price ? `${model.price} SOL` : '- SOL';
    
    solPriceWrapper.appendChild(solLogo);
    solPriceWrapper.appendChild(price);
    
    item.appendChild(title);
    item.appendChild(solPriceWrapper);
    
    item.addEventListener('click', () => openModelViewer(model));
    
    return item;
}

function openModelViewer(model) {
    const modal = document.getElementById('modelModal');
    const modelViewer = document.getElementById('activeModel');
    const modelInfo = document.getElementById('modelInfo');
    
    if (!modal || !modelViewer || !modelInfo) {
        console.error("Required modal elements not found");
        return;
    }

    modelViewer.src = model.modelPath;
    modelViewer.alt = model.name;
    
    modelInfo.innerHTML = `
        <h2>${model.name}</h2>
        <p>${model.description}</p>
    `;
    
    modal.style.display = 'block';
}

function setupModalEventListeners() {
    const modal = document.getElementById('modelModal');
    const closeBtn = document.querySelector('.close');
    
    if (!modal || !closeBtn) {
        console.error("Modal elements not found");
        return;
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// グローバルエラーハンドリング
window.addEventListener('error', function(event) {
    console.error("Global error caught:", event.error);
});
