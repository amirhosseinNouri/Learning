// const CAHCE_NAME = "version-1";
// const urlsToCache = ["index.html", "offline.html"];

// const self = this;

// // Install SW
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CAHCE_NAME).then((cache) => {
//       console.log("opend cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // Listen for requests
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then(() => {
//       return fetch(event.request).catch(() => caches.match("offline.html"));
//     })
//   );
// });

// // Activate SW
// self.addEventListener("activate", (event) => {
//   const cacheWhiteList = [];
//   cacheWhiteList.push(CAHCE_NAME);

//   event.waitUntil(
//     caches.keys().then((cacheNames) =>
//       Promise.all(
//         cacheNames.map((item) => {
//           if (!cacheWhiteList.includes(item)) {
//             return caches.delete(item);
//           }
//         })
//       )
//     )
//   );
// });

const CACHE_NAME = "version-1";
const urlToCache = ["index.html", "offline.html"];
const self = this;

/* 
    Install Service Worker.
    Create (or open if exists) the cache.
    Retrieve the urls and save the result in the cache.
*/
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache opened successfully.");
      return cache.addAll(urlToCache);
    })
  );
});
