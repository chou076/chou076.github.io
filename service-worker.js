if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const l=e=>s(e,r),n={module:{uri:r},exports:a,require:l};i[r]=Promise.all(c.map((e=>n[e]||l(e)))).then((e=>(d(...e),a)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/08/01/hello-world/index.html",revision:"13a6ed68ad11e9e8f94d3da4aa771b90"},{url:"2022/08/01/我的第一篇博客/index.html",revision:"ca48d7cd1774d5273f55531c44e9553e"},{url:"404.html",revision:"4cd1b34e22be3a8516b98630739e0841"},{url:"about/index.html",revision:"35c2364abebdfa2bc2806c3c81ca1e3c"},{url:"archives/2022/08/index.html",revision:"1a651990ccec66750b493d0285426d7f"},{url:"archives/2022/index.html",revision:"58cee8c7b7be8df3c7604e5d9fcf824b"},{url:"archives/index.html",revision:"945bc0bac38650af51f5b0fc71130a5b"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"book/index.html",revision:"3c7a649f7b6d3815199b6d381dac3ef1"},{url:"categories/Hello-World/index.html",revision:"9062160beaa646808498a1311c838861"},{url:"categories/index.html",revision:"1a7fe01701bc070377efb6ddad8615c2"},{url:"categories/文章/index.html",revision:"ae7781b07d35febb952cb30816521a4e"},{url:"changelog/index.html",revision:"2094b979647db0552ff867290ce83468"},{url:"css/index.css",revision:"6e2f03d80e32c8e8b8bdeacfa4048c42"},{url:"css/mouse.css",revision:"09bb49ab2d2a8f8116371593abf4a68a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/weibo.css",revision:"0e946b69fa6a094edf84470330fe9145"},{url:"css/xxx.css",revision:"999db03d6d0b90f1de3623194123235f"},{url:"game/index.html",revision:"021d0cfaf88d0e62ac48150438cc2382"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"81c4dc9045fa23b1b6a2de5b6f420726"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/snowflake.js",revision:"10075e081fa8c744a9bd8f89dfd2cdac"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/weibo.js",revision:"f614f7a3ea4e13eac8a81c6dac5e7d66"},{url:"link/index.html",revision:"e040b94cc71b3835218cdd7e3250a002"},{url:"links/index.html",revision:"58423ee782f3f26622f3e866985bd6f3"},{url:"Message Board/index.html",revision:"c5149b9f6c505b96ad427008dbe89c9a"},{url:"movie/index.html",revision:"308d5ce6f5280acd7e74cc358c6e8841"},{url:"playlist/index.html",revision:"5b821a319b9305e2db44ce74452c9174"},{url:"tags/Hello-World/index.html",revision:"903cfdd969b8c8c0fdce4aecc3020ba0"},{url:"tags/index.html",revision:"c86621e3485c90dc0306bd1b3c15c363"},{url:"tags/无聊/index.html",revision:"123a3bc2d37b84f18ef7a40bedee26eb"},{url:"video/index.html",revision:"4f395081872d6cee99be45d5ee2da434"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
