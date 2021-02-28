const CACHE_NAME = "version-1";
const urlToCache = ["index.html", "offline.html"];
const self = this;

/* 
    Install Service Worker.
    Create (or open if exists) the cache.
    Retrieve the urls and save the result in the cache (initialize cache for offline use).
*/
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache opened successfully.");
      return cache.addAll(urlToCache);
    })
  );
});

/*
    Listen for requests.
    Fires after each request.
    We can respond to the request the way we want to.
    If there is an error (in network probably),we render offline.html
*/
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then(() =>
        fetch(event.request).catch(() => caches.match("offline.html"))
      )
  );
});

/*
    Activatation
    Clear data that we don't need to cache from it.
*/
self.addEventListener("activate", (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      cacheNames.map((cacheName) => {
        if (!cacheWhiteList.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    )
  );
});
