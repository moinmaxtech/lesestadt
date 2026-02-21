// Service Worker für Lese-Stadt v199
const CACHE_NAME = 'lesestadt-v226';
const urlsToCache = [
  './',
  './Lese-Stadt-v226.html',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap',
  'https://raw.githubusercontent.com/moinmaxtech/lesestadt/main/buildingTiles_sheet.png',
  'https://raw.githubusercontent.com/moinmaxtech/lesestadt/main/cityTiles_sheet.png',
  'https://raw.githubusercontent.com/moinmaxtech/lesestadt/main/sheet_allCars.png'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
      .catch(err => console.error('[Service Worker] Cache failed:', err))
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          console.log('[Service Worker] Serving from cache:', event.request.url);
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(err => {
          console.log('[Service Worker] Fetch failed, serving offline page:', err);
          // You could return a custom offline page here
          return new Response('Offline - App funktioniert trotzdem!', {
            headers: { 'Content-Type': 'text/plain' }
          });
        });
      })
  );
});
