(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-09645cb0":"5bf59949","chunk-119b335e":"5d851809","chunk-4d4eb65e":"ef327f05","chunk-57888402":"25819b94","chunk-a4775c98":"72922221","chunk-fc007824":"504ec782"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-09645cb0":1,"chunk-119b335e":1,"chunk-4d4eb65e":1,"chunk-57888402":1,"chunk-a4775c98":1,"chunk-fc007824":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-09645cb0":"4efb5809","chunk-119b335e":"a242a1e0","chunk-4d4eb65e":"ed8663bc","chunk-57888402":"15d35946","chunk-a4775c98":"50d7417c","chunk-fc007824":"09fc1055"}[e]+".css",i=u.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var c=a[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===i))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===r||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}i[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"0d51":function(e,t,n){},"2ee1":function(e,t,n){"use strict";var r=n("340f"),o=n.n(r);o.a},"31ad":function(e,t,n){},"340f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"app-mobile":this.is_mobile},attrs:{id:"app"}},[n("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",rel:"stylesheet"}}),n("transition",{attrs:{name:"side-bar-fade"}},[n("SideBarMobile",{directives:[{name:"show",rawName:"v-show",value:this.mobile_menu_pressed&&this.is_mobile,expression:"this.mobile_menu_pressed && this.is_mobile"}],on:{"link-pressed":e.closeMenu}})],1),this.is_mobile?n("TopBar",{on:{"menu-pressed":e.toggleMenu,"link-pressed":e.closeMenu}}):n("SideBar"),this.is_mobile?e._e():n("span"),n("transition",{attrs:{name:"page-fade"}},[n("router-view",{staticClass:"page",attrs:{is_mobile:this.is_mobile},on:{"ga-event":e.sendGa}})],1)],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sb-main"},[n("router-link",{staticStyle:{"text-decoration":"none","align-self":"end"},attrs:{to:"/"}},[n("h1",{staticStyle:{"margin-right":"-4px"}},[e._v(" Daniel Raymond"),n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{id:"dot",to:"/blimpadventuresyaaay"}},[e._v(".")])],1)]),n("router-link",{attrs:{to:"/projects"}},[e._v(" Projects ")]),n("router-link",{attrs:{to:"/chump"}},[e._v(" 4-Bit Computer ")]),n("router-link",{attrs:{to:"/bnn"}},[e._v(" AI Processor ")]),n("router-link",{attrs:{to:"/careers"}},[e._v(" Career Mapping ")]),n("router-link",{attrs:{to:"/about"}},[e._v(" About ")])],1)},s=[],u={name:"SideBar"},c=u,l=(n("f7d7"),n("2877")),p=Object(l["a"])(c,a,s,!1,null,"d94eb4d6",null),d=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sbm-main"},[n("span"),n("router-link",{attrs:{to:"/projects"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("Projects ")]),n("router-link",{attrs:{to:"/chump"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("4-Bit Computer ")]),n("router-link",{attrs:{to:"/bnn"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("AI Processor ")]),n("router-link",{attrs:{to:"/careers"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("Career Mapping ")]),n("router-link",{attrs:{to:"/about"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("About ")])],1)},f=[],h={name:"SideBarMobile"},b=h,v=(n("a432"),Object(l["a"])(b,m,f,!1,null,"a86e2624",null)),_=v.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tb-main"},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[r("h1",[e._v(" Daniel Raymond"),r("span",{attrs:{id:"dot"}},[e._v(".")])])]),r("img",{attrs:{src:n("95a0"),alt:"Menu"},on:{click:function(t){return e.$emit("menu-pressed")}}})],1)},g=[],y={name:"TopBar"},w=y,O=(n("2ee1"),Object(l["a"])(w,k,g,!1,null,"55389372",null)),j=O.exports,x={name:"app",components:{SideBar:d,TopBar:j,SideBarMobile:_},mounted:function(){this.onResize()},data:function(){return{is_mobile:!1,mobile_menu_pressed:!1}},methods:{onResize:function(){window.innerWidth>960?this.is_mobile=!1:this.is_mobile=!0},toggleMenu:function(){this.mobile_menu_pressed=!this.mobile_menu_pressed},closeMenu:function(){this.mobile_menu_pressed=!1},sendGa:function(e,t,n){this.$ga.event({eventCategory:e,eventAction:t,eventLabel:n})}},created:function(){window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},S=x,C=(n("034f"),Object(l["a"])(S,o,i,!1,null,null,null)),E=C.exports,M=(n("d3b7"),n("8c4f")),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"def-main"}},[n("h1",[e._v("Hello 👋")]),e._m(0),n("br"),n("br"),n("br"),n("p",{staticClass:"mini"},[e._v(" Reach out to me "),n("a",{attrs:{href:"mailto:dan@raymond.ch"}},[e._v("here")]),n("br"),n("br"),e._v(" Vue the source code "),n("a",{attrs:{target:"_blank",href:"https://github.com/draymond63/website"},on:{click:function(t){return e.$emit("ga-event","Github","Sent","Source")}}},[e._v("here ")])])])},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" I'm Daniel - an "),n("a",[e._v("AI")]),e._v(" enthuisast 🧠 and current "),n("a",[e._v("engineering")]),e._v(" undergraduate student 🧑‍💻 at the University of Waterloo 🏫🏯"),n("br"),n("br"),e._v(" This is a new version of my portfolio, so be sure to check back for more posts on my work! ")])}],A={name:"HomePage",components:{}},$=A,T=(n("be74"),Object(l["a"])($,P,B,!1,null,"6d5ed174",null)),N=T.exports;r["a"].use(M["a"]);var L=[{path:"/",name:"Home",component:N,meta:{title:"Home Page - Example App",metaTags:[{name:"description",content:"The home page of our example app."},{property:"og:description",content:"The home page of our example app."}]}},{path:"/about",name:"About Me",component:function(){return n.e("chunk-fc007824").then(n.bind(null,"0bd2"))}},{path:"/projects",name:"Overview",component:function(){return n.e("chunk-09645cb0").then(n.bind(null,"d9f2"))}},{path:"/chump",name:"CHUMP",component:function(){return n.e("chunk-a4775c98").then(n.bind(null,"0535"))}},{path:"/bnn",name:"BNN Processor",component:function(){return n.e("chunk-4d4eb65e").then(n.bind(null,"bb42"))}},{path:"/careers",name:"Career Mapping",component:function(){return n.e("chunk-57888402").then(n.bind(null,"1ba2"))}},{path:"/blimpadventuresyaaay",name:"Blimp Adventures",component:function(){return n.e("chunk-119b335e").then(n.bind(null,"2a20"))}},{path:"*",redirect:"/"}],R=new M["a"]({routes:L}),z=R,D=n("0284"),H=n.n(D),I=n("998c"),U=n.n(I);r["a"].use(U.a),r["a"].config.productionTip=!1,r["a"].use(H.a,{id:"UA-148416481-2",router:z}),new r["a"]({router:z,render:function(e){return e(E)}}).$mount("#app")},"85ec":function(e,t,n){},"95a0":function(e,t,n){e.exports=n.p+"img/mobile-menu.6bd08f43.png"},a432:function(e,t,n){"use strict";var r=n("0d51"),o=n.n(r);o.a},b7c3:function(e,t,n){},be74:function(e,t,n){"use strict";var r=n("31ad"),o=n.n(r);o.a},f7d7:function(e,t,n){"use strict";var r=n("b7c3"),o=n.n(r);o.a}});
//# sourceMappingURL=app.b705c318.js.map