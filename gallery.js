console.log("gallery.js loaded");

// Utility function to check if element exists
function checkElement(id, context = "") {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`${context}: Element with id '${id}' not found`);
        return null;
    }
    return element;
}

// Initialize gallery when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    initializeGallery();
    setupModalEventListeners();
});

function initializeGallery() {
    const gallery = document.getElementById('nftGallery');
    if (!gallery) {
        console.error('Gallery container not found');
        return;
    }

    // 30キャラクター分のデータを表示
    for (let i = 1; i <= 30; i++) {
        const nft = nftData.find(item => item.id === i) || createDefaultNFT(i);
        const card = createNFTCard(nft);
        gallery.appendChild(card);
    }
}

function createDefaultNFT(id) {
    return {
        id: id,
        title: `MIYABI #${String(id).padStart(3, '0')}`,
        description: "Coming soon...",
        image: `assets/nft${id}.jpg`,
        traits: {
            "Status": "Preparing"
        }
    };
}

function createNFTCard(nft) {
    const card = document.createElement('div');
    card.className = 'nft-card';
    
    const img = document.createElement('img');
    img.src = nft.image;
    img.alt = nft.title;
    img.loading = 'lazy';
    
    const title = document.createElement('h3');
    title.textContent = nft.title;
    
    card.appendChild(img);
    card.appendChild(title);
    
    card.addEventListener('click', () => openModal(nft));
    
    return card;
}

function openModal(nft) {
    const modal = document.getElementById('nftModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTraits = document.getElementById('modalTraits');
    
    if (!modal || !modalImg || !modalTitle || !modalDescription || !modalTraits) {
        console.error('Modal elements not found');
        return;
    }
    
    modalImg.src = nft.image;
    modalImg.alt = nft.title;
    modalTitle.textContent = nft.title;
    modalDescription.textContent = nft.description;
    
    // 特性情報を表示
    modalTraits.innerHTML = '';
    if (nft.traits) {
        Object.entries(nft.traits).forEach(([key, value]) => {
            const trait = document.createElement('div');
            trait.className = 'trait';
            trait.innerHTML = `<strong>${key}:</strong> ${value}`;
            modalTraits.appendChild(trait);
        });
    }
    
    modal.style.display = 'block';
}

function setupModalEventListeners() {
    const modal = document.getElementById('nftModal');
    const closeBtn = document.querySelector('.close');
    
    if (!modal || !closeBtn) {
        console.error('Modal elements not found');
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

// Initialize language toggle
function initializeLanguageToggle() {
    const langSelect = document.querySelector('.lang-select');
    if (!langSelect) return;

    langSelect.value = currentLang;
    langSelect.addEventListener('change', () => {
        currentLang = langSelect.value;
        updateLanguage();
    });
}

// Update language throughout the page
function updateLanguage() {
    const gallery = document.getElementById('gallery');
    if (gallery) {
        initializeGallery();
    }
}

// Initialize Web3
async function initializeWeb3() {
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
    }
}

// Mobile optimization
function optimizeForMobile() {
    if (isMobileDevice()) {
        document.documentElement.style.fontSize = '14px';
        const gallery = document.querySelector('.gallery-grid');
        if (gallery) {
            gallery.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
        }
    }
}

// Check if device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Setup lazy loading for images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Handle errors globally
window.addEventListener('error', function(event) {
    console.error("Global error caught:", event.error);
});

// Translation object for multilingual support
const translations = {
  en: {
    connectWallet: "CONNECT",
    gallery: "VIEW GALLERY",
    about: "ABOUT",
    enterWorld: "ENTER",
    search: "Search by name or number...",
    ui: {
      all: "All",
      recent: "Recent",
      popular: "Popular",
      trending: "Trending"
    },
    details: {
      style: "Style:",
      method: "Method:",
      accessory: "Accessory:"
    },
    traitsTitle: "Traits"
  },
  ja: {
    connectWallet: "ウォレット接続",
    gallery: "ギャラリーを見る",
    about: "このプロジェクトについて",
    enterWorld: "没入体験",
    search: "名前または番号で検索...",
    ui: {
      all: "すべて",
      recent: "新着",
      popular: "人気",
      trending: "トレンド"
    },
    details: {
      style: "スタイル:",
      method: "制作技法:",
      accessory: "装飾:"
    },
    traitsTitle: "特性"
  }
};

let currentLang = "en";
