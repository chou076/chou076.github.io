if(!self.define){let e,i={};const d=(d,s)=>(d=new URL(d+".js",s).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(s,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const n=e=>d(e,a),l={module:{uri:a},exports:c,require:n};i[a]=Promise.all(s.map((e=>l[e]||n(e)))).then((e=>(r(...e),c)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/08/01/hello-world/index.html",revision:"e666020e3a520217b8e9b12efad91f84"},{url:"2022/08/01/我的第一篇博客/index.html",revision:"6a2447438999d7ab2e14368dd099b74d"},{url:"404.html",revision:"291299c6d2d0bdec0b8d1d7da7931b51"},{url:"about/index.html",revision:"4037d16764cc48868c48f801ebb6cf0c"},{url:"archives/2022/08/index.html",revision:"75a20a73faecb517e42fb8d36d5a4bbb"},{url:"archives/2022/index.html",revision:"2f68ae36b490362ec4d74383462008e6"},{url:"archives/index.html",revision:"96d0027f66d443098498b458b93942a7"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/Hello-World/index.html",revision:"da9ade6ab641b7affe9a24e1126a7fde"},{url:"categories/index.html",revision:"629394fcff39a1908f0db5a576b124e8"},{url:"categories/文章/index.html",revision:"5ac778ffe1ea15ab76c0e518b11a5642"},{url:"changelog/index.html",revision:"3e2cda5c34736c8fd00e3523aef51e1a"},{url:"css/index.css",revision:"2612043be7dd57f44624d6ac5844c7ee"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"c4ce33f262ae13eaa898bc49ea6f1893"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"dabd668b1427254036dac64c99a3fd71"},{url:"links/index.html",revision:"4bfbd0f412097c4ab344fda7262c2337"},{url:"Message Board/index.html",revision:"130e2244461677027b1990d3f17fdbf8"},{url:"tags/Hello-World/index.html",revision:"891a41a88d2157e321786966c5dd5834"},{url:"tags/index.html",revision:"68d1674b8e9b5a2f18365f4c288c7e25"},{url:"tags/无聊/index.html",revision:"57ac6859ceeeadfb825fdcc2e6099353"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
