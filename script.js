// グローバル変数
let currentLang = 'ja';

// 翻訳データ
const translations = {
  ja: {
    gallery: 'ギャラリー',
    collection: 'コレクション',
    about: 'について',
    search: '名前または番号で検索...',
    filters: 'フィルター',
    artist: 'アーティスト',
    creationDate: '制作日',
    connectWallet: 'ウォレット接続',
    ui: {
      gallery: "ギャラリー",
      collection: "コレクション",
      about: "概要",
      all: "すべて",
      recent: "新着",
      popular: "人気",
      trending: "トレンド",
      filter: "フィルター",
      clear: "クリア",
      style: "着物スタイル",
      pattern: "模様",
      technique: "制作技法",
      color: "色彩",
      material: "素材",
      era: "時代背景",
      traditionalTechnique: "伝統技法",
      digitalTechnique: "デジタル技法",
      close: "閉じる",
      decoration: "装飾",
      catEars: "猫耳",
      frogDecoration: "蛙装飾",
      kimono: "着物",
      yukata: "浴衣",
      hakama: "袴"
    },
    nfts: {
      1: {
        title: "蒼波 - 波紋の継承者 NFT #1",
        description: `古都・鎌倉の染織師の家系に生まれた蒼波は、代々受け継がれる「絞り染め」の技を持つ青年アーティスト。
静かな湖のように落ち着いた雰囲気を持ちながらも、時に大きな波を巻き起こすような情熱を秘めている。`,
        traits: {
          style: "現代絞り染め",
          pattern: "波紋",
          technique: "デジタル描画・絞り染め融合",
          color: "藍色グラデーション",
          material: "正絹"
        }
      },
      // 他のNFTデータ
    }
  },
  en: {
    gallery: 'Gallery',
    collection: 'Collection',
    about: 'About',
    search: 'Search by name or number...',
    filters: 'Filters',
    artist: 'Artist',
    creationDate: 'Creation Date',
    connectWallet: 'Connect Wallet',
    ui: {
      gallery: "Gallery",
      collection: "Collection",
      about: "About",
      all: "All",
      recent: "Recent",
      popular: "Popular",
      trending: "Trending",
      filter: "Filter",
      clear: "Clear",
      style: "Kimono Style",
      pattern: "Pattern",
      technique: "Technique",
      color: "Color",
      material: "Material",
      era: "Era",
      traditionalTechnique: "Traditional Technique",
      digitalTechnique: "Digital Technique",
      close: "Close",
      decoration: "Decoration",
      catEars: "Cat Ears",
      frogDecoration: "Frog Decoration",
      kimono: "Kimono",
      yukata: "Yukata",
      hakama: "Hakama"
    },
    nfts: {
      1: {
        title: "Blue Wave - The Ripple Inheritor NFT #1",
        description: `A young artist born into a family of textile artisans in the ancient capital of Kamakura,
possessing the inherited technique of "shibori" dyeing passed down through generations.`,
        traits: {
          style: "Modern Shibori",
          pattern: "Ripple",
          technique: "Digital Drawing & Shibori Fusion",
          color: "Indigo Gradation",
          material: "Pure Silk"
        }
      },
      // Other NFT data
    }
  }
};

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeUI();
    } catch (error) {
        console.error('Error initializing UI:', error);
    }
});

// UI Initialization
function initializeUI() {
    // Initialize header
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Initialize gallery grid
    initializeGallery();

    // Initialize filters
    initializeFilters();

    // Initialize search
    initializeSearch();

    // Initialize language toggle
    initializeLanguageToggle();

    // Initialize Web3
    initializeWeb3();

    // Initialize event listeners
    initializeEventListeners();

    // Lazy load images
    lazyLoadImages();

    // Optimize for mobile
    optimizeForMobile();
}

// ギャラリーの初期化
function initializeGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;

    // ダミーデータでギャラリーを生成
    for (let i = 1; i <= 12; i++) {
        const item = createGalleryItem(i);
        galleryGrid.appendChild(item);
    }
}

// ギャラリーアイテムの作成
function createGalleryItem(index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.number = `#${index.toString().padStart(4, '0')}`;
  
    const number = document.createElement('div');
    number.className = 'gallery-item-number';
    number.textContent = item.dataset.number;
  
    const img = document.createElement('img');
    img.src = `assets/nft${index}.jpg`;
    img.alt = `NFT ${item.dataset.number}`;
    img.loading = 'lazy'; // Add lazy loading for better performance

    // Add error handling for images
    img.onerror = function() {
        this.src = 'assets/placeholder.jpg';
        console.warn(`Failed to load image: ${img.src}`);
    };

    item.appendChild(number);
    item.appendChild(img);
  
    item.addEventListener('click', () => openNFTModal(item));
  
    return item;
}

// フィルターの初期化
function initializeFilters() {
    const filterToggles = document.querySelectorAll('.filter-toggle');
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox input');
    const clearFiltersBtn = document.querySelector('.clear-filters');

    filterToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const options = toggle.nextElementSibling;
            const icon = toggle.querySelector('.toggle-icon');
            options.style.display = options.style.display === 'none' ? 'block' : 'none';
            icon.textContent = options.style.display === 'none' ? '+' : '-';
        });
    });

    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateGallery);
    });

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }
}

// 検索機能の初期化
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const galleryItems = document.querySelectorAll('.gallery-item');

        galleryItems.forEach(item => {
            const number = item.dataset.number.toLowerCase();
            const title = item.dataset.title?.toLowerCase() || '';
            const matches = number.includes(searchTerm) || title.includes(searchTerm);
            item.style.display = matches ? 'block' : 'none';
        });
    });
}

// モーダル関連の機能
function openNFTModal(item) {
    const modal = document.querySelector('.nft-modal');
    if (!modal) return;

    const modalImage = modal.querySelector('.modal-image img');
    const modalNumber = modal.querySelector('.modal-number');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');

    // データの設定
    const nftId = parseInt(item.dataset.number.replace('#', ''));
    const nftData = getNFTData(nftId);

    modalImage.src = item.querySelector('img').src;
    modalNumber.textContent = item.dataset.number;
    modalTitle.textContent = nftData.title;
    modalDescription.textContent = nftData.description;

    // トレイト情報の更新
    updateTraits(nftData.traits);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeNFTModal() {
    const modal = document.querySelector('.nft-modal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Web3関連の機能
async function initializeWeb3() {
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        
        const connectBtn = document.querySelector('.connect-btn');
        if (connectBtn) {
            connectBtn.addEventListener('click', connectWallet);
        }

        // アカウント変更のイベントリスナー
        window.ethereum.on('accountsChanged', handleAccountsChanged);
    }
}

async function connectWallet() {
    try {
        const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts' 
        });
        handleAccountsChanged(accounts);
    } catch (error) {
        console.error('Failed to connect wallet:', error);
    }
}

function handleAccountsChanged(accounts) {
    const connectBtn = document.querySelector('.connect-btn');
    if (!connectBtn) return;

    if (accounts.length === 0) {
        connectBtn.textContent = translations[currentLang].connectWallet;
    } else {
        const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
        connectBtn.textContent = shortAddress;
    }
}

// 言語切り替え機能
function initializeLanguageToggle() {
    const langToggle = document.querySelector('.lang-toggle');
    const langSelect = document.querySelector('.lang-select');

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'ja' ? 'en' : 'ja';
            updateLanguage();
        });
    }

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            updateLanguage();
        });
    }
}

// 言語に応じたUIの更新
function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        const translationPath = key.split('.');
        let translation = translations[currentLang];
        
        for (const path of translationPath) {
            translation = translation?.[path];
        }
        
        if (translation) {
            element.textContent = translation;
        }
    });

    // プレースホルダーの更新
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.placeholder = translations[currentLang].search;
    }

    // 接続ボタンのテキスト更新
    const connectBtn = document.querySelector('.connect-btn');
    if (connectBtn && !connectBtn.textContent.includes('0x')) {
        connectBtn.textContent = translations[currentLang].connectWallet;
    }
}

// ヘルパー関数
function getNFTData(id) {
    return translations[currentLang].nfts[id] || {
        title: `MIYABI #${id.toString().padStart(4, '0')}`,
        description: currentLang === 'ja' 
            ? "詳細情報は準備中です。" 
            : "Details coming soon.",
        traits: {
            style: "未定義",
            pattern: "未定義",
            technique: "未定義",
            color: "未定義",
            material: "未定義"
        }
    };
}

function updateTraits(traits) {
    Object.entries(traits).forEach(([key, value]) => {
        const element = document.querySelector(`[data-trait="${key}"]`);
        if (element) {
            element.textContent = value;
        }
    });
}

function clearFilters() {
    const checkboxes = document.querySelectorAll('.filter-checkbox input');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    updateGallery();
}

function updateGallery() {
    const checkedFilters = Array.from(document.querySelectorAll('.filter-checkbox input:checked'))
        .map(checkbox => checkbox.nextElementSibling.textContent.toLowerCase());
  
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    galleryItems.forEach(item => {
        if (checkedFilters.length === 0) {
            item.style.display = 'block';
            return;
        }

        const traits = item.dataset.traits?.toLowerCase() || '';
        const shouldShow = checkedFilters.every(filter => traits.includes(filter));
        item.style.display = shouldShow ? 'block' : 'none';
    });
}

// その他のイベントリスナー
function initializeEventListeners() {
    // モーダルを閉じるボタン
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeNFTModal);
    }

    // モーダルの外側をクリックして閉じる
    const modal = document.querySelector('.nft-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeNFTModal();
            }
        });
    }

    // Escapeキーでモーダルを閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeNFTModal();
        }
    });

    // タブ切り替え
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const tabType = button.dataset.tab;
            filterGalleryByTab(tabType);
        });
    });
}

// タブによるギャラリーのフィルタリング
function filterGalleryByTab(tabType) {
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    galleryItems.forEach(item => {
        if (tabType === 'all') {
            item.style.display = 'block';
            return;
        }
        
        const itemType = item.dataset.type;
        item.style.display = itemType === tabType ? 'block' : 'none';
    });
}

// スクロールアニメーション（トップページ用）
if (document.querySelector('.hero-section')) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image-container');
        
        // パララックス効果
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }

        // コンテンツのフェード効果
        if (heroContent) {
            heroContent.style.opacity = Math.max(0, 1 - scrollPosition / 500);
            heroContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    });
}

// NFTデータの管理
const nftDescriptions = {
    1: {
        title: "蒼波 - 波紋の継承者 NFT #1",
        description: `古都・鎌倉の染織師の家系に生まれた蒼波は、代々受け継がれる「絞り染め」の技を持つ青年アーティスト。
静かな湖のように落ち着いた雰囲気を持ちながらも、時に大きな波を巻き起こすような情熱を秘めている。
幼い頃から祖父母の工房で染めの技術とともに「波」という存在の意味を学び、その教えを胸に「動く波」となることを決意。`,
        traits: {
            style: "現代絞り染め",
            pattern: "波紋",
            technique: "デジタル描画・絞り染め融合",
            color: "藍色グラデーション",
            material: "正絹"
        }
    },
    2: {
        title: "桜波幻想 #0002",
        description: `現代的なシルエットと伝統的な着物文化の融合を表現したデザイン。
髪飾りには日本の伝統的な花飾りを配し、凛とした佇まいを演出しています。`,
        traits: {
            style: "現代小紋",
            pattern: "桜波紋",
            technique: "デジタル描画・友禅染め",
            color: "藍色・桜色グラデーション",
            material: "正絹"
        }
    }
    // 追加のNFTデータをここに記述
};

// モバイルデバイスの検出とハンドリング
function isMobileDevice() {
    return (window.innerWidth <= 768);
}

// モバイル向けの最適化
function optimizeForMobile() {
    if (isMobileDevice()) {
        // ギャラリーグリッドの調整
        const galleryGrid = document.querySelector('.gallery-grid');
        if (galleryGrid) {
            galleryGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
        }

        // モーダルの調整
        const modal = document.querySelector('.nft-modal-content');
        if (modal) {
            modal.style.gridTemplateColumns = '1fr';
        }

        // フィルターの調整
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.classList.add('mobile-sidebar');
        }
    }
}

// パフォーマンス最適化
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 画像の遅延読み込み
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
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

        images.forEach(img => imageObserver.observe(img));
    }
}

// エラーハンドリング
function handleError(error, context) {
    console.error(`Error in ${context}:`, error);
    // エラーメッセージを画面に表示する場合
    const errorContainer = document.querySelector('.error-container');
    if (errorContainer) {
        errorContainer.textContent = `エラーが発生しました: ${error.message}`;
        errorContainer.style.display = 'block';
    }
}

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeUI();

    } catch (error) {
        handleError(error, 'application initialization');
    }
});

// アプリケーションの状態管理
const appState = {
    currentLang: 'ja',
    currentFilter: 'all',
    walletConnected: false,
    modalOpen: false,
    selectedNFT: null,
  
    updateState(newState) {
        Object.assign(this, newState);
        this.notifyStateChange();
    },
  
    notifyStateChange() {
        // 状態変更時の処理
        updateUI();
    }
};

// UIの更新
function updateUI() {
    updateLanguage();
    updateGallery();
    updateModalContent();
    updateWalletStatus();
}

// エクスポート
window.appState = appState;
window.openNFTModal = openNFTModal;
window.closeNFTModal = closeNFTModal;
window.connectWallet = connectWallet;