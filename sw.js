const CACHE_NAME = 'model-gallery-v1';
const ASSETS_TO_CACHE = [
  '/assets/models1.glb',
  '/assets/models2.glb',
  '/assets/models3.glb',
  '/assets/models4.glb',
  '/assets/models5.glb',
  '/assets/models6.glb',
  '/assets/models7.glb',
  '/assets/models8.glb',
  '/assets/models9.glb',
  '/assets/models10.glb',
  '/assets/models11.glb',
  '/assets/models12.glb',
  '/assets/models13.glb',
  '/assets/models14.glb'
];

// Service Workerのインストール時
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Service Workerのアクティベート時
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// リクエストのインターセプト
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
