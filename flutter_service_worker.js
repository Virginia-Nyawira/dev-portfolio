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
"index.html": "923fde764a6c0e6c6963fab3d6f48381",
"/": "8b8464f068fe346321c04b2a2a7c1e17",
"main.dart.js": "14f80504b3a6655bba7818373753c0ed",
"manifest.json": "61bbc7ba5d544638f687884d41fdc39b",
"version.json": "1e7aa5669cb55e419e0eb3538b44a5e8",
"virginia-portfolio/.git/COMMIT_EDITMSG": "0418d01caa56ff0a558511a5325ea22f",
"virginia-portfolio/.git/config": "a0e5bacafe8fa9ec8c54b3a0983d153d",
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
"virginia-portfolio/.git/index": "62dd6958ca5855df78ce919ef5b59686",
"virginia-portfolio/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"virginia-portfolio/.git/logs/HEAD": "e0298677098e3afc948d3812379e8b18",
"virginia-portfolio/.git/logs/refs/heads/main": "0866f639b917a77e326fa93b1b74bf00",
"virginia-portfolio/.git/logs/refs/remotes/origin/main": "ed150a9db3337b0ca9812b5eb29c75b9",
"virginia-portfolio/.git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
"virginia-portfolio/.git/objects/01/992c7b5e03a7151cdace34184849c6e97a8ee0": "8cbe4185b3026f38ddf72ba0cabbb653",
"virginia-portfolio/.git/objects/02/30b15855c7822b53d7ce0f4f812c37a27a5164": "3dd76d8d4b0e4ac70f88042d7124c1df",
"virginia-portfolio/.git/objects/03/6bc16cc36727095eea9c207ae9b10fd2a7dc2b": "6ca97c28e645713abba8eb2be8c09276",
"virginia-portfolio/.git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
"virginia-portfolio/.git/objects/04/e9dcf6ab604c7bccbdb2f8735bbb2efc2a5a27": "41daff9955dcce51ac93de6c372af775",
"virginia-portfolio/.git/objects/06/4028a09d47776edd4dfbbbb13f9e74a8af1abd": "0b7e3e8400f47e31ec16daa6bf508bac",
"virginia-portfolio/.git/objects/08/01678116d96dd65432d73c668a54c176ea05ff": "23c38ab6893cab599889141c5eb79796",
"virginia-portfolio/.git/objects/08/eda67c99fc4f537e27d2f8fe672a28e7cec24b": "7c0bc664d9dfe72535092fd7a0038fdf",
"virginia-portfolio/.git/objects/09/d87019df503e4342ffa5110672bc4a4e8e3b40": "6de781bbf56b359d1861dc1b4735196f",
"virginia-portfolio/.git/objects/0a/969c487c70d992063e4af043bec7ccd9324668": "353a4fab2c968763f3b5ec97e11a3169",
"virginia-portfolio/.git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
"virginia-portfolio/.git/objects/0d/ce6ce1c5f33ef42ce080f93a0e09aa7cee9582": "3877f5a3d9c0dd0c31a6b87b952d00d1",
"virginia-portfolio/.git/objects/11/1ee00656b606b5f6052f4e1f473dda63ff92fb": "c76cd967bd112c38725e56c4b5556c08",
"virginia-portfolio/.git/objects/12/d90a6e3bf08f9233a92ffc3947b8affed688e9": "cace76855b16fd8f4517675ff4a31258",
"virginia-portfolio/.git/objects/12/e62a7ec7d1c1273e2e5f69d92a7eb85b24ea37": "76203ff0b772ab9fe47c97f933461f48",
"virginia-portfolio/.git/objects/17/057a2bf7ab4bbc33ab2c291ecb29becf0086cd": "951b55187715cd1be96f9d5be8e04450",
"virginia-portfolio/.git/objects/17/0fadff0de4ae5d871862bb308d44b333e850e2": "98f021a28c527ebdc3fcc30b09490a02",
"virginia-portfolio/.git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
"virginia-portfolio/.git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
"virginia-portfolio/.git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
"virginia-portfolio/.git/objects/21/b5823faf07b70e684cc4a6334ea418ac21b0fc": "7e6aadcf272366c90f45805c5a6e8e4e",
"virginia-portfolio/.git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
"virginia-portfolio/.git/objects/27/a55b6d6444c4232b319590850d841c9f918a36": "3dc484ba05b6caf13ec74447524f1f21",
"virginia-portfolio/.git/objects/2a/1a9f3a013502acb6296eaf6a8c3bccf45d9f17": "00a2a97c5197f9bf14d5a51457fe4ae5",
"virginia-portfolio/.git/objects/2b/609ba0bb211792fedcfb47836a40c3b1a31758": "b0d4e2a8fee758173562fa90ccbba616",
"virginia-portfolio/.git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
"virginia-portfolio/.git/objects/2d/3b6d6f8718f49485e568475ad23da8f024476e": "5dd10627812aa0c4559e5fe33e47f89e",
"virginia-portfolio/.git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
"virginia-portfolio/.git/objects/2f/b5ba693c1b7ac42280104a0548e6c7f46eab3b": "34bdd4c8fa3b4fe88d5202464cd22aae",
"virginia-portfolio/.git/objects/33/12ae47a5ea1f1d141d22efb574c19fbb8371a5": "bde2130fb08a88a35c616f45734269bc",
"virginia-portfolio/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"virginia-portfolio/.git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
"virginia-portfolio/.git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
"virginia-portfolio/.git/objects/3a/e4fb1499875c6606650ba8cec0b2a990f078f3": "2f34b1e2fb5a223154d9cfae274fb9fd",
"virginia-portfolio/.git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
"virginia-portfolio/.git/objects/3f/c34255af12f9a3184065d59ec86ee53bb14e48": "28933d9af18ae7eaf5a1f46f377278a1",
"virginia-portfolio/.git/objects/42/46c351eeb5abb222b2ff0d11b5626b4497efa0": "6c5c608f4353ac8d1144ea33ac7b98a7",
"virginia-portfolio/.git/objects/42/d062ed0b8a6607b997f995c3e3c7dc23d77d80": "c95ccf0935d93595c2c3112b64122d67",
"virginia-portfolio/.git/objects/46/1cb06eedbc0de45515cb556c2583a495f7274d": "7f82335df35a3159b8347d3fde745929",
"virginia-portfolio/.git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
"virginia-portfolio/.git/objects/4d/6de0520c6d86d01fb67a597f8013560e64d804": "22ca9e373fe16458dda9ee61c53080c6",
"virginia-portfolio/.git/objects/4f/02a1af4718c76b5d19ca010f2c0ad74d50e0ae": "737d6a9e9600db6ad88e66a70bdaf4ce",
"virginia-portfolio/.git/objects/4f/045f92926c8329f7c12f0c13ff577539e78bd1": "d6f30773b4c0de9f4e15128ab7d707d1",
"virginia-portfolio/.git/objects/50/c47e0ceba596716f49bf2789da92ff4707bbb8": "b9477f2517908835a94dbbefe82cd326",
"virginia-portfolio/.git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
"virginia-portfolio/.git/objects/54/10f058caf3d12a98533a926c750df1fc9b02b4": "d1e5e4f252a0aece6e9c9d75a9cae7bf",
"virginia-portfolio/.git/objects/5b/7b47869ca011b9e87070a93c8462e4109e838f": "ed02ea5d63e3971e6c1dd85e300a2ad0",
"virginia-portfolio/.git/objects/5c/433ad2de72c420f2b3a1bbd845f2c88f188248": "20e03902c1b684b45adcba016bc2d984",
"virginia-portfolio/.git/objects/5d/5b189d1de6b446d15498fb13e1c293b5a97d76": "e88721d0e1b96d5c10f31b2d1f65a30e",
"virginia-portfolio/.git/objects/5d/a1eaee625f9d91e4416c0a2c8fbd523a2059bd": "65693b428cd13c4b2614ff7d0ce9e059",
"virginia-portfolio/.git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
"virginia-portfolio/.git/objects/64/596046dcc33da91752d064b3e1781c2ce5de28": "a8b5873a36db9e2271e0aa0d1e3d4d7f",
"virginia-portfolio/.git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
"virginia-portfolio/.git/objects/6b/579a04c082a634b36971dbcf574b7bd97b72e4": "7ae3ec074d4dea5e0f16bb68c7507c05",
"virginia-portfolio/.git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
"virginia-portfolio/.git/objects/6c/789218e6d9879d0e76e905f44fc9a0a0b037a1": "eddf600acf589c7696bfed7dc9b8f278",
"virginia-portfolio/.git/objects/6e/e8e08f8ff7450286e342e7226a31232beca3af": "80789731f31c2f004e5f018f27d11ee2",
"virginia-portfolio/.git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
"virginia-portfolio/.git/objects/74/18dbcfabbd94868196ff87a2e507ec22a340d0": "165be59cd4be6f46c6b8b3123ca89272",
"virginia-portfolio/.git/objects/74/6d1febc850b0cf0ffcf49a7b40d082a56d1234": "30f0e69790086c226d8d2d003d36a28b",
"virginia-portfolio/.git/objects/76/dd5c71d73fb0c63c7a0fa4495b6d60fd317dd3": "36f66e0df344f164a51c24fd371a3b01",
"virginia-portfolio/.git/objects/7e/a46a06832d8a70335278fd28fc757e9e3093c4": "48ae1fed4b2b6fbf2d9fb9632284e2eb",
"virginia-portfolio/.git/objects/7f/0f9c0af310e79fecf7a9ee37f00dd328c8db92": "a86b4c2e5aef20fec40a30a89515ac8b",
"virginia-portfolio/.git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
"virginia-portfolio/.git/objects/85/3c9b83bc0d2dc062d90f299f0ad284c9788eda": "bc70b19bcec2e0bc8d2cd16e8683704e",
"virginia-portfolio/.git/objects/85/9deb17ba8b32d4fcf6ae8142f13e4383cfb6ab": "c85f7250c689f5ede0997b82e13348fe",
"virginia-portfolio/.git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
"virginia-portfolio/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"virginia-portfolio/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"virginia-portfolio/.git/objects/8c/70ee95ee6edeaa770794d2130cf66591bb15d2": "00f292ab90bbf908599a3c7e09c65c24",
"virginia-portfolio/.git/objects/90/0a8dafc27de4ba74ba92b429e8357b3321567f": "c42fd3c251a5f2be44b3b304e407fd43",
"virginia-portfolio/.git/objects/95/dc458039ef9f6b6747d5ac57c6de9b5a48103b": "5d6efa57f11b4d732bd5abc9de2c71c6",
"virginia-portfolio/.git/objects/97/dcb0a483dd8221091648da22ca5163529658f2": "6cd3b270942ec3ff482d690870b221d8",
"virginia-portfolio/.git/objects/9a/946795e88604c5974cd5fa362935e407bdfbf4": "44c50b49e48a6b920a0f10a41f1516cd",
"virginia-portfolio/.git/objects/9c/781fc20456106a153baad1db1f87f72b0b8d32": "54e40280c538e1071b49a68f38983383",
"virginia-portfolio/.git/objects/9c/e88c941ae097462460fa47a09806a3dabbe361": "c280f707d828dbd5e00c26f75549c605",
"virginia-portfolio/.git/objects/9e/01127267339293f01d0f012e082691177f5ba1": "20da673e09356144bc4aad0a1c54145a",
"virginia-portfolio/.git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
"virginia-portfolio/.git/objects/a6/a45b602e947c75fb4f6e530f1cd8c46e865f9a": "712177d484b3a5b51ca2da76c104acb5",
"virginia-portfolio/.git/objects/a8/c6daa55780664dc78e6be9627e59651b439093": "39406c183cd48076a0c1d04b1dd43e4d",
"virginia-portfolio/.git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
"virginia-portfolio/.git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
"virginia-portfolio/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"virginia-portfolio/.git/objects/b8/f5083aab1e304bdd57e29a8eadee5cf1c5f810": "2e347601a3d8975c161d1849a947e4a5",
"virginia-portfolio/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"virginia-portfolio/.git/objects/b9/5637c3982c6a7a10cdbd13e4ea2f36ff8905bd": "91fc6354050ab1d6132e4abad7288c8d",
"virginia-portfolio/.git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
"virginia-portfolio/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"virginia-portfolio/.git/objects/be/bb8f5f37d1b3f4d282870c3fce91182f450824": "badb3274a35bb7e75b42c227010572af",
"virginia-portfolio/.git/objects/c3/006c0c75f55f4f9b2242fec2d22e5c626aa352": "cc124421372cb34ef215da320609f64d",
"virginia-portfolio/.git/objects/c5/16376834e67587e093d01c04955c3729a89fc1": "fbf6522e19ad061011c886d3b058fdc6",
"virginia-portfolio/.git/objects/c8/55bb62fed146d27991eec8490985cb4012482f": "b8b17f520e7cb7b66b2f521fb5294a74",
"virginia-portfolio/.git/objects/cd/519333c37c921a43ee1f6eb04bab3501c5620c": "89bcb78c561dadce0e324c5f047e7c62",
"virginia-portfolio/.git/objects/ce/384e2ca1effac5e47393fb0969dcf38298e73f": "263a2f2f67ef22a15a25149341ae25f7",
"virginia-portfolio/.git/objects/cf/985bece4c78e58d6343ca3de9cacbb65f51fbe": "d4b51ca95eb6269474efd50ba00f710e",
"virginia-portfolio/.git/objects/d0/cf852f537eba155889c5616882a8c36062e10f": "7fc214fbfbca2d02a62216b75012935b",
"virginia-portfolio/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"virginia-portfolio/.git/objects/d5/426f101a76b17735d84493adfd451c6510faf7": "473858e35be94f130d97da80f93ad510",
"virginia-portfolio/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"virginia-portfolio/.git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
"virginia-portfolio/.git/objects/e4/e3413fe0c791e9dcfec666527326722d86fbfd": "5aaf3717d2f71daa9782e905b7010941",
"virginia-portfolio/.git/objects/e5/b2146809419944f1bd0200d7d957fb28fb95b9": "d05ba89bc163372ff629a317354610f9",
"virginia-portfolio/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"virginia-portfolio/.git/objects/ec/dec25cab89ba58fe67c3be7b1926203fa0dfe4": "eef75f00f141767041d9bbeac520e16c",
"virginia-portfolio/.git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
"virginia-portfolio/.git/objects/ed/67e9a3060f274bed62b1f7dc3a757a101ca66c": "bbbb9a1104ba6649333fe6af9c136b55",
"virginia-portfolio/.git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
"virginia-portfolio/.git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
"virginia-portfolio/.git/objects/f2/b7628611332f7a3c90058e0c76554cde438d2f": "c508223aa29de57b1c431e4ec9ccf01b",
"virginia-portfolio/.git/objects/f4/6f3cf62ea933e3d76db0b327eafdd233a5411c": "b06c66e51c618984b27435703e3f5150",
"virginia-portfolio/.git/objects/f9/d5174bb60ec18a6e420bf15f845b561074c3d5": "717d1f1a3717c11669261a5b3fd90378",
"virginia-portfolio/.git/objects/f9/de0cf4d50525759b65a5548ef1348ec41ed104": "189525da6e56f02ae48da20df3bdb78e",
"virginia-portfolio/.git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
"virginia-portfolio/.git/objects/fd/2b79ac83af135736e40a4f084c534384ad72e0": "5d38b7695f0870c97c70a0619fb53fdb",
"virginia-portfolio/.git/objects/fe/45ea511b5f2e79b2688742b07a6e28ec3aafc4": "15d06b63f546c68695f740396522c1d6",
"virginia-portfolio/.git/objects/ff/a04af7377901be9034b15b88fffae5bb27d05d": "63f525c95575bed309eccd866a096c7b",
"virginia-portfolio/.git/refs/heads/main": "a7b4abcc62140eb39f92e2404b0b1d92",
"virginia-portfolio/.git/refs/remotes/origin/main": "a7b4abcc62140eb39f92e2404b0b1d92",
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
"virginia-portfolio/index.html": "8b8464f068fe346321c04b2a2a7c1e17",
"virginia-portfolio/main.dart.js": "14014f04a0ae507c6402b3024788424d",
"virginia-portfolio/manifest.json": "61bbc7ba5d544638f687884d41fdc39b",
"virginia-portfolio/README.md": "083264e1d4c825aec98ff803ee9178a1",
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
