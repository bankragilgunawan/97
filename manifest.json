const CACHE_NAME = 'SicBo Pro Analyzer';
const ASSETS_TO_CACHE = [
  '/97/',
  '/97/index.html',
  '/97/manifest.json',
  '/97/ikon-192.png',
  '/97/ikon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Menggunakan link absolut agar browser tidak bingung dengan domain custom
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
