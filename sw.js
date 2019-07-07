const cacheVersion = '1';
const staticCacheName = `site-static-${cacheVersion}`;
const dynamicCacheName = `site-dynamic-${cacheVersion}`;

const assets = [
  '/',
  '/index.html',
  '/pages/fallback.html',

  'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
  'https://fonts.googleapis.com/css?family=Mukta&display=swap',

  '/js/aside.js',
  '/js/form.js',
  '/js/recipes.js',
  '/js/index.js',

  '/css/_reset.css',
  '/css/_recipes.css',
  '/css/_navbar.css',
  '/css/_aside.css',
  '/css/style.css',

  
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/mukta/v6/iJWKBXyXfDDVXbnBrXyw023e.woff2',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
];

self.addEventListener('install', e => {
  console.log('sw installed');

  e.waitUntil(
    caches.open(staticCacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', e => {
  const deleteOldCaches = () =>
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== staticCacheName)
          .map(key => caches.delete(key)))
    )

  e.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', e => {
  let response;

  e.respondWith(
    caches.match(e.request).then(cacheRes => {
      return cacheRes
        || fetch(e.request)
            .then(res => {
              response = res;
              return caches.open(dynamicCacheName);
            })
            .then(cache => {
              cache.put(e.request.url, response.clone());
              return response;
            })
    })
    .catch(() => caches.match('/pages/fallback.html'))
  );
});
