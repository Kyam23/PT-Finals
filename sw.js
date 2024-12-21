importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        new RegExp('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
        new workbox.strategies.NetworkFirst()
    );
}
