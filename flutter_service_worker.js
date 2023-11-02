'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f8c666a18dc3739eb46e0f6458016ae4",
"assets/AssetManifest.json": "6b645985a1489504ebc8034ce52ce621",
"assets/assets/icons/apis.jpg": "bc62c513166c8effc023322f80a4fef7",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/electrical.png": "aa5ab041267fc0f4025bf1ce2c257109",
"assets/assets/icons/energyplan.jpg": "b283c615da933eaf134ff6bb2ee5cb5f",
"assets/assets/icons/facebook.svg": "8500679fd9cc977c45e436270a457dfc",
"assets/assets/icons/figma.png": "7dc1ed60b5671e940486d6c766dffa6c",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/flutterflow.png": "9c10bb16b7ac92ec73034e774b65f7b2",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/gw.png": "207c13e378784d6a96a1c9dd205ba049",
"assets/assets/icons/icontwitter.svg": "d5b7860f3a7248269f7918c7d9089221",
"assets/assets/icons/itwitter.svg": "c850546d54fe7f5c146f5a91d0288247",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/matlab.png": "d7cdf39f2c61c8ab8567e0af49f85431",
"assets/assets/icons/medium.svg": "4ee277befa3e1a96cfe24324ddf25ad0",
"assets/assets/icons/php.png": "9b94c7c60e2abb13f6db6b1c80535c7b",
"assets/assets/icons/tenders.jpeg": "7aac939eafb26067f8fe2b5e13b67582",
"assets/assets/icons/twitter.png": "ffdfdda33b374b7882b2dc0baec51c67",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/icons/x.png": "7ec16784b9ede67098b03b23e9937914",
"assets/assets/icons/xtwt.svg": "153f22b5da960b71298b032879838d5e",
"assets/assets/images/alarm.jpg": "7f8f2e55f5f47deaf440b3be64ca15d7",
"assets/assets/images/car.png": "ae3e0dda1da997a4e0ccd5cf1a25d2cd",
"assets/assets/images/chat.png": "489b7f6246ce741be85ca0d551e9d07b",
"assets/assets/images/coffee.png": "0a3380640f0eb6e36b694dafb7fe8e97",
"assets/assets/images/cui.png": "287f9787968f5df14897e9066c22a388",
"assets/assets/images/doctor.png": "b7a983fb5bf36114133c169f66bbfef7",
"assets/assets/images/forv.jpg": "a24a8f49b14322babbf9abae83d67980",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/pearl.png": "d0b8e65b44ed47b31c88677b1ffda513",
"assets/assets/images/player.png": "612730c3861b2af0a0ae161ac8a72345",
"assets/assets/images/profilev.jpg": "69a6c6483db4799ee450f27b5267b119",
"assets/assets/images/recipe.png": "47c72988f9bb6d301948ac38877b231c",
"assets/assets/images/task.png": "62d6be2ebaef80434b114eacd9102a52",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "f57d51eaed67ccfef67cd4b79cb547d2",
"assets/NOTICES": "9ed0e8c3d84dfd7b2d0d4e27eb302914",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "10d8d183c6385c432e5b96a7de048334",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5bc848f1bcbc12c153650eecef599443",
"/": "de966b5fba186062b900828f25f21b02",
"main.dart.js": "2384bafca592bafcc40824ed1e985898",
"manifest.json": "61bbc7ba5d544638f687884d41fdc39b",
"version.json": "1e7aa5669cb55e419e0eb3538b44a5e8",
"virginia-portfolio/.git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"virginia-portfolio/.git/config": "edd52ef8d81eb6d65efbb6063fb56158",
"virginia-portfolio/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"virginia-portfolio/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"virginia-portfolio/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"virginia-portfolio/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"virginia-portfolio/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"virginia-portfolio/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"virginia-portfolio/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"virginia-portfolio/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"virginia-portfolio/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"virginia-portfolio/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"virginia-portfolio/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"virginia-portfolio/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"virginia-portfolio/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"virginia-portfolio/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"virginia-portfolio/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"virginia-portfolio/.git/index": "0237e5de65640c8eceac1fdd04f76e33",
"virginia-portfolio/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"virginia-portfolio/.git/logs/HEAD": "4b21955309932904345311e73ccb7a9b",
"virginia-portfolio/.git/logs/refs/heads/main": "e6ac4ac3bc525b3ff94fa9ccbd3fc152",
"virginia-portfolio/.git/logs/refs/remotes/origin/main": "1d24f6c49abeb4300dcbd69712bedd13",
"virginia-portfolio/.git/objects/01/992c7b5e03a7151cdace34184849c6e97a8ee0": "8cbe4185b3026f38ddf72ba0cabbb653",
"virginia-portfolio/.git/objects/42/d062ed0b8a6607b997f995c3e3c7dc23d77d80": "c95ccf0935d93595c2c3112b64122d67",
"virginia-portfolio/.git/objects/74/18dbcfabbd94868196ff87a2e507ec22a340d0": "165be59cd4be6f46c6b8b3123ca89272",
"virginia-portfolio/.git/refs/heads/main": "63318ca0d4383fce415b96c6f20e8bcc",
"virginia-portfolio/.git/refs/remotes/origin/main": "63318ca0d4383fce415b96c6f20e8bcc",
"virginia-portfolio/assets/AssetManifest.bin": "f8c666a18dc3739eb46e0f6458016ae4",
"virginia-portfolio/assets/AssetManifest.json": "6b645985a1489504ebc8034ce52ce621",
"virginia-portfolio/assets/assets/icons/apis.jpg": "bc62c513166c8effc023322f80a4fef7",
"virginia-portfolio/assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"virginia-portfolio/assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"virginia-portfolio/assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"virginia-portfolio/assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"virginia-portfolio/assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"virginia-portfolio/assets/assets/icons/electrical.png": "aa5ab041267fc0f4025bf1ce2c257109",
"virginia-portfolio/assets/assets/icons/energyplan.jpg": "b283c615da933eaf134ff6bb2ee5cb5f",
"virginia-portfolio/assets/assets/icons/facebook.svg": "8500679fd9cc977c45e436270a457dfc",
"virginia-portfolio/assets/assets/icons/figma.png": "7dc1ed60b5671e940486d6c766dffa6c",
"virginia-portfolio/assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"virginia-portfolio/assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"virginia-portfolio/assets/assets/icons/flutterflow.png": "9c10bb16b7ac92ec73034e774b65f7b2",
"virginia-portfolio/assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"virginia-portfolio/assets/assets/icons/gw.png": "207c13e378784d6a96a1c9dd205ba049",
"virginia-portfolio/assets/assets/icons/icontwitter.svg": "d5b7860f3a7248269f7918c7d9089221",
"virginia-portfolio/assets/assets/icons/itwitter.svg": "c850546d54fe7f5c146f5a91d0288247",
"virginia-portfolio/assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"virginia-portfolio/assets/assets/icons/matlab.png": "d7cdf39f2c61c8ab8567e0af49f85431",
"virginia-portfolio/assets/assets/icons/medium.svg": "4ee277befa3e1a96cfe24324ddf25ad0",
"virginia-portfolio/assets/assets/icons/php.png": "9b94c7c60e2abb13f6db6b1c80535c7b",
"virginia-portfolio/assets/assets/icons/tenders.jpeg": "7aac939eafb26067f8fe2b5e13b67582",
"virginia-portfolio/assets/assets/icons/twitter.png": "ffdfdda33b374b7882b2dc0baec51c67",
"virginia-portfolio/assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"virginia-portfolio/assets/assets/icons/x.png": "7ec16784b9ede67098b03b23e9937914",
"virginia-portfolio/assets/assets/icons/xtwt.svg": "153f22b5da960b71298b032879838d5e",
"virginia-portfolio/assets/assets/images/alarm.jpg": "7f8f2e55f5f47deaf440b3be64ca15d7",
"virginia-portfolio/assets/assets/images/car.png": "ae3e0dda1da997a4e0ccd5cf1a25d2cd",
"virginia-portfolio/assets/assets/images/chat.png": "489b7f6246ce741be85ca0d551e9d07b",
"virginia-portfolio/assets/assets/images/coffee.png": "0a3380640f0eb6e36b694dafb7fe8e97",
"virginia-portfolio/assets/assets/images/cui.png": "287f9787968f5df14897e9066c22a388",
"virginia-portfolio/assets/assets/images/doctor.png": "b7a983fb5bf36114133c169f66bbfef7",
"virginia-portfolio/assets/assets/images/forv.jpg": "a24a8f49b14322babbf9abae83d67980",
"virginia-portfolio/assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"virginia-portfolio/assets/assets/images/pearl.png": "d0b8e65b44ed47b31c88677b1ffda513",
"virginia-portfolio/assets/assets/images/player.png": "612730c3861b2af0a0ae161ac8a72345",
"virginia-portfolio/assets/assets/images/profilev.jpg": "69a6c6483db4799ee450f27b5267b119",
"virginia-portfolio/assets/assets/images/recipe.png": "47c72988f9bb6d301948ac38877b231c",
"virginia-portfolio/assets/assets/images/task.png": "62d6be2ebaef80434b114eacd9102a52",
"virginia-portfolio/assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"virginia-portfolio/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"virginia-portfolio/assets/fonts/MaterialIcons-Regular.otf": "f57d51eaed67ccfef67cd4b79cb547d2",
"virginia-portfolio/assets/NOTICES": "9ed0e8c3d84dfd7b2d0d4e27eb302914",
"virginia-portfolio/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "10d8d183c6385c432e5b96a7de048334",
"virginia-portfolio/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"virginia-portfolio/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"virginia-portfolio/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"virginia-portfolio/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"virginia-portfolio/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"virginia-portfolio/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"virginia-portfolio/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"virginia-portfolio/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"virginia-portfolio/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"virginia-portfolio/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"virginia-portfolio/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"virginia-portfolio/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"virginia-portfolio/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"virginia-portfolio/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"virginia-portfolio/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"virginia-portfolio/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"virginia-portfolio/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"virginia-portfolio/index.html": "de966b5fba186062b900828f25f21b02",
"virginia-portfolio/main.dart.js": "2384bafca592bafcc40824ed1e985898",
"virginia-portfolio/manifest.json": "61bbc7ba5d544638f687884d41fdc39b",
"virginia-portfolio/README.md": "f40e70119ed4f1aea3b1a220907b3974",
"virginia-portfolio/version.json": "1e7aa5669cb55e419e0eb3538b44a5e8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
