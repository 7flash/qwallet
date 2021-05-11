'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "957daae16fd489e3dea513ec30ac3285",
"assets/assets/images/contribution/reputation.svg": "b4d31aa658790b2c950f309ccbb1f09d",
"assets/assets/images/contribution/planted.svg": "1f13d7c8123c9fc57c1d9b18ac81488b",
"assets/assets/images/contribution/transaction.svg": "8c99b98bf7fc451726e1c5bbbd0a7117",
"assets/assets/images/contribution/community.svg": "c69ad1403bef2660e5588a1239fa028e",
"assets/assets/images/wallet/arrow_up.svg": "ce9df3d9f79b73e1842b9a26281e7b63",
"assets/assets/images/wallet/currency_info_cards/planted_seeds/logo.jpg": "73d3f12077e57a73a56833d2e313aa3b",
"assets/assets/images/wallet/currency_info_cards/planted_seeds/background.jpg": "71f7764719cfaca9242d323fec89b9b1",
"assets/assets/images/wallet/currency_info_cards/hypha/logo.jpg": "c290951953284721596ec3b265d360db",
"assets/assets/images/wallet/currency_info_cards/hypha/background.jpg": "7d9362ee54695f8abac059ecde2727a3",
"assets/assets/images/wallet/currency_info_cards/seeds/logo.jpg": "35affd39347641b648a7d4871601b734",
"assets/assets/images/wallet/currency_info_cards/seeds/background.jpg": "83310fc3bf812d5690c8fd230cbd6845",
"assets/assets/images/wallet/arrow_down.svg": "75b408ff9e745ab9e1939e54f786581d",
"assets/assets/images/wallet/app_bar/appbar_icon.svg": "3e75223fb983390aeac93301066cc9a9",
"assets/assets/images/wallet/app_bar/scan_qr_code_icon.svg": "3da40ffac09843044ac07688d29111fb",
"assets/assets/images/wallet/app_bar/appbar_seeds_text.svg": "66e4b829b12f00c24f9108c431268432",
"assets/assets/images/onboarding/onboarding4.png": "c827e300632cd9e4ef2e465f48d02cb3",
"assets/assets/images/onboarding/leaves/pointing_right/small_light_leaf.svg": "855042a169a8810f56b6881f8cc82c82",
"assets/assets/images/onboarding/leaves/pointing_right/big_dark_leaf.svg": "0dfe019b7954be72085b662037e217ea",
"assets/assets/images/onboarding/leaves/pointing_right/big_light_leaf.svg": "0881ae44531b5ada6a4fe1b6d4e9cc40",
"assets/assets/images/onboarding/leaves/pointing_left/small_light_leaf.svg": "da059c9b6a164811cdc5932548e45e5a",
"assets/assets/images/onboarding/leaves/pointing_left/medium_dark_leaf.svg": "7b659965238c3e9733bb0a378c872945",
"assets/assets/images/onboarding/leaves/pointing_left/medium_light_leaf.svg": "1f8a37fad026353635184394631e6930",
"assets/assets/images/onboarding/onboarding5.png": "12e795b5a876cb6a85d3118466d82d79",
"assets/assets/images/onboarding/onboarding3.png": "c4703cbde96217b4ad7c0824f713ad13",
"assets/assets/images/onboarding/onboarding1.png": "6e5e02fbbb89792ccc726595497ee372",
"assets/assets/images/onboarding/onboarding2.png": "af4bde91c643ad8cca06271a28ec2962",
"assets/assets/images/governance.svg": "4ba544959a267020b850e4c45118325a",
"assets/assets/images/seeds.png": "a6b489cb45c3575b93071bb77984fced",
"assets/assets/images/seeds_logo.svg": "039fa8670952836a665dd7f99acb4809",
"assets/assets/images/profile.svg": "0a0447f709addc1b4acfc34e7adf0a22",
"assets/assets/images/app_icon_transparent.png": "34d5e39f8dd9dfe5c3faa488fcdf8b70",
"assets/assets/images/seeds_light_wallet_logo.png": "1f8b15393b0be3180b2ed5b32e54de30",
"assets/assets/images/navigation_bar/explore.svg": "8e4291bfe6eb08b0090ae7a2daf8e213",
"assets/assets/images/navigation_bar/user_profile.svg": "1905b1d3356308af21849027c3fe32cd",
"assets/assets/images/navigation_bar/user_profile_selected.svg": "e3dd0cba5216ae170080219c946425db",
"assets/assets/images/navigation_bar/wallet_selected.svg": "d9da77d90068cabc67a5be8db0e8dcde",
"assets/assets/images/navigation_bar/explore_selected.svg": "41a078b6649636e4c3709fba7a353c5d",
"assets/assets/images/navigation_bar/wallet.svg": "6f0c934b5dd6e12c35c7ae253566c5ed",
"assets/assets/images/security/success_outlined_icon.svg": "fbe3e8589f43293fed85b1095a51d294",
"assets/assets/images/security/key_guardians_icon.svg": "3073752e52e4a357ab9cfe5b495ae61b",
"assets/assets/images/app_icon.png": "c7042ad987f3cadad70eaf10c941345a",
"assets/assets/images/citizenship/reputation.svg": "1a617e2f7900d46b913df372f3837300",
"assets/assets/images/citizenship/planted.svg": "5ddceb358da30f4fe29d5cc11a4c480c",
"assets/assets/images/citizenship/transaction.svg": "2bda42dcaad4cb64f59d2525ad745088",
"assets/assets/images/citizenship/community.svg": "56763e885eb6dae612e83e53324558a5",
"assets/assets/images/citizenship/age.svg": "1599a8389a85380a190da36bbe983d91",
"assets/assets/images/lotus.svg": "881ad7a41c6add53a52b37c47430fb5e",
"assets/assets/images/community.svg": "dd1081071334b0f01fb1381c0abfc21d",
"assets/assets/images/loading.png": "58065b328e57e5cf5754ec8ee1f124e7",
"assets/assets/images/ecosystem.svg": "f6178f69a5adc685526e805a00ea024d",
"assets/assets/images/harvest.svg": "f5757c832a157484c4f3e056557130f6",
"assets/assets/images/guardians/guardian_tutorial_4.png": "cceead79bbb44ba12c1e75b26d0eda48",
"assets/assets/images/guardians/guardian_tutorial_2.png": "8adc4190085df25944fb359c6d9b93f5",
"assets/assets/images/guardians/guardian_tutorial_1.png": "dabcd4f625214353741a96230a304123",
"assets/assets/images/guardians/guardian_tutorial_3.png": "51a7efc96d05b04977906fa8a2242dc1",
"assets/assets/images/guardians/guardian_shield.png": "4d02d4b078ca145a76773907ee2432c5",
"assets/assets/images/exchange.svg": "ce132268f3d6d7d0663261c8f5069916",
"assets/assets/images/wallet.svg": "3ccecfeaee22a9fcbc4614da476c7070",
"assets/assets/images/explore/thumb_up.svg": "86a9cdc087381ed25ee7bc231558abdd",
"assets/assets/images/explore/plant_seed.svg": "0f78a3ae183c64134cb05dc418a5685c",
"assets/assets/images/explore/person_send_invite.svg": "c269cd3612d4c45aca2772562ac30309",
"assets/assets/images/lotus_support_big.svg": "7a678ffc85f935887677cbefa7c40a2c",
"assets/assets/images/logout.svg": "10751ef2fc0324a20e466c91f2521e22",
"assets/assets/images/login/background.png": "776e3db784f98ba837deac84aeb4bee9",
"assets/assets/images/login/seeds_light_wallet_logo.svg": "1c6667bac3db8203f5f63774bd2c4018",
"assets/assets/images/lotus_support_small.svg": "415ef34ac2ef413244ab1ece2ec7c9a9",
"assets/assets/fonts/worksans/WorkSans-SemiBold.ttf": "6f8da6d25c25d58ef3ec1c8b7c0e69c3",
"assets/assets/fonts/worksans/WorkSans-Bold.ttf": "1fed2d8028f8f5356cbecedb03427405",
"assets/assets/fonts/worksans/WorkSans-Regular.ttf": "30be604d29fd477c201fb1d6e668eaeb",
"assets/assets/fonts/worksans/WorkSans-ExtraBold.ttf": "3f0198654d9416523e6efdbdaacfd49b",
"assets/assets/fonts/worksans/WorkSans-Black.ttf": "5cf3f71e75f5140bedf693cd953d3ca2",
"assets/assets/fonts/worksans/WorkSans-Thin.ttf": "9dee4fd838fcf47752a9115ce8b21f5c",
"assets/assets/fonts/worksans/WorkSans-Medium.ttf": "488b6f72b6183415e7a20aafa803a0c8",
"assets/assets/fonts/worksans/WorkSans-Light.ttf": "f696fb4c6b331373967288debc9baaec",
"assets/assets/fonts/SFProDisplay/SFProDisplay-Heavy.ttf": "28117b039b5512f6a685921297af1fee",
"assets/assets/fonts/SFProDisplay/SFProDisplay-UltraLight.ttf": "7db578a4a6449b94c9ceccf2d12fed70",
"assets/assets/fonts/SFProDisplay/SFProDisplay-Light.ttf": "2cd731774226a9ab428ffdd82ff90825",
"assets/assets/fonts/SFProDisplay/SFProDisplay-SemiBold.ttf": "bfddc2a3b6bc31c9c25a8f391450dd00",
"assets/assets/fonts/SFProDisplay/SFProDisplay-Bold.ttf": "42d79eba974955740a95cc0fb71ca247",
"assets/assets/fonts/SFProDisplay/SFProDisplay-Thin.ttf": "49689c08ce2ad9a3d749766b184eb1de",
"assets/assets/fonts/SFProDisplay/SFProDisplay-Black.ttf": "bc43a493c339ab4f2bd3fa9a5ec5b231",
"assets/assets/fonts/SFProDisplay/SFProDisplay-Medium.ttf": "70830fa4b0f259734f7e52903f3efd59",
"assets/assets/fonts/SFProDisplay/SFProDisplay-Regular.ttf": "d09549c1ab4a5947a007561521e45da3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "6199e9f3d18d5274bd1979f36753bd87",
"assets/AssetManifest.json": "a2dc494e77d117771569def35c3836cc",
"assets/NOTICES": "4da8da89d0967426cec4574d51b0ecac",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "a5eed3062282528b465aaa4e0945dd9a",
"/": "a5eed3062282528b465aaa4e0945dd9a",
"manifest.json": "102211763a193988e6848dae4536b9d1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "e89e8eecc0896c4ced8c96edc2b67339"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
