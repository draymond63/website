(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4,8],{209:function(t,e,r){var content=r(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("30c3b65c",content,!0,{sourceMap:!1})},211:function(t,e,r){"use strict";r(209)},212:function(t,e,r){var o=r(83)(!1);o.push([t.i,"#navbar[data-v-623bceea]{width:100%}.desktop[data-v-623bceea]{z-index:1;position:fixed;width:100vw;background:var(--main-color)}.desktop>.links[data-v-623bceea]{display:flex;justify-content:space-around;max-width:var(--max-content-width);margin:auto}a[data-v-623bceea]{color:var(--background-color);padding:1rem;text-decoration:none;font-size:1.2em;font-weight:500}.mobile-menu[data-v-623bceea]{position:fixed;top:0;left:0;width:100vw;height:100vh;padding:20vh 2rem 0;z-index:2;background:var(--background-color);text-align:center;font-size:2em;display:flex;flex-direction:column}.mobile-menu>.close-button[data-v-623bceea]{text-align:right;font-size:1.5em;color:var(--text-color)}.mobile-menu>a[data-v-623bceea]{color:var(--text-color)}.mobile-menu>a[data-v-623bceea]:not(:last-child){border-bottom:1px solid var(--main-color)}button[data-v-623bceea]{position:absolute;top:1.5rem;right:1.5rem;z-index:1;background:var(--main-color);border-radius:.7rem;padding:.4rem;font-size:2em;color:var(--background-color);font-weight:700;line-height:1em}.mobile[data-v-623bceea]{display:none}@media screen and (max-width:850px){.desktop[data-v-623bceea]{display:none}.mobile[data-v-623bceea]{display:block}}",""]),t.exports=o},213:function(t,e,r){"use strict";r.r(e);var o=r(0).a.extend({name:"NavBar",data:function(){return{mobileMenu:!1}}}),n=(r(211),r(37)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"navbar"}},[r("nav",{staticClass:"desktop"},[r("div",{staticClass:"links"},[r("NuxtLink",{attrs:{to:"/"}},[t._v("Daniel Raymond")]),t._v(" "),r("a",{attrs:{id:"about-link",href:"/#about"}},[t._v("About Me")]),t._v(" "),r("a",{attrs:{id:"experience-link",href:"/#experience"}},[t._v("Experience")]),t._v(" "),r("a",{attrs:{target:"_blank",href:"/resume.pdf"}},[t._v("Resume")])],1)]),t._v(" "),r("span",{staticClass:"mobile"},[r("button",{on:{click:function(e){t.mobileMenu=!0}}},[t._v("☰")]),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.mobileMenu?r("nav",{staticClass:"mobile-menu"},[r("p",{staticClass:"close-button",on:{click:function(e){t.mobileMenu=!1}}},[t._v("✕")]),t._v(" "),r("a",{attrs:{href:"/#about"},on:{click:function(e){t.mobileMenu=!1}}},[t._v("About Me")]),t._v(" "),r("a",{attrs:{href:"/#experience"},on:{click:function(e){t.mobileMenu=!1}}},[t._v("Experience")]),t._v(" "),r("a",{attrs:{target:"_blank",href:"/resume.pdf"}},[t._v("Resume")])]):t._e()])],1)])}),[],!1,null,"623bceea",null);e.default=component.exports},214:function(t,e,r){var content=r(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("b58b7cfc",content,!0,{sourceMap:!1})},215:function(t,e,r){var content=r(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("776351e9",content,!0,{sourceMap:!1})},224:function(t,e,r){t.exports=r.p+"img/chumpRender.518155e.svg"},225:function(t,e,r){"use strict";var o=r(4),n=r(226);o({target:"String",proto:!0,forced:r(227)("sub")},{sub:function(){return n(this,"sub","","")}})},226:function(t,e,r){var o=r(18),n=r(8),c=/"/g;t.exports=function(t,e,r,l){var d=n(o(t)),h="<"+e;return""!==r&&(h+=" "+r+'="'+n(l).replace(c,"&quot;")+'"'),h+">"+d+"</"+e+">"}},227:function(t,e,r){var o=r(5);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},228:function(t,e,r){"use strict";r(214)},229:function(t,e,r){var o=r(83)(!1);o.push([t.i,".computer[data-v-0afc7088]{position:relative;height:min-content}.c-led[data-v-0afc7088]{position:absolute;bottom:8%;width:1.3vmin;height:1.3vmin;border-radius:50%}.g-0[data-v-0afc7088]{background-color:green}.g-1[data-v-0afc7088]{background-color:#adff2f}.r-0[data-v-0afc7088]{background-color:maroon}.r-1[data-v-0afc7088]{background-color:red}.y-0[data-v-0afc7088]{background-color:#b8860b}.y-1[data-v-0afc7088]{background-color:#ff0}",""]),t.exports=o},230:function(t,e,r){"use strict";var o=r(11),n=r(2),c=r(85),l=r(14),d=r(12),h=r(38),v=r(164),m=r(62),f=r(161),_=r(5),w=r(51),y=r(64).f,x=r(27).f,E=r(13).f,k=r(231).trim,L="Number",C=n.Number,D=C.prototype,N=h(w(D))==L,S=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,o,n,c,l,d,code,h=f(t,"number");if("string"==typeof h&&h.length>2)if(43===(e=(h=k(h)).charCodeAt(0))||45===e){if(88===(r=h.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+h}for(l=(c=h.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>n)return NaN;return parseInt(c,o)}return+h};if(c(L,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var M,I=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof I&&(N?_((function(){D.valueOf.call(r)})):h(r)!=L)?v(new C(S(e)),r,I):S(e)},A=o?y(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;A.length>O;O++)d(C,M=A[O])&&!d(I,M)&&E(I,M,x(C,M));I.prototype=D,D.constructor=I,l(n,L,I)}},231:function(t,e,r){var o=r(18),n=r(8),c="["+r(232)+"]",l=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),h=function(t){return function(e){var r=n(o(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(d,"")),r}};t.exports={start:h(1),end:h(2),trim:h(3)}},232:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},233:function(t,e,r){"use strict";r(215)},234:function(t,e,r){var o=r(83)(!1);o.push([t.i,".programmer[data-v-69b831b5]{position:relative;background:#fff;border:1px solid #b5b5b5;font-size:.8rem;text-align:center}.prog-input[data-v-69b831b5]{background:#d3d3d3;color:var(--text-color);box-sizing:border-box;width:80%;height:10rem;margin:0;padding:0 10% 10%;resize:none}.modal-wrapper[data-v-69b831b5]{position:absolute;width:100%;height:100%;left:0;top:0;display:grid;align-items:center;justify-items:center;place-items:center;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.modal[data-v-69b831b5]{display:flex;flex-direction:column;align-items:center;padding:1rem;background:#ececec;border:1px solid grey;border-radius:1rem}.modal>.commands[data-v-69b831b5]{display:grid;grid-template-columns:repeat(2,1fr);width:fit-content;text-align:left}.modal>.okay-button[data-v-69b831b5]{width:max-content;padding:.25rem .5rem;border-radius:.5rem;background:#fff}h4[data-v-69b831b5]{margin:.5em 0 0}.slider[data-v-69b831b5]{-webkit-appearance:none;width:80%;margin-top:0;height:1em;background:#d3d3d3;outline:1px solid #b5b5b5}.slider[data-v-69b831b5]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1em;height:1em;background:var(--main-color);border-radius:20%;cursor:pointer}.error-icon[data-v-69b831b5]{color:#cf0000}.info-icon[data-v-69b831b5]{color:grey}i[data-v-69b831b5]{color:#a00000;font-size:.9em}",""]),t.exports=o},257:function(t,e,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(84).default)("3e043e06",content,!0,{sourceMap:!1})},259:function(t,e,r){"use strict";r.r(e);r(48),r(50),r(29),r(49),r(225);var o={name:"ChumpComputer",data:function(){return{clk:1,program:[],pc:0,alu:0,RAM:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],pl:255,acc:0,run:!0,nextCycleOp:null,showLEDs:!1,interval:null}},mounted:function(){var t=this;document.getElementById("chumpRender").onload=function(){t.showLEDs=!0,t.interval=setInterval(t.update.bind(t),500)},this.LEDs=Array.from(document.getElementsByClassName("c-led")),this.clkLED=this.LEDs[0],this.aluLEDs=this.LEDs.slice(1,5),this.plLEDs=this.LEDs.slice(5,13),this.pcLEDs=this.LEDs.slice(13,22),this.accLEDs=this.LEDs.slice(21,25)},methods:{changeSpeed:function(t){clearInterval(this.interval),this.interval=0!=t?setInterval(this.update.bind(this),25e3/t):null},update:function(){this.run&&(this.clk^=1,this.clk&&(null!=this.program[this.pc]&&null!=this.program[this.pc][0]&&null!=this.program[this.pc][1]?this.executeLine():this.clk&&(this.pl=255),this.updateLEDs(),this.pc%=256,this.pc++,this.nextCycleOp&&this.nextCycleOp()),this.toggle(this.clkLED,this.clk))},updateLEDs:function(){for(var i in this.aluLEDs){var t=this.alu&8>>i;this.toggle(this.aluLEDs[i],t)}for(var e in this.plLEDs){var r=this.pl&128>>e;this.toggle(this.plLEDs[e],r)}for(var o in this.pcLEDs){var n=this.pc&128>>o;this.toggle(this.pcLEDs[o],n)}for(var c in this.accLEDs){var l=this.acc&8>>c;this.toggle(this.accLEDs[c],l)}},toggle:function(t,e){e&&(e=1);var r=t.id;t.classList="c-led "+r+"-"+e},compile:function(t){this.clk=0,this.pc=0,t?(this.run=!0,this.program=this.parseFunc(t)):(this.run=!1,this.updateLEDs())},parseFunc:function(t){for(var e in t)switch(t[e][0]){case"load":t[e][0]=this.load;break;case"add":t[e][0]=this.add;break;case"sub":t[e][0]=this.sub;break;case"str":t[e][0]=this.str;break;case"read":t[e][0]=this.read;break;case"and":t[e][0]=this.and;break;case"goto":t[e][0]=this.goto;break;case"ifZero":t[e][0]=this.ifZ;break;default:console.error("Inappropriate program line passed")}return t},executeLine:function(){if(this.clk){var t=this.program[this.pc][1];switch(this.program[this.pc][0]){case this.load:this.pl=t;break;case this.add:this.pl=32|t;break;case this.sub:this.pl=64|t;break;case this.str:this.pl=96|t;break;case this.read:this.pl=128|t;break;case this.and:this.pl=160|t;break;case this.goto:this.pl=192|t;break;case this.ifZ:this.pl=224|t;break;default:this.pl=255}this.program[this.pc][0].call(this,t)}},load:function(t){this.alu=t,this.alu%=16},add:function(t){var e=this;this.alu+=t,this.alu%=16,this.nextCycleOp=function(){e.acc=e.alu,e.nextCycleOp=null}},sub:function(t){var e=this;this.alu-=t,this.alu%=16,this.nextCycleOp=function(){e.acc=e.alu,e.nextCycleOp=null}},str:function(t){this.RAM[t]=this.acc},read:function(t){this.alu=this.RAM[t]},and:function(t){this.alu=this.acc&t},goto:function(t){var e=this;this.nextCycleOp=function(){e.pc=t,e.pc%=256,e.nextCycleOp=null}},ifZ:function(t){var e=this;0==this.acc&&(this.nextCycleOp=function(){e.pc=t,e.pc%=256,e.nextCycleOp=null})}}},n=(r(228),r(37)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"computer"},[o("img",{attrs:{id:"chumpRender",src:r(224)}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"5%"},attrs:{id:"r"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"10%"},attrs:{id:"g"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"13%"},attrs:{id:"g"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"16%"},attrs:{id:"g"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"19%"},attrs:{id:"g"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"23%"},attrs:{id:"y"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"26%"},attrs:{id:"y"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"29%"},attrs:{id:"y"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"32%"},attrs:{id:"y"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"35%"},attrs:{id:"y"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"38%"},attrs:{id:"y"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"41%"},attrs:{id:"y"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"44%"},attrs:{id:"y"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"50%"},attrs:{id:"r"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"53%"},attrs:{id:"r"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"56%"},attrs:{id:"r"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"59%"},attrs:{id:"r"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"62%"},attrs:{id:"r"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"65%"},attrs:{id:"r"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"68%"},attrs:{id:"r"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"71%"},attrs:{id:"r"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"82%"},attrs:{id:"g"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"85%"},attrs:{id:"g"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"88%"},attrs:{id:"g"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"91%"},attrs:{id:"g"}})])}),[],!1,null,"0afc7088",null);e.default=component.exports},260:function(t,e,r){"use strict";r.r(e);r(52),r(66),r(230),r(165),r(46),r(47),r(33);var o={name:"ChumpProgrammer",data:function(){return{program:[],err:0,err_line:0,show_err:!1,show_info:!0}},mounted:function(){this.$refs.input.innerHTML=this.$refs.input.innerHTML.replace(/; /g,"\n"),this.$emit("update-code",this.compile())},methods:{updateSpeed:function(t){var e=Number(t.target.value);console.log(e),this.$emit("speed-change",this.speedFunction(e))},speedFunction:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=500/Math.log(r/e)/Math.log(Math.exp(1)),s=a*Math.log(e)/Math.log(Math.exp(1));return Math.exp((t+s)/a)},compile:function(){var code=document.getElementsByClassName("prog-input").item(0).value;code=this.parseCode(code);var t=this.err;for(var e in code)if(code[e]!=[]&&(this.err=this.compileLine(e,code[e])),this.err)return t!=this.err&&(this.show_err=!0),!1;return this.show_err=!1,this.program},parseCode:function(code){for(var t in code=code.split("\n"))code[t].includes(";")&&(code[t]=code[t].substring(0,code[t].indexOf(";"))),code[t]=code[t].split(" "),code[t]=code[t].filter((function(t){return""!=t&&" "!=t}));return code=code.filter((function(line){return 0!=line.length}))},compileLine:function(t,line){var e=line[0].toLowerCase();switch(this.err_line=t,e){case"load":case"0000":this.program[t]=["load"];break;case"add":case"0010":this.program[t]=["add"];break;case"sub":case"subtract":case"0100":this.program[t]=["sub"];break;case"str":case"store":case"storeto":case"0110":this.program[t]=["str"];break;case"rd":case"read":case"1000":this.program[t]=["read"];break;case"and":case"1010":this.program[t]=["and"];break;case"goto":case"jmp":case"jump":case"1100":this.program[t]=["goto"];break;case"if0":case"breq":case"ifZero":case"1110":this.program[t]=["ifZero"];break;default:return 1}if(void 0===line[1])return 3;for(var i=2;i<10;i++)if(line[1].includes(i))return 2;var r=parseInt(line[1],2);return r>15?4:(this.program[t].push(r),0)},dismissInfoModal:function(){this.show_info=!1,this.$gtag.event("CHUMP Programmer Used")}}},n=(r(233),r(37)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"programmer"},[r("h4",[t._v("Speed Control")]),t._v(" "),r("input",{staticClass:"slider",attrs:{type:"range",min:"0",max:"500",value:"174"},on:{click:t.updateSpeed}}),t._v(" "),r("h4",[t._v("\n      Programmer\n      "),r("b",{staticClass:"info-icon material-icons",on:{click:function(e){t.show_info=!0}}},[t._v("info")]),t._v(" "),t.err?r("b",{staticClass:"error-icon material-icons",on:{click:function(e){t.show_err=!0}}},[t._v("error_outline")]):t._e()]),t._v(" "),r("textarea",{ref:"input",staticClass:"prog-input",attrs:{spellcheck:"false"},on:{input:function(e){t.$emit("update-code",t.compile())}}},[t._v("read 0010;\nadd 0001;\nstr 0010;\njmp 0000;\n")]),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.show_info?r("div",{staticClass:"modal-wrapper"},[r("div",{staticClass:"modal"},[r("b",[t._v("Write commands and adjust the clock speed here!")]),t._v(" "),r("div",{staticClass:"commands"},[r("b",[t._v("Load")]),t._v(" "),r("p",[t._v("Load value into reg")]),t._v(" "),r("b",[t._v("Add")]),t._v(" "),r("p",[t._v("Add constant to reg")]),t._v(" "),r("b",[t._v("Subtract")]),t._v(" "),r("p",[t._v("Subtract constant from reg")]),t._v(" "),r("b",[t._v("And")]),t._v(" "),r("p",[t._v("Bitwise AND with constant")]),t._v(" "),r("b",[t._v("StoreTo")]),t._v(" "),r("p",[t._v("Store reg in address given")]),t._v(" "),r("b",[t._v("Read")]),t._v(" "),r("p",[t._v("Read RAM from address given")]),t._v(" "),r("b",[t._v("GoTo")]),t._v(" "),r("p",[t._v("Jump PC to constant")]),t._v(" "),r("b",[t._v("IfZero")]),t._v(" "),r("p",[t._v("Jump PC to constant if reg is 0")]),r("br")]),t._v(" "),r("button",{staticClass:"okay-button",on:{click:t.dismissInfoModal}},[t._v("Okay")])])]):t._e()]),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.show_err?r("div",{staticClass:"modal-wrapper"},[r("div",{staticClass:"modal"},[1==t.err?r("i",[t._v("Error: opcode at line  "+t._s(t.err_line)+" is uncompilable")]):2==t.err?r("i",[t._v("Error: operand at line "+t._s(t.err_line)+" is not binary")]):3==t.err?r("i",[t._v("Error: missing operand at line "+t._s(t.err_line))]):4==t.err?r("i",[t._v("Error: operand exceeds 4-bit max at line "+t._s(t.err_line))]):t._e(),t._v(" "),r("button",{staticClass:"okay-button",on:{click:function(e){t.show_err=!1}}},[t._v("Okay")])])]):t._e()])],1)}),[],!1,null,"69b831b5",null);e.default=component.exports},268:function(t,e,r){"use strict";r(257)},269:function(t,e,r){var o=r(83)(!1);o.push([t.i,".cp-main[data-v-60fd69d0]{padding:4rem 2rem 2rem}.sim[data-v-60fd69d0]{float:right;width:45%}ul[data-v-60fd69d0]{margin-top:.3em}h3[data-v-60fd69d0]{margin-top:1em}@media screen and (max-width:850px){.cp-main[data-v-60fd69d0]{display:flex;flex-direction:column-reverse}.sim[data-v-60fd69d0]{width:100%}}",""]),t.exports=o},273:function(t,e,r){"use strict";r.r(e);var o=r(0).a.extend({methods:{compile:function(t){this.$refs.CHUMP.compile(t)},changeSpeed:function(t){this.$refs.CHUMP.changeSpeed(t)}}}),n=(r(268),r(37)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav-bar"),t._v(" "),r("div",{staticClass:"cp-main"},[r("div",{staticClass:"sim"},[r("ChumpComputer",{ref:"CHUMP"}),t._v(" "),r("ChumpProgrammer",{on:{"update-code":t.compile,"speed-change":t.changeSpeed}})],1),t._v(" "),r("div",[t._m(0),t._v(" "),r("h3",[t._v("The Why")]),t._v(" "),r("p",[t._v("\n\t\t\t\tThere are so many systems working to make the picture you see on your screen, \n\t\t\t\tit's seems impossible to figure out all that's going on. \n\t\t\t")]),t._v(" "),r("h3",[t._v("The What")]),t._v(" "),r("p",[t._v("\n\t\t\t\tThis project attempts to strip down a computer to what it was originally: a device\n\t\t\t\tcapable of executing a program in order to fulfill a given purpose. For the most\n\t\t\t\tbasic tasks, a computer needs 5 things:\n\t\t\t")]),t._v(" "),t._m(1),t._v(" "),r("h3",[t._v("Let's use this Sim!")]),t._v(" "),t._m(2),t._v(" "),r("h3",[t._v("My Project")]),t._v(" "),r("p",[t._v("\n\t\t\t\tFor this project I spend 2 months build a breadboard prototype and 3 months\n\t\t\t\tdesigning and manufacturing a custom "),r("b",[t._v("PCB")]),t._v(" and 3D printed case."),r("br"),t._v("\n\t\t\t\tIf you'd like a technical, in-depth report of this project click \n\t\t\t\t"),r("a",{attrs:{href:"DER.pdf#page=33"},on:{click:function(e){return t.$emit("ga-event","CHUMP","Viewed")}}},[t._v("here!")])]),t._v(" "),r("br")])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{attrs:{id:"header"}},[r("h1",[t._v("PCB Computer")]),t._v(" "),r("h2",[t._v("Computers can often be a black box.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("i",[r("li",[t._v("a "),r("b",[t._v("program")]),t._v(" to run")]),t._v(" "),r("li",[t._v("a "),r("b",[t._v("counter")]),t._v(" to keep track of the program line")]),t._v(" "),r("li",[t._v("a method of "),r("b",[t._v("decoding")]),t._v(" the current the operation")]),t._v(" "),r("li",[t._v("a chip to carry out the "),r("b",[t._v("logic")]),t._v(" operation")]),t._v(" "),r("li",[r("b",[t._v("memory")]),t._v(" to store and read data")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n\t\t\t\tI've made a little simulation of my project for you to play with right here \n\t\t\t\ton this page!"),r("br"),t._v(" "),r("br"),t._v("\n\t\t\t\tIf you've programmed in "),r("b",[t._v("Assembly")]),t._v(", this is like my own personal version."),r("br"),t._v("\n\t\t\t\tIf not, this will be a new thing to learn :)."),r("br"),t._v(" "),r("br"),t._v("\n\t\t\t\tWith these simple concepts the computer can perform these operations:\n\t\t\t\t"),r("ul",[r("i",[r("li",[t._v("Load")]),t._v(" "),r("li",[t._v("Addition & subtraction")]),t._v(" "),r("li",[t._v("Bitwise ANDing")]),t._v(" "),r("li",[t._v("Storing and reading to memory")]),t._v(" "),r("li",[t._v("Conditional & non-conditional jumping")])])]),t._v("\n\t\t\t\tEach operation is made up of an operation and a constant. The constant will be \n\t\t\t\tused in conjuction with the result from the previous operation, shown by the \n\t\t\t\tLEDs from the output of the ALU (Arithmetic and logic unit). For memory \n\t\t\t\tinstructions, the constant is treated as an address, and for the goto or the \n\t\t\t\tif-zero conditional, the constant is treated as the line number to jump to.\n\t\t\t\t"),r("br"),r("br"),t._v("\n\t\t\t\tThe program currently running reads address 2 from memory and adds 1 to the value\n\t\t\t\t(shown in the "),r("b",[t._v("accumulator")]),t._v("). It then stores that value back and restarts \n\t\t\t\tthe program by jumping to the first line (0)."),r("br"),t._v("\n\t\t\t\tAs you can see the accumulator is incrementing by one, showing the output of the \n\t\t\t\tprogram!\n\t\t\t")])}],!1,null,"60fd69d0",null);e.default=component.exports;installComponents(component,{NavBar:r(213).default,ChumpComputer:r(259).default,ChumpProgrammer:r(260).default})}}]);