importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        new RegExp('https://stapi.co/api/v2/rest/spacecraft/search'),
        new workbox.strategies.NetworkFirst()
    );
}