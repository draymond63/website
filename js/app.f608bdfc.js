(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-25394744":"800bb9b2","chunk-2d0bcde3":"3b6d38f2","chunk-6d7ebe5a":"7df7b63f","chunk-90fcbc56":"19fbc2d4","chunk-a7005734":"34155692","chunk-dc95ff5e":"d5596079"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-25394744":1,"chunk-6d7ebe5a":1,"chunk-90fcbc56":1,"chunk-a7005734":1,"chunk-dc95ff5e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-25394744":"20ed81f9","chunk-2d0bcde3":"31d6cfe0","chunk-6d7ebe5a":"6f8e2de2","chunk-90fcbc56":"3bad1e92","chunk-a7005734":"be7361ea","chunk-dc95ff5e":"1dff70ac"}[e]+".css",i=u.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var c=a[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}i[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0024":function(e,t,n){},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"0b0c":function(e,t,n){"use strict";var r=n("0024"),o=n.n(r);o.a},"412e":function(e,t,n){"use strict";var r=n("d896"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"app-mobile":this.is_mobile},attrs:{id:"app"}},[n("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",rel:"stylesheet"}}),n("transition",{attrs:{name:"side-bar-fade"}},[n("SideBarMobile",{directives:[{name:"show",rawName:"v-show",value:this.mobile_menu_pressed&&this.is_mobile,expression:"this.mobile_menu_pressed && this.is_mobile"}],on:{"link-pressed":e.closeMenu}})],1),this.is_mobile?n("TopBar",{on:{"menu-pressed":e.toggleMenu,"link-pressed":e.closeMenu}}):n("SideBar"),this.is_mobile?e._e():n("span"),n("transition",{attrs:{name:"page-fade"}},[n("router-view",{staticClass:"page",attrs:{is_mobile:this.is_mobile}})],1)],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("router-link",{staticStyle:{"text-decoration":"none","align-self":"end"},attrs:{to:"/"}},[n("h1",{staticStyle:{"margin-right":"-4px"}},[e._v(" Daniel Raymond"),n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{id:"dot",to:"/blimpadventuresyaaay"}},[e._v(".")])],1)]),n("router-link",{attrs:{to:"/projects"}},[e._v(" Overview ")]),n("router-link",{attrs:{to:"/chump"}},[e._v(" 4-Bit Computer ")]),n("router-link",{attrs:{to:"/bnn"}},[e._v(" BNN Processor ")]),n("router-link",{attrs:{to:"/about"}},[e._v(" About ")])],1)},s=[],u={name:"SideBar"},c=u,l=(n("0b0c"),n("2877")),d=Object(l["a"])(c,a,s,!1,null,"eb519e42",null),p=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("span"),n("router-link",{attrs:{to:"/projects"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("Overview ")]),n("router-link",{attrs:{to:"/chump"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("4-Bit Computer ")]),n("router-link",{attrs:{to:"/bnn"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("BNN Processor ")]),n("router-link",{attrs:{to:"/about"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("About ")])],1)},m=[],h={name:"SideBarMobile"},b=h,v=(n("f6a6"),Object(l["a"])(b,f,m,!1,null,"976601fe",null)),_=v.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[r("h1",[e._v(" Daniel Raymond"),r("span",{attrs:{id:"dot"}},[e._v(".")])])]),r("img",{attrs:{src:n("95a0"),alt:"Menu"},on:{click:function(t){return e.$emit("menu-pressed")}}})],1)},g=[],y={name:"TopBar"},w=y,O=(n("412e"),Object(l["a"])(w,k,g,!1,null,"3e22f9aa",null)),x=O.exports,j={name:"app",components:{SideBar:p,TopBar:x,SideBarMobile:_},mounted:function(){this.onResize()},data:function(){return{is_mobile:!1,mobile_menu_pressed:!1}},methods:{onResize:function(){window.innerWidth>960?this.is_mobile=!1:this.is_mobile=!0},toggleMenu:function(){this.mobile_menu_pressed=!this.mobile_menu_pressed},closeMenu:function(){this.mobile_menu_pressed=!1}},created:function(){window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},B=j,S=(n("034f"),Object(l["a"])(B,o,i,!1,null,null,null)),E=S.exports,M=(n("d3b7"),n("8c4f")),P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main"}},[n("h1",[e._v("Hello 👋")]),n("p",[e._v(" I'm Daniel - an "),n("a",[e._v("AI")]),e._v(" enthuisast 🧠 and current "),n("a",[e._v("engineering")]),e._v(" undergraduate student 🧑‍💻 at the University of Waterloo 🏫🏯"),n("br"),n("br"),e._v(" This is a new version of my portfolio, so be sure to check back for more posts on my work! ")]),n("br"),n("br"),n("br"),n("p",{attrs:{id:"mini"}},[e._v(" Reach out to me "),n("a",{attrs:{href:"mailto:dan@raymond.ch"}},[e._v("here")]),n("br"),n("br"),e._v(" Vue the source code "),n("a",{attrs:{target:"_blank",href:"https://github.com/draymond63/website"}},[e._v("here")])])])}],C={name:"HomePage",components:{}},A=C,N=(n("d733"),Object(l["a"])(A,P,T,!1,null,"14330a4a",null)),$=N.exports;r["a"].use(M["a"]);var L=[{path:"/",name:"Home",component:$,meta:{title:"Home Page - Example App",metaTags:[{name:"description",content:"The home page of our example app."},{property:"og:description",content:"The home page of our example app."}]}},{path:"/about",name:"About Me",component:function(){return n.e("chunk-90fcbc56").then(n.bind(null,"0bd2"))}},{path:"/projects",name:"Overview",component:function(){return n.e("chunk-25394744").then(n.bind(null,"d9f2"))}},{path:"/chump",name:"CHUMP",component:function(){return n.e("chunk-a7005734").then(n.bind(null,"0535"))}},{path:"/bnn",name:"BNN Processor",component:function(){return n.e("chunk-dc95ff5e").then(n.bind(null,"bb42"))}},{path:"/blimpadventuresyaaay",name:"Blimp Adventures",component:function(){return n.e("chunk-2d0bcde3").then(n.bind(null,"2a20"))}},{path:"/happybdaymom",name:"Moms Instruction",component:function(){return n.e("chunk-6d7ebe5a").then(n.bind(null,"3bf8"))}},{path:"*",redirect:"/"}],R=new M["a"]({routes:L}),z=R,D=n("0284"),H=n.n(D);r["a"].config.productionTip=!1,r["a"].use(H.a,{id:"UA-148416481-2",router:z}),new r["a"]({router:z,render:function(e){return e(E)}}).$mount("#app")},"59b8":function(e,t,n){},"85ec":function(e,t,n){},"95a0":function(e,t,n){e.exports=n.p+"img/mobile-menu.6bd08f43.png"},ba07:function(e,t,n){},d733:function(e,t,n){"use strict";var r=n("59b8"),o=n.n(r);o.a},d896:function(e,t,n){},f6a6:function(e,t,n){"use strict";var r=n("ba07"),o=n.n(r);o.a}});
//# sourceMappingURL=app.f608bdfc.js.map