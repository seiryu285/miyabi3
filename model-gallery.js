console.log("model-gallery.js loaded");

// モデルデータの定義
const modelData = [
    {
        id: 1,
        name: "MIYABI Item #001",
        description: "伝統的な日本の装飾品",
        modelPath: "assets/models1.glb",
        thumbnail: "assets/nft1.jpg"
    },
    {
        id: 2,
        name: "MIYABI Item #002",
        description: "現代的な解釈の和装アイテム",
        modelPath: "assets/models2.glb",
        thumbnail: "assets/nft2.jpg"
    },
    // 3-30までのモデルデータを追加
    {
        id: 3,
        name: "MIYABI Item #003",
        description: "伝統工芸の技が光る装飾品",
        modelPath: "assets/models3.glb",
        thumbnail: "assets/nft3.jpg"
    }
    // ... 続く
];

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded, initializing model gallery");
    try {
        initializeModelGallery();
        setupModalEventListeners();
    } catch (error) {
        console.error("Error during initialization:", error);
    }
});

function initializeModelGallery() {
    console.log("Initializing model gallery");
    const gallery = document.getElementById('modelGallery');
    if (!gallery) {
        throw new Error("Model gallery container not found");
    }

    modelData.forEach((model, index) => {
        console.log(`Creating model item ${index + 1}/${modelData.length}`);
        createModelItem(model, gallery);
    });
}

function createModelItem(model, gallery) {
    try {
        const item = document.createElement('div');
        item.className = 'model-item';
        
        // サムネイル画像を作成
        const img = document.createElement('img');
        img.src = model.thumbnail;
        img.alt = model.name;
        img.loading = 'lazy';
        
        // タイトルを追加
        const title = document.createElement('h3');
        title.textContent = model.name;
        
        item.appendChild(img);
        item.appendChild(title);
        
        // クリックイベントを追加
        item.addEventListener('click', () => openModelViewer(model));
        
        gallery.appendChild(item);
    } catch (error) {
        console.error("Error creating model item:", error);
    }
}

function openModelViewer(model) {
    console.log("Opening model viewer for:", model.name);
    try {
        const modal = document.getElementById('modelModal');
        const modelViewer = document.getElementById('activeModel');
        const modelInfo = document.getElementById('modelInfo');
        
        if (!modal || !modelViewer || !modelInfo) {
            throw new Error("Required modal elements not found");
        }

        // モデルビューワーの設定を更新
        modelViewer.src = model.modelPath;
        modelViewer.alt = model.name;
        
        // 情報を更新
        modelInfo.innerHTML = `
            <h2>${model.name}</h2>
            <p>${model.description}</p>
        `;

        // モーダルを表示
        modal.style.display = 'block';
        
    } catch (error) {
        console.error("Error opening model viewer:", error);
    }
}

function setupModalEventListeners() {
    console.log("Setting up modal event listeners");
    try {
        const modal = document.getElementById('modelModal');
        const closeBtn = modal?.querySelector('.close');
        
        if (!modal || !closeBtn) {
            throw new Error("Modal elements not found");
        }

        // 閉じるボタンのクリックイベント
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // モーダル外クリックで閉じる
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        console.log("Modal event listeners set up successfully");
    } catch (error) {
        console.error("Error setting up modal event listeners:", error);
    }
}

// グローバルエラーハンドリング
window.addEventListener('error', function(event) {
    console.error("Global error caught:", event.error);
});
