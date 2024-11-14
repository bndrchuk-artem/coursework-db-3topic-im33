/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "18e8d2886b07587c0a1d919e711f4ca2"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.62ec8f33.css",
    "revision": "f2021979f5be01b4bfd5022cbf458d0d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.efb55814.js",
    "revision": "f6d80fa999855567021abea2e2d1c9d0"
  },
  {
    "url": "assets/js/10.34cccb11.js",
    "revision": "e065eca5ea686ec9f05f4e15eeee584a"
  },
  {
    "url": "assets/js/13.929fbdaf.js",
    "revision": "4ab0d18a9c5492a6d30c558ed63f5800"
  },
  {
    "url": "assets/js/14.c9df7c67.js",
    "revision": "77d17475c9b8ad304bb72c47f020c9d3"
  },
  {
    "url": "assets/js/15.6e01e8e7.js",
    "revision": "667168c05ec9f3cc9b63040922e37d76"
  },
  {
    "url": "assets/js/16.288de788.js",
    "revision": "0e6a4cf7495dc25ccbe19d6aaf3a4e44"
  },
  {
    "url": "assets/js/17.773c9a24.js",
    "revision": "d3bc6a0493fa1730ed403006773654dd"
  },
  {
    "url": "assets/js/18.5b636119.js",
    "revision": "0ed5a987aaee77829015b68b22056680"
  },
  {
    "url": "assets/js/19.eda4c3d9.js",
    "revision": "7d39b97edb606c113074cf9c9d2140b6"
  },
  {
    "url": "assets/js/2.55781b43.js",
    "revision": "d13ed92ec8c18eedb898c47c79bb7d66"
  },
  {
    "url": "assets/js/20.caafe77b.js",
    "revision": "f9633b4709fc51ef202ef916157786a0"
  },
  {
    "url": "assets/js/21.6a1631f2.js",
    "revision": "daa666228de399dc049969950fa3ed85"
  },
  {
    "url": "assets/js/22.2fbc1182.js",
    "revision": "cddb52eaa1d7c425cb22d4dc210d7c7e"
  },
  {
    "url": "assets/js/23.c866f3a3.js",
    "revision": "ea9812a5d3e5eae92a593d87a09ce8fb"
  },
  {
    "url": "assets/js/24.8673b707.js",
    "revision": "ead5652a6bf19f8a36d033ab5fb74b17"
  },
  {
    "url": "assets/js/25.da5fc65d.js",
    "revision": "4b585a5d0cf68bcc3f76dce5d7d221aa"
  },
  {
    "url": "assets/js/26.ae6958f0.js",
    "revision": "832b34210ab4eea94602d0f81ef82dca"
  },
  {
    "url": "assets/js/27.a4c3c158.js",
    "revision": "81d615d2a47fede9c213158662204f80"
  },
  {
    "url": "assets/js/28.6928ad38.js",
    "revision": "cf90743245097d1a116d9e8d1b630671"
  },
  {
    "url": "assets/js/29.2d4df3a4.js",
    "revision": "d145c19283983437f7b48dfa17af7932"
  },
  {
    "url": "assets/js/3.771df91f.js",
    "revision": "87b233894e1bb4a6d3d9e727cc12f175"
  },
  {
    "url": "assets/js/30.3a90c012.js",
    "revision": "6228a21178a0b46d5455025a21231cdb"
  },
  {
    "url": "assets/js/31.6d280065.js",
    "revision": "6d1e5ce9f42bf1312d1143f0ab1f4aa2"
  },
  {
    "url": "assets/js/32.dadf6ae0.js",
    "revision": "91ec902c3cbc33d8a83b7493eb7d1a26"
  },
  {
    "url": "assets/js/33.27919c14.js",
    "revision": "1850f97878bb01a27f01de6bfe18199a"
  },
  {
    "url": "assets/js/34.44c28ced.js",
    "revision": "7de21a7b96d20ad2ca41a81c2f7f945d"
  },
  {
    "url": "assets/js/35.ae172315.js",
    "revision": "47230dc91413161957ee5f7974e4cfd8"
  },
  {
    "url": "assets/js/36.b3729fab.js",
    "revision": "e6fb4bfa84b4780237acf0300e7b89a2"
  },
  {
    "url": "assets/js/37.60e8e8a7.js",
    "revision": "29dd55a7931a2dee5df8afaf90ab6515"
  },
  {
    "url": "assets/js/38.24a36981.js",
    "revision": "ee055cdf41866d4ae69d99669e8094ad"
  },
  {
    "url": "assets/js/39.d99939b1.js",
    "revision": "795600a89ce8c9662dd73b7abe5f25c7"
  },
  {
    "url": "assets/js/4.69e4e1b9.js",
    "revision": "a965f61bc470d41a373b05febaf5a171"
  },
  {
    "url": "assets/js/41.3fe40e51.js",
    "revision": "d33b8fe489e7938b5294cab96d1a7faf"
  },
  {
    "url": "assets/js/5.16971015.js",
    "revision": "c13e9d331da581ab2624595d36d35f9b"
  },
  {
    "url": "assets/js/6.8f7173b1.js",
    "revision": "49bc18da6c9f9bc787b5957f9be5bba0"
  },
  {
    "url": "assets/js/7.b40435fc.js",
    "revision": "5d64159f04f02cd4146ef66cfef63ade"
  },
  {
    "url": "assets/js/8.330203a9.js",
    "revision": "c643042a4a37c03548b344819b1e90a9"
  },
  {
    "url": "assets/js/9.3749ca08.js",
    "revision": "b344120c5d163a728ce559cce35eac92"
  },
  {
    "url": "assets/js/app.c7673d0c.js",
    "revision": "9fe948a6ca364806282ea263c0be1301"
  },
  {
    "url": "assets/js/vendors~docsearch.ad1b6247.js",
    "revision": "294b247c6ab62b4e7e84055aafee5eb6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "9679114d631412e0eca3a6755f3e8e67"
  },
  {
    "url": "design/index.html",
    "revision": "238d5777a46a9855f36634b954896608"
  },
  {
    "url": "index.html",
    "revision": "28247b11230857e9477c961fd2439181"
  },
  {
    "url": "intro/index.html",
    "revision": "1b41029beff869ea6f0876f1d7271b78"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "c749e0b1c594bf4d5e92561b8c391de1"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "d26d868670942735bbd4968faa51c340"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "5a5fca89c0f860c9276a527eb223f1d7"
  },
  {
    "url": "software/index.html",
    "revision": "ddf7b7a4eb1ea4b5e1eff903bbebe9ef"
  },
  {
    "url": "test/index.html",
    "revision": "b5ebd6b636f6a1f23efcd8f1f20f3d30"
  },
  {
    "url": "use cases/index.html",
    "revision": "743236b97d6f21fbbb8aec26921504b7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
