(()=>{"use strict";var t={473:(t,e,n)=>{t.exports=n.p+"img/pexels-engin-akyurt-1437267.278f6618e3bd2ca9fd94..jpg"},389:(t,e,n)=>{t.exports=n.p+"img/pexels-engin-akyurt-1487511.b41348fb23aba50c5264..jpg"},789:(t,e,n)=>{t.exports=n.p+"img/pexels-kristina-paukshtite-1146760.a20b4c10ca04be210ad2..jpg"},271:(t,e,n)=>{t.exports=n.p+"img/pexels-narda-yescas-1566837.bdb52cc6e1381d16f286..jpg"}},e={};function n(a){var c=e[a];if(void 0!==c)return c.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");if(a.length)for(var c=a.length-1;c>-1&&!t;)t=a[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{function t(){const t=document.createElement("div");t.classList.add("home");let e=function(t){const e=document.createElement("p");return e.textContent=t,e}("This Italian ristorante is magnificent! Our chef Artie Bucco and hostess Charmaine Bucco await your arrival! We have tons of dishes: from Spaghetti Bolognese to our famous Osso Bucco. We even on rare occasions can cook some rabbit for you, following the family recipe in Artie's bloodline. Make sure to pay and to not flirt with our waitresses, or keep them in any way occupied so they're distracted from work.");return e.id="restaurant-text",t.appendChild(e),t}const e=function(){const e=document.getElementById("main");e.classList.add("main-home"),e.textContent="",e.appendChild(t())};function a(t,e,n,a,c){const o=document.createElement("div");o.classList.add("menu-item");const i=document.createElement("div");i.classList.add("menu-text");const s=document.createElement("h2");s.textContent=t;const r=document.createElement("div");r.classList.add("price"),r.textContent=n,i.appendChild(s),i.appendChild(function(t){const e=document.createElement("p");return e.textContent=t,e}(e)),i.appendChild(r);const d=document.createElement("img");return d.src=a,d.alt=c,o.appendChild(i),o.appendChild(d),o}const c=function(){const t=document.getElementById("main");t.classList.contains("main-home")&&t.classList.remove("main-home"),t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("menu","main-menu");const e=document.createElement("h1");e.classList.add("menu-title"),e.textContent="Menu";const c=document.createElement("div");c.classList.add("menu-container");const o=n(473),i=n(271),s=n(789),r=n(389);return c.appendChild(a("Strawberry Pizza","Strawberry pizza, a nightmarish concept to the authentic Italian cuisine. But it tastes great.","$12",i,"Pizza with cheese, ham and some slices of strawberries")),c.appendChild(a("Penne Bolognese","The classic. Sit back, relax, and eat.","$16",o,"Penne bolognese")),c.appendChild(a("Pasta Carbonara","Quite heavy on the stomach, but a classic nevertheless.","$19",r,"Pasta Carbonara")),c.appendChild(a("Pizza","With ingredients of your choosing. You name it, we have it.","$21",s,"Pizza")),t.appendChild(e),t.appendChild(c),t}())};function o(t,e,n,a){const c=document.createElement("div");c.classList.add("contact-card");const o=document.createElement("h3");return o.textContent=t,c.appendChild(o),c.appendChild(i(e)),c.appendChild(i(n)),c.appendChild(i(a)),c}function i(t){const e=document.createElement("p");return e.textContent=t,e}const s=function(){const t=document.getElementById("main");t.classList.contains("main-home")&&t.classList.remove("main-home"),t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact");const e=document.createElement("h1");return e.classList.add("contact-title"),e.textContent="Contact Us",t.appendChild(e),t.appendChild(o("Artie Bucco","Chef","555-3233-232A","artieBucco@notFake.com")),t.appendChild(o("Charmaine Bucco","Manager","555-2323-222E","charmaineBucco@notFake.com")),t}())};function r(){const t=document.createElement("header");t.classList.add("header");const n=document.createElement("h1");return n.classList.add("restaurant-name"),n.innerHTML="Vesuvio",t.appendChild(n),t.appendChild(function(){const t=document.createElement("nav"),n=document.createElement("button");n.classList.add("home-button","nav-button"),n.textContent="Home",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(d(n),e())}));const a=document.createElement("button");a.classList.add("menu-button","nav-button"),a.textContent="Menu",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(d(a),c())}));const o=document.createElement("button");return o.classList.add("contact-button","nav-button"),o.textContent="Contact",o.addEventListener("click",(t=>{t.target.classList.contains("active")||(d(o),s())})),t.appendChild(n),t.appendChild(a),t.appendChild(o),t}()),t}function d(t){document.querySelectorAll(".nav-button").forEach((t=>{t.classList.contains("active")&&t.classList.remove("active")})),t.classList.add("active")}(function(){const t=document.getElementById("content");t.appendChild(r()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");e.textContent="made by ";const n=document.createElement("a");return n.href="http://github.com/Kessius00",n.target="_blank",n.textContent="Kessius",e.appendChild(n),t.appendChild(e),t}()),d(document.querySelector(".home-button")),e()})()})()})();