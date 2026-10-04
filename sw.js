const CACHE_NAME = 'meu-treino-shell-v2.3.1.1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './apple-touch-icon.png',
  './favicon.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const req = event.request;

  // Navegações: tenta a rede primeiro para encontrar versões novas; se estiver offline, usa cache.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy)).catch(() => {});
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Arquivos do app: cache-first com atualização silenciosa em segundo plano.
  event.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req).then(res => {
        if (res && res.ok) caches.open(CACHE_NAME).then(cache => cache.put(req, res.clone())).catch(() => {});
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
