if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const l=e=>d(e,s),n={module:{uri:s},exports:a,require:l};i[s]=Promise.all(c.map((e=>n[e]||l(e)))).then((e=>(r(...e),a)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/08/01/hello-world/index.html",revision:"c1d2adacbaa901810d93bf01397e1646"},{url:"2022/08/01/我的第一篇博客/index.html",revision:"cfb34430f10d94d081757ff260b57513"},{url:"404.html",revision:"ed0d3ad3001237a49b0a826badfcf844"},{url:"about/index.html",revision:"a38dd57f0568eaf94ec4c6edae5f152a"},{url:"archives/2022/08/index.html",revision:"9ad0699b9a2bcfef23cbd72113ee777d"},{url:"archives/2022/index.html",revision:"52b94633aad7cb09652aed750e34975b"},{url:"archives/index.html",revision:"f853b2c7d28671ef263c70d8d2a08d48"},{url:"categories/Hello-World/index.html",revision:"c89001239e9b68abbd46232751281467"},{url:"categories/index.html",revision:"9afa88292087315782753cb865fcee9e"},{url:"categories/文章/index.html",revision:"caca8c0e6a7094cfc4f537554681404b"},{url:"changelog/index.html",revision:"c9cc9e8365fba2f49bb5e749dc94de0c"},{url:"css/index.css",revision:"647b3e6a5cb5817b18caf916ab487309"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"7eca4f3adb3355c06b0f2722e5b3efba"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"327aacdd1d2ad73a942b36e0f97fde19"},{url:"links/index.html",revision:"4d96ed2c09f5a67614d20f7532922fe0"},{url:"tags/Hello-World/index.html",revision:"87b95b9a904bfffc8d86a8888da531e5"},{url:"tags/index.html",revision:"b14d0a1ca19f92947c27c078ac82c855"},{url:"tags/无聊/index.html",revision:"6ae155487068606cc64b1d6cd4cd8338"},{url:"图库/index.html",revision:"ff6838739184c6f192161c3998912065"},{url:"图库1/index.html",revision:"f00a93e320e2ddd640b96dc2360b7b26"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
