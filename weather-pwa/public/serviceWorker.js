const CAHCE_NAME = "version-1"
const urlsToCache = ["index.html" , "offline.html"]

const self = this;

// Install SW
self.addEventListener('install' , (event) => {
    event.waitUntil(
        caches.open(CAHCE_NAME)
        .then((cache) => {
            console.log('opend cache');
            return cache.addAll(urlsToCache)
        })
    )
})

// Listen for requests
self.addEventListener('fetch' , (event) => {
    
})


// Activate SW
self.addEventListener('activate' , (event) => {
    
})
