if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const a=e=>s(e,c),l={module:{uri:c},exports:n,require:a};i[c]=Promise.all(d.map((e=>l[e]||a(e)))).then((e=>(r(...e),n)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/08/01/hello-world/index.html",revision:"da0e68d41a406785f14de8fefa27d2a5"},{url:"2022/08/01/我的第一篇博客/index.html",revision:"878606006f8be376607bcfaa7c4e97c4"},{url:"404.html",revision:"82eb8a9e624d5806a309cd829161f93c"},{url:"about/index.html",revision:"9b8752ebc9b6d9d32589b1878962fb13"},{url:"archives/2022/08/index.html",revision:"a986a7924c707a0793949dc0e0995dbe"},{url:"archives/2022/index.html",revision:"04af657606e60ea2253ad9e646a32bcb"},{url:"archives/index.html",revision:"54d99d98f04a983d3de4bffea4a2f2dc"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/Hello-World/index.html",revision:"7b625e5ee06705ac69b78c11f4f1c747"},{url:"categories/index.html",revision:"2bc93d59012564aed683ed679c98d73d"},{url:"categories/文章/index.html",revision:"42823ee2294e50937202b3f94106e785"},{url:"changelog/index.html",revision:"2ed5f7cee4c66974447f5669e89df6b0"},{url:"css/index.css",revision:"2612043be7dd57f44624d6ac5844c7ee"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"ede5c5f64940f7180a14a9e632984180"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"295400a81afeb6f3215a2f9f131d0436"},{url:"links/index.html",revision:"8b97b5b111ab487118c3e83fc6a51d58"},{url:"Message Board/index.html",revision:"bc81952169a19249dc6e4403f4ae6748"},{url:"tags/Hello-World/index.html",revision:"d48cd54663c8b083595970ea3c31e299"},{url:"tags/index.html",revision:"0e3038bcb8bc913a600c3c039ac29f3d"},{url:"tags/无聊/index.html",revision:"097a461dd6f8ee089d035d59d5c4e315"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
