// ギャラリーの初期化
function initializeGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;

    // 既存のアイテムをクリア
    gallery.innerHTML = '';

    // NFTアイテムを追加
    nftData.forEach(nft => {
        const item = createGalleryItem(nft);
        gallery.appendChild(item);
    });
}

// ギャラリーアイテムの作成
function createGalleryItem(nft) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
        <img src="${nft.image}" alt="${nft.title}" loading="lazy">
        <div class="item-overlay">
            <h3>${nft.title}</h3>
        </div>
    `;

    // クリックイベントの追加
    item.addEventListener('click', () => openModal(nft));
    return item;
}

// モーダルを開く
function openModal(nft) {
    const modal = document.getElementById('nftModal');
    if (!modal) return;

    // モーダルの内容を設定
    document.getElementById('modalImage').src = nft.image;
    document.getElementById('modalTitle').textContent = nft.title;
    document.getElementById('modalDescription').textContent = nft.description;
    document.getElementById('modalStyle').textContent = nft.style;
    document.getElementById('modalMethod').textContent = nft.method;
    document.getElementById('modalAccessory').textContent = nft.accessory;

    // モーダルを表示
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// モーダルを閉じる
function closeModal() {
    const modal = document.getElementById('nftModal');
    if (!modal) return;

    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// ギャラリーグリッドに要素を追加する関数
function populateGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) {
        console.error('Gallery grid element not found');
        return;
    }

    // 既存のコンテンツをクリア
    galleryGrid.innerHTML = '';
    
    // NFTデータの確認
    if (typeof nftData === 'undefined' || !Array.isArray(nftData)) {
        console.error('nftData is not defined or is not an array');
        return;
    }

    // 各NFTアイテムを生成
    nftData.forEach((nft) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        // 画像のパスを構築
        const imagePath = `assets/nft${nft.id}.jpg`;
        const placeholderPath = 'assets/placeholder.jpg';

        // HTMLコンテンツを設定
        galleryItem.innerHTML = `
            <div class="gallery-item-inner">
                <img src="${imagePath}" 
                     alt="${nft.titleJa}" 
                     loading="lazy" 
                     onerror="this.src='${placeholderPath}'">
                <div class="gallery-item-info">
                    <h3 class="gallery-item-title">${nft.titleJa}</h3>
                    <div class="gallery-item-id">#${String(nft.id).padStart(4, '0')}</div>
                </div>
            </div>
        `;

        // クリックイベントを追加
        galleryItem.addEventListener('click', () => {
            showNFTDetails(nft);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

// NFT詳細を表示する関数
function showNFTDetails(nft) {
    const modal = document.querySelector('.nft-modal');
    if (!modal) return;

    // 画像のパスを構築
    const imagePath = `assets/nft${nft.id}.jpg`;
    const placeholderPath = 'assets/placeholder.jpg';

    // 特性の表示を生成
    let traitsHTML = '';
    if (nft.traits) {
        traitsHTML = `
            <div class="modal-traits">
                <h3>特性</h3>
                <div class="trait-list">
                    ${nft.traits.personality ? `
                        <div class="trait-item">
                            <span class="trait-type">性格</span>
                            <span class="trait-value">${nft.traits.personality}</span>
                        </div>
                    ` : ''}
                    ${nft.traits.specialty ? `
                        <div class="trait-item">
                            <span class="trait-type">専門</span>
                            <span class="trait-value">${nft.traits.specialty}</span>
                        </div>
                    ` : ''}
                    ${nft.traits.origin ? `
                        <div class="trait-item">
                            <span class="trait-type">出身</span>
                            <span class="trait-value">${nft.traits.origin}</span>
                        </div>
                    ` : ''}
                    ${nft.traits.currentBase ? `
                        <div class="trait-item">
                            <span class="trait-type">活動拠点</span>
                            <span class="trait-value">${nft.traits.currentBase}</span>
                        </div>
                    ` : ''}
                </div>
            </div>
            ${nft.traits.fourCharacterIdiom ? `
                <div class="four-character-idiom">
                    <h3>四字熟語</h3>
                    <div class="kanji">${nft.traits.fourCharacterIdiom}</div>
                </div>
            ` : ''}
        `;
    }

    // モーダルの内容を設定
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">×</button>
            <div class="modal-inner">
                <div class="modal-image">
                    <img src="${imagePath}" 
                         alt="${nft.title}"
                         onerror="this.src='${placeholderPath}'">
                </div>
                <div class="modal-info">
                    <div class="modal-header">
                        <div class="modal-id">#${String(nft.id).padStart(4, '0')}</div>
                        <h2 class="modal-title">${nft.title}</h2>
                    </div>
                    <div class="modal-description">${nft.description}</div>
                    ${traitsHTML}
                    <div class="modal-details">
                        <div class="detail-item">
                            <span class="detail-label">スタイル:</span>
                            <span class="detail-value">${nft.style}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">制作技法:</span>
                            <span class="detail-value">${nft.method}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">装飾:</span>
                            <span class="detail-value">${nft.accessory}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // モーダルを表示
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // スクロール防止
    document.body.style.overflow = 'hidden';

    // イベントリスナーを設定
    setupModalEventListeners(modal);
}

// モーダルのイベントリスナーを設定
function setupModalEventListeners(modal) {
    // 閉じるボタンのイベントリスナー
    const closeButton = modal.querySelector('.modal-close');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // モーダル外クリックで閉じる
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESCキーでモーダルを閉じる
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };
    document.addEventListener('keydown', escHandler);
    
    // クリーンアップ用にイベントリスナーを保存
    modal._escHandler = escHandler;
}

// モーダルを閉じる関数
function closeModal() {
    const modal = document.querySelector('.nft-modal');
    if (!modal) return;

    // ESCキーのイベントリスナーを削除
    if (modal._escHandler) {
        document.removeEventListener('keydown', modal._escHandler);
        delete modal._escHandler;
    }

    modal.classList.remove('active');
    
    // アニメーション完了後に非表示
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

// イベントリスナーの設定
document.addEventListener('DOMContentLoaded', () => {
    // ギャラリーの初期化
    initializeGallery();

    // モーダルの閉じるボタン
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // モーダル外クリックで閉じる
    const modal = document.getElementById('nftModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // フィルターボタンの設定
    const filterButtons = document.querySelectorAll('.menu-item');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // アクティブクラスの切り替え
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // フィルタリングの実装（今後追加予定）
        });
    });

    // ギャラリーグリッドの初期化
    populateGallery();
});
