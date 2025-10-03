// sw.js
self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
    // Basic caching logic (optional)
    event.respondWith(fetch(event.request));
});
