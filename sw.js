if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>n(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-ae81d9ed"],(function(e){"use strict";e.setCacheNameDetails({prefix:"设计编辑器-vue-fabric-editor"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-9def80de.css",revision:null},{url:"assets/index-d1f644e0.css",revision:null},{url:"index.html",revision:"08badc08d96aa4af0c138c22b67e635b"},{url:"js/index.737ebff9.js",revision:null},{url:"js/index.e179474e.js",revision:null},{url:"js/workbox-window.prod.es5.799c7be9.js",revision:null}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[new e.ExpirationPlugin({maxEntries:500,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|json|psd|ttf)/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:500,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
