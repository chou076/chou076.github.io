if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const l=e=>s(e,c),a={module:{uri:c},exports:n,require:l};i[c]=Promise.all(r.map((e=>a[e]||l(e)))).then((e=>(d(...e),n)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/08/01/hello-world/index.html",revision:"e666020e3a520217b8e9b12efad91f84"},{url:"2022/08/01/我的第一篇博客/index.html",revision:"6a2447438999d7ab2e14368dd099b74d"},{url:"404.html",revision:"49d293cabee1e78171c0ecd9c1dd1e1e"},{url:"about/index.html",revision:"a168f6a248efb277e8a5712c23257e31"},{url:"archives/2022/08/index.html",revision:"1849ea36a8f7046026503b868b7799f0"},{url:"archives/2022/index.html",revision:"a65be872328621e54a15449473df57b7"},{url:"archives/index.html",revision:"6e56b3a4379f15cb6de5b6c725bd050a"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/Hello-World/index.html",revision:"5367eb18465e94ce7906b3e2f7110cf4"},{url:"categories/index.html",revision:"f73627d37bb479cb6c6bc6eddd659cf1"},{url:"categories/文章/index.html",revision:"2e7c7c47f525198afc0c9bb5eba0f9c4"},{url:"changelog/index.html",revision:"2a7057311b486a1687a86fad10de7efd"},{url:"css/index.css",revision:"2612043be7dd57f44624d6ac5844c7ee"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"62b2835697ed0f119ba36bcc1d0f2140"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"850f37707d22bf62a78359ea6f5aa746"},{url:"links/index.html",revision:"907254e6b91ca359bb3cb47b3eef8fd9"},{url:"Message Board/index.html",revision:"4c9c6c0fbc53a9c136f01a182b905f11"},{url:"tags/Hello-World/index.html",revision:"45db1d4e80995f4f335663d2004e231b"},{url:"tags/index.html",revision:"907542a903b77b358e8a297db8e7261a"},{url:"tags/无聊/index.html",revision:"ee20ce194827858df354766b5a8266e6"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
