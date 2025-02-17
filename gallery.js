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
    console.log("DOM fully loaded, executing initialization");
    try {
        initializeGallery();
        setupModalEventListeners();
        initializeLanguageToggle();
        initializeWeb3();
        optimizeForMobile();
        setupLazyLoading();
        console.log("Gallery initialization completed");
    } catch (error) {
        console.error("Error during initialization:", error);
    }
});

// Initialize the gallery
function initializeGallery() {
    console.log("Initializing gallery");
    const gallery = document.getElementById('gallery');
    if (!gallery) {
        throw new Error("Gallery container not found");
    }

    try {
        nftData.forEach((nft, index) => {
            console.log(`Creating gallery item ${index + 1}/${nftData.length}`);
            createGalleryItem(nft, gallery);
        });
    } catch (error) {
        console.error("Error populating gallery:", error);
        throw error;
    }
}

// Create individual gallery items
function createGalleryItem(nft, gallery) {
    try {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        // Create image/video element based on type
        if (nft.type === 'video') {
            const video = document.createElement('video');
            video.src = nft.image;
            video.muted = true;
            video.loop = true;
            item.appendChild(video);
            
            // Add play/pause functionality on hover
            item.addEventListener('mouseenter', () => video.play());
            item.addEventListener('mouseleave', () => video.pause());
        } else {
            const img = document.createElement('img');
            img.src = nft.image;
            img.alt = nft.name;
            img.loading = 'lazy'; // Enable lazy loading
            item.appendChild(img);
        }

        // Add click event to open modal
        item.addEventListener('click', () => openModal(nft));
        gallery.appendChild(item);
        
    } catch (error) {
        console.error("Error creating gallery item:", error);
        throw error;
    }
}

// Open modal with NFT details
function openModal(nft) {
    console.log("Opening modal for NFT:", nft.name);
    try {
        const modal = checkElement('nftModal', "Modal open");
        const modalImg = checkElement('modalImage', "Modal image");
        const modalVideo = checkElement('modalVideo', "Modal video");
        const modalInfo = checkElement('modalInfo', "Modal info");
        
        if (!modal || !modalImg || !modalVideo || !modalInfo) {
            throw new Error("Required modal elements not found");
        }

        // Update modal content
        if (nft.type === 'video') {
            modalImg.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = nft.image;
        } else {
            modalImg.style.display = 'block';
            modalVideo.style.display = 'none';
            modalImg.src = nft.image;
        }

        // Update modal info
        modalInfo.innerHTML = `
            <h2>${nft.name}</h2>
            <p>${nft.description}</p>
        `;

        // Update traits
        updateTraits(nft);

        // Show modal
        modal.style.display = 'block';
        console.log("Modal opened successfully");

    } catch (error) {
        console.error("Error opening modal:", error);
    }
}

// Update traits display
function updateTraits(nft) {
    console.log("Updating traits for:", nft.name);
    try {
        const traitsContainer = checkElement('traitsContainer', "Traits update");
        if (!traitsContainer) return;

        traitsContainer.innerHTML = '<h3>Traits</h3>';
        if (nft.traits && nft.traits.length > 0) {
            const traitsList = document.createElement('ul');
            nft.traits.forEach(trait => {
                const li = document.createElement('li');
                li.textContent = `${trait.trait_type}: ${trait.value}`;
                traitsList.appendChild(li);
            });
            traitsContainer.appendChild(traitsList);
        } else {
            traitsContainer.innerHTML += '<p>No traits available</p>';
        }
        console.log("Traits updated successfully");

    } catch (error) {
        console.error("Error updating traits:", error);
    }
}

// Set up modal event listeners
function setupModalEventListeners() {
    console.log("Setting up modal event listeners");
    try {
        const modal = checkElement('nftModal', "Modal setup");
        const closeBtn = modal?.querySelector('.close');
        
        if (!modal || !closeBtn) {
            throw new Error("Modal elements not found");
        }

        // Close button click
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            const modalVideo = document.getElementById('modalVideo');
            if (modalVideo) modalVideo.pause();
        });

        // Click outside modal
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
                const modalVideo = document.getElementById('modalVideo');
                if (modalVideo) modalVideo.pause();
            }
        });

        console.log("Modal event listeners set up successfully");

    } catch (error) {
        console.error("Error setting up modal event listeners:", error);
    }
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
