console.log("model-gallery.js loaded");

// モデルデータの定義
const modelData = [
    {
        id: 1,
        name: "MIYABI Item #001",
        description: "伝統的な日本の装飾品",
        modelPath: "assets/models/item1.glb",
        thumbnail: "assets/nft1.jpg"
    },
    {
        id: 2,
        name: "MIYABI Item #002",
        description: "現代的な解釈の和装アイテム",
        modelPath: "assets/models/item2.glb",
        thumbnail: "assets/nft2.jpg"
    },
    // 3-30までのモデルデータを追加
    {
        id: 3,
        name: "MIYABI Item #003",
        description: "伝統工芸の技が光る装飾品",
        modelPath: "assets/models/item3.glb",
        thumbnail: "assets/nft3.jpg"
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
    item.appendChild(title);
    
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
