'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "732f1da97dca66603a502a26f8ebff2a",
".git/config": "9306bc75827f441fdac34d79bd25305d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "803221a9c7bf6d4bbe9b6073c7fcca40",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4795cb31b56970626223c96043df5946",
".git/logs/refs/heads/main": "4795cb31b56970626223c96043df5946",
".git/objects/01/b0e4ca3668b946e1c039f78055836fa346b42a": "cd6513a8f29e0ebfe7999ac43ac4183c",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/f817c92a250f9b6c6ef398b28192d3c66f3c58": "8a7f421b00891a521701c8add0854d6b",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/16/57c3ada12e21eba166b428cc908248d5453a76": "e5ec9fe7de9e44416b2714f118b3896a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/d131856c447a73cd0088f3642adc1ed926adba": "17a35f189fe81c691ca2661546ab6bb7",
".git/objects/27/820058af7513d42b0f382252f395cc6eaa283d": "8c112e9a0e83730302a2f1250939f545",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/3d71d782b096becd95dff8d2faa37cad9a93ba": "d4f79ca133390f1237630c82497efd8b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/a0c109030f6d4480a197270dea49bf341421bf": "e80334ae4c6dfd25f49ceb2966febdc1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/d920ed0bb110f503b5020a00355bec4c5677f0": "484088058f58b48fabf9f74f4445770d",
".git/objects/63/1eb96a751543bc0eafeae7c705dee52a3d3709": "fee1b5181d84555e0e92828cdeab5bda",
".git/objects/63/e7170a791895f4be78b6b7a7b99edb3c0edaad": "3e47b005916eb9744e0e0da612bbde4e",
".git/objects/65/484d946ead371272a655cc721f64e3cdf1c12e": "84f921a701358a2af310128648cb18a6",
".git/objects/7a/e3f4101c58172d3526050bca7b190facc0bb0a": "047602710779ea5ab71a19f6fe5c5665",
".git/objects/7d/88012e9ff3741a3fd60f7e36ef9a49cd0a8600": "dd80b8673100397bb8529f3af9b20fc6",
".git/objects/83/0d55d08d981581781fd015f501b03a8d3cf8f9": "cad396ab86e2acdc5ecdb57ffea3b292",
".git/objects/87/11711be8d3b0026b671983e830f5d9df850a13": "0270189c307091552de12d10c714452a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8d/b0a68b44ebe225eec73799934c47a693d6d81a": "66a5ce912021a6928231310bd39ec262",
".git/objects/8f/9bac5e50e8597ca95d8b776514ce6fe51eb2d9": "eb193bb3a2d354027f63dab899c114ff",
".git/objects/91/33c686646dfbbc75ae2b9847b00f066f4a5f62": "11b4c9dae8791e0b3a8717f66de7b5a0",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9e/a7714927fa579a8c0ed8ffc438677f25537268": "9fbc462fe6b23fac717d522c2b1a1b6c",
".git/objects/a0/0a2f11cbc9f60bf2f408b69a6f313e66531b7b": "71f287d3d89d5a07cf2cb54214ed2e10",
".git/objects/a9/ac9aeaa461efeecdc7cb7bebfade027bf8f15c": "38da1ff19ca45de1f5a21c84d2276dc4",
".git/objects/ab/a4c765711bac72824f07cc0378d52c9576a782": "aac88e7e156c44cad64fbfb3c639a922",
".git/objects/ae/074e5dd211896d1512f25ea197c4686423a869": "65d9be0feee67d4caaf56cab8c10f63a",
".git/objects/b2/c359bf532368c3ca9153c34a5bd6b5d052f18b": "0e5a27b670329901e0815fe403c9b3be",
".git/objects/b4/809983aa6f04636ae7e4a6e088f0cc5e6a8d7c": "7407c9498243a406aa5c468e282f5c6b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/2a8bb83f380b836866285a06aeb3d8d7a54509": "033d020af284c4f052b4221e8ac64290",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c5/1ea20e6c53815b9ce78573a8091ce786d9b1a9": "1046f8f1d92acddadd8a6d9d2c235e37",
".git/objects/c6/8568fad2178061577cf86e89f9983a3ef2d86e": "4f14ee2d44b6a1968a8d2ccbb26f08e0",
".git/objects/c7/808c8e2272e7cbef6a1389b2b284832d19c485": "f06f69c6f53330b5c0098493b216d7da",
".git/objects/cb/8328208b95bffde1e797554e1a2ae322db1807": "32904ca6786cbcd7d67e14815f022231",
".git/objects/ce/68e2864d56b31c010764d216d9ba0eda2c7f80": "ec9d1c58d2cfbed070d3d17a1f7986fe",
".git/objects/d4/5ac68878e14af5cfb66b29c5b3f55630cff7db": "3dcc28199182f38ae9a508baa7664b21",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/b21f9ac26e595014f9dca26807f5cb5860b72e": "65d8785da4530f3da224c109d2cbdd3c",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/555b35a6b97b3700e144cc35263931e4231fed": "7c1d160e6541cc400564263af15ddfe6",
".git/objects/f2/40a7ffb758b4dea04ea0aee1bebea67f48cfbf": "f4ccafe16e982bfecb4325aa279acca9",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/refs/heads/main": "43d5d0842e79797cfd8031f0b360a6da",
"assets/AssetManifest.bin": "ed53aff8e74edf39cff64e1a503b52fe",
"assets/AssetManifest.bin.json": "e166ebfaa362db64a7fabcd30cbebfd2",
"assets/AssetManifest.json": "29e4fea50b460e6682f75eab82547c6b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/images/Art.png": "c4029c8229e1902be743081857264b7e",
"assets/images/back.png": "c27b8177bc060eaa527c025a637fb172",
"assets/images/chevron-right.png": "b2a9240ffe0659158890cc73fa86a5c6",
"assets/images/edu.png": "68b21483be6c27e6753fc2d206b45ab3",
"assets/images/event1.jpg": "3a63d2ea6350f82d1f82c9ff30d25b3f",
"assets/images/event2.jpeg": "95706a226d3e6825a3483d8cf00b4e29",
"assets/images/event3.jpg": "5331965cbfbff6f8e9a036e755b4f612",
"assets/images/event4.jpg": "b98d5c6914304d1c79de9d26e23d0158",
"assets/images/Group%2520(1).png": "26a2a3848de168b849d9d5725bac9e20",
"assets/images/Group.png": "eea1897f3cce4e212ce745de0116666a",
"assets/images/home.png": "c81c47459bf9a9b4e0976632a349fecd",
"assets/images/icons8-home-50.png": "287b21d9df74e58c6830d9081460aa14",
"assets/images/istockphoto-1300845620-612x612.jpg": "802f160a48ef08e445ed5527df4eba5a",
"assets/images/music.png": "0ca2809c3046a843c51b1ec84a7ed1b5",
"assets/images/pngwing.com.png": "7aae290d7e954f23a7f348d9f9298ff6",
"assets/images/pp.jpg": "8bf6e94af7c6e53d8491fdf11aea9033",
"assets/images/sports.png": "f443da3001295d0b91bd6b4d44e33baa",
"assets/images/user%25201%2520(1).png": "484258f5e31cc79c04776dbd13b35941",
"assets/images/user%25201%2520(2).png": "8e3bfabe86671f4699fe16fdeea8301d",
"assets/images/vist.jpg": "2b0386d6dd74c0a3ad045fc5057eb2f2",
"assets/NOTICES": "ba6e37d2257f0ffff690cbb1d9769324",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4a6256ffaa97734f77d2da10d6b491d1",
"/": "4a6256ffaa97734f77d2da10d6b491d1",
"main.dart.js": "d84790dc9d4ed63b2c10030419a295a2",
"manifest.json": "b0765ab5560090ee0a1c914a3e1b598d",
"README.md": "6f84b774be9bdf7cef60585a94aa463f",
"version.json": "476ddb9e0023156db34a757e26e36770"};
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
