(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-08ff215d":"6318491d","chunk-22644f5a":"69dd2a61","chunk-40e7e57c":"80295386","chunk-6248607a":"f8333f65","chunk-730b8101":"4a4337b0","chunk-fc5900aa":"31ebf0ad"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-08ff215d":1,"chunk-22644f5a":1,"chunk-40e7e57c":1,"chunk-6248607a":1,"chunk-730b8101":1,"chunk-fc5900aa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-08ff215d":"9094309f","chunk-22644f5a":"4519d8ff","chunk-40e7e57c":"b80abbe3","chunk-6248607a":"4b9d8fb9","chunk-730b8101":"b4e8bb49","chunk-fc5900aa":"90227bbd"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0807":function(e,t,n){"use strict";var r=n("2b23"),a=n.n(r);a.a},"1a0d":function(e,t,n){},"2b23":function(e,t,n){},"4ae6":function(e,t,n){"use strict";var r=n("a35b"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"app-mobile":this.is_mobile},attrs:{id:"app"}},[n("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",rel:"stylesheet"}}),n("transition",{attrs:{name:"side-bar-fade"}},[n("SideBarMobile",{directives:[{name:"show",rawName:"v-show",value:this.mobile_menu_pressed&&this.is_mobile,expression:"this.mobile_menu_pressed && this.is_mobile"}],on:{"link-pressed":e.closeMenu}})],1),this.is_mobile?n("TopBar",{on:{"menu-pressed":e.toggleMenu,"link-pressed":e.closeMenu}}):n("SideBar"),this.is_mobile?e._e():n("span"),n("transition",{attrs:{name:"page-fade"}},[n("router-view",{staticClass:"page",attrs:{is_mobile:this.is_mobile},on:{"ga-event":e.sendGa}})],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sb-main"},[n("router-link",{staticStyle:{"text-decoration":"none","align-self":"end"},attrs:{to:"/"}},[n("h1",{staticStyle:{"margin-right":"-4px"}},[e._v(" Daniel Raymond"),n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{id:"dot",to:"/blimpadventuresyaaay"}},[e._v(".")])],1)]),n("router-link",{attrs:{to:"/projects"}},[e._v(" Projects ")]),n("router-link",{attrs:{to:"/chump"}},[e._v(" 4-Bit Computer ")]),n("router-link",{attrs:{to:"/bnn"}},[e._v(" AI Processor ")]),n("router-link",{attrs:{to:"/careers"}},[e._v(" Career Mapping ")]),n("router-link",{attrs:{to:"/about"}},[e._v(" About ")])],1)},s=[],u={name:"SideBar"},c=u,l=(n("5ea7"),n("2877")),p=Object(l["a"])(c,i,s,!1,null,"5a4eff81",null),f=p.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sbm-main"},[n("span"),n("router-link",{attrs:{to:"/projects"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("Projects ")]),n("router-link",{attrs:{to:"/chump"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("4-Bit Computer ")]),n("router-link",{attrs:{to:"/bnn"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("AI Processor ")]),n("router-link",{attrs:{to:"/careers"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("Career Mapping ")]),n("router-link",{attrs:{to:"/about"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[e._v("About ")])],1)},m=[],h={name:"SideBarMobile"},b=h,v=(n("0807"),Object(l["a"])(b,d,m,!1,null,"012c1aca",null)),_=v.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tb-main"},[r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"},nativeOn:{click:function(t){return e.$emit("link-pressed")}}},[r("h1",[e._v(" Daniel Raymond"),r("span",{attrs:{id:"dot"}},[e._v(".")])])]),r("img",{attrs:{src:n("95a0"),alt:"Menu"},on:{click:function(t){return e.$emit("menu-pressed")}}})],1)},g=[],y={name:"TopBar"},w=y,O=(n("aee6"),Object(l["a"])(w,k,g,!1,null,"1e3f58e4",null)),j=O.exports,x={name:"app",components:{SideBar:f,TopBar:j,SideBarMobile:_},mounted:function(){this.onResize()},data:function(){return{is_mobile:!1,mobile_menu_pressed:!1}},methods:{onResize:function(){window.innerWidth>960?this.is_mobile=!1:this.is_mobile=!0},toggleMenu:function(){this.mobile_menu_pressed=!this.mobile_menu_pressed},closeMenu:function(){this.mobile_menu_pressed=!1},sendGa:function(e,t,n){this.$ga.event({eventCategory:e,eventAction:t,eventLabel:n})}},created:function(){window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},S=x,C=(n("034f"),Object(l["a"])(S,a,o,!1,null,null,null)),E=C.exports,M=(n("d3b7"),n("8c4f")),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"def-main"}},[n("h1",[e._v("Hello 👋")]),e._m(0),n("br"),n("br"),n("br"),n("p",{staticClass:"mini"},[e._v(" Reach out to me "),n("a",{attrs:{href:"mailto:dan@raymond.ch"}},[e._v("here")]),n("br"),n("br"),e._v(" Vue the source code "),n("a",{attrs:{target:"_blank",href:"https://github.com/draymond63/website"},on:{click:function(t){return e.$emit("ga-event","Github","Sent","Source")}}},[e._v("here ")])])])},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" I'm Daniel - an "),n("a",[e._v("AI")]),e._v(" enthuisast 🧠 and current "),n("a",[e._v("engineering")]),e._v(" undergraduate student 🧑‍💻 at the University of Waterloo 🏫🏯"),n("br"),n("br"),e._v(" This is a new version of my portfolio, so be sure to check back for more posts on my work! ")])}],A={name:"HomePage",components:{}},$=A,T=(n("4ae6"),Object(l["a"])($,P,B,!1,null,"47ca87a7",null)),N=T.exports;r["a"].use(M["a"]);var L=[{path:"/",name:"Home",component:N,meta:{title:"Home Page - Example App",metaTags:[{name:"description",content:"The home page of our example app."},{property:"og:description",content:"The home page of our example app."}]}},{path:"/about",name:"About Me",component:function(){return n.e("chunk-08ff215d").then(n.bind(null,"0bd2"))}},{path:"/projects",name:"Overview",component:function(){return n.e("chunk-fc5900aa").then(n.bind(null,"d9f2"))}},{path:"/chump",name:"CHUMP",component:function(){return n.e("chunk-6248607a").then(n.bind(null,"0535"))}},{path:"/bnn",name:"BNN Processor",component:function(){return n.e("chunk-40e7e57c").then(n.bind(null,"bb42"))}},{path:"/careers",name:"Career Mapping",component:function(){return n.e("chunk-730b8101").then(n.bind(null,"1ba2"))}},{path:"/blimpadventuresyaaay",name:"Blimp Adventures",component:function(){return n.e("chunk-22644f5a").then(n.bind(null,"2a20"))}},{path:"*",redirect:"/"}],R=new M["a"]({routes:L}),z=R,D=n("0284"),H=n.n(D),I=n("998c"),U=n.n(I);r["a"].use(U.a),r["a"].config.productionTip=!1,r["a"].use(H.a,{id:"UA-148416481-2",router:z}),new r["a"]({router:z,render:function(e){return e(E)}}).$mount("#app")},"5ea7":function(e,t,n){"use strict";var r=n("a3ca"),a=n.n(r);a.a},"85ec":function(e,t,n){},"95a0":function(e,t,n){e.exports=n.p+"img/mobile-menu.6bd08f43.png"},a35b:function(e,t,n){},a3ca:function(e,t,n){},aee6:function(e,t,n){"use strict";var r=n("1a0d"),a=n.n(r);a.a}});
//# sourceMappingURL=app.406094a0.js.map