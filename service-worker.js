self.addEventListener('install', function(event) {
  console.log('Service Worker installed.');
});

self.addEventListener('fetch', function(event) {
  // Biarkan kosong untuk fungsionalitas dasar PWA
});
