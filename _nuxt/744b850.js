(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{266:function(t,e,c){var l=c(4),r=c(23),n=c(13),d=/"/g,h=l("".replace);t.exports=function(t,e,c,l){var o=n(r(t)),v="<"+e;return""!==c&&(v+=" "+c+'="'+h(n(l),d,"&quot;")+'"'),v+">"+o+"</"+e+">"}},267:function(t,e,c){var l=c(3);t.exports=function(t){return l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},272:function(t,e,c){var content=c(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(107).default)("5a21776b",content,!0,{sourceMap:!1})},283:function(t,e,c){t.exports=c.p+"img/chumpRender.518155e.svg"},284:function(t,e,c){"use strict";var l=c(2),r=c(266);l({target:"String",proto:!0,forced:c(267)("sub")},{sub:function(){return r(this,"sub","","")}})},285:function(t,e,c){"use strict";c(272)},286:function(t,e,c){var l=c(106)((function(i){return i[1]}));l.push([t.i,".computer[data-v-1e4c95ac]{height:min-content;position:relative}.c-led[data-v-1e4c95ac]{border-radius:50%;bottom:8%;height:1.3vmin;position:absolute;width:1.3vmin}.g-0[data-v-1e4c95ac]{background-color:green}.g-1[data-v-1e4c95ac]{background-color:#adff2f}.r-0[data-v-1e4c95ac]{background-color:maroon}.r-1[data-v-1e4c95ac]{background-color:red}.y-0[data-v-1e4c95ac]{background-color:#b8860b}.y-1[data-v-1e4c95ac]{background-color:#ff0}",""]),l.locals={},t.exports=l},312:function(t,e,c){"use strict";c.r(e);var l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"computer"},[e("img",{attrs:{id:"chumpRender",src:c(283)}}),t._v(" "),e("div",{staticClass:"c-led r-0",staticStyle:{left:"5%"},attrs:{id:"r"}}),t._v(" "),e("div",{staticClass:"c-led g-0",staticStyle:{left:"10%"},attrs:{id:"g"}}),t._v(" "),e("div",{staticClass:"c-led g-0",staticStyle:{left:"13%"},attrs:{id:"g"}}),t._v(" "),e("div",{staticClass:"c-led g-0",staticStyle:{left:"16%"},attrs:{id:"g"}}),t._v(" "),e("div",{staticClass:"c-led g-0",staticStyle:{left:"19%"},attrs:{id:"g"}}),t._v(" "),e("div",{staticClass:"c-led y-0",staticStyle:{left:"23%"},attrs:{id:"y"}}),t._v(" "),e("div",{staticClass:"c-led y-0",staticStyle:{left:"26%"},attrs:{id:"y"}}),t._v(" "),e("div",{staticClass:"c-led y-0",staticStyle:{left:"29%"},attrs:{id:"y"}}),t._v(" "),e("div",{staticClass:"c-led y-0",staticStyle:{left:"32%"},attrs:{id:"y"}}),t._v(" "),e("div",{staticClass:"c-led y-0",staticStyle:{left:"35%"},attrs:{id:"y"}}),t._v(" "),e("div",{staticClass:"c-led y-0",staticStyle:{left:"38%"},attrs:{id:"y"}}),t._v(" "),e("div",{staticClass:"c-led y-0",staticStyle:{left:"41%"},attrs:{id:"y"}}),t._v(" "),e("div",{staticClass:"c-led y-0",staticStyle:{left:"44%"},attrs:{id:"y"}}),t._v(" "),e("div",{staticClass:"c-led r-0",staticStyle:{left:"50%"},attrs:{id:"r"}}),t._v(" "),e("div",{staticClass:"c-led r-0",staticStyle:{left:"53%"},attrs:{id:"r"}}),t._v(" "),e("div",{staticClass:"c-led r-0",staticStyle:{left:"56%"},attrs:{id:"r"}}),t._v(" "),e("div",{staticClass:"c-led r-0",staticStyle:{left:"59%"},attrs:{id:"r"}}),t._v(" "),e("div",{staticClass:"c-led r-0",staticStyle:{left:"62%"},attrs:{id:"r"}}),t._v(" "),e("div",{staticClass:"c-led r-0",staticStyle:{left:"65%"},attrs:{id:"r"}}),t._v(" "),e("div",{staticClass:"c-led r-0",staticStyle:{left:"68%"},attrs:{id:"r"}}),t._v(" "),e("div",{staticClass:"c-led r-0",staticStyle:{left:"71%"},attrs:{id:"r"}}),t._v(" "),e("div",{staticClass:"c-led g-0",staticStyle:{left:"82%"},attrs:{id:"g"}}),t._v(" "),e("div",{staticClass:"c-led g-0",staticStyle:{left:"85%"},attrs:{id:"g"}}),t._v(" "),e("div",{staticClass:"c-led g-0",staticStyle:{left:"88%"},attrs:{id:"g"}}),t._v(" "),e("div",{staticClass:"c-led g-0",staticStyle:{left:"91%"},attrs:{id:"g"}})])}],r=(c(62),c(65),c(39),c(64),c(284),{name:"ChumpComputer",data:function(){return{clk:1,program:[],pc:0,alu:0,RAM:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],pl:255,acc:0,run:!0,nextCycleOp:null,interval:null}},mounted:function(){this.interval=setInterval(this.update.bind(this),500),this.LEDs=Array.from(document.getElementsByClassName("c-led")),this.clkLED=this.LEDs[0],this.aluLEDs=this.LEDs.slice(1,5),this.plLEDs=this.LEDs.slice(5,13),this.pcLEDs=this.LEDs.slice(13,22),this.accLEDs=this.LEDs.slice(21,25)},methods:{changeSpeed:function(t){clearInterval(this.interval),this.interval=0!=t?setInterval(this.update.bind(this),25e3/t):null},update:function(){this.run&&(this.clk^=1,this.clk&&(null!=this.program[this.pc]&&null!=this.program[this.pc][0]&&null!=this.program[this.pc][1]?this.executeLine():this.clk&&(this.pl=255),this.updateLEDs(),this.pc%=256,this.pc++,this.nextCycleOp&&this.nextCycleOp()),this.toggle(this.clkLED,this.clk))},updateLEDs:function(){for(var i in this.aluLEDs){var t=this.alu&8>>i;this.toggle(this.aluLEDs[i],t)}for(var e in this.plLEDs){var c=this.pl&128>>e;this.toggle(this.plLEDs[e],c)}for(var l in this.pcLEDs){var r=this.pc&128>>l;this.toggle(this.pcLEDs[l],r)}for(var n in this.accLEDs){var d=this.acc&8>>n;this.toggle(this.accLEDs[n],d)}},toggle:function(t,e){e&&(e=1);var c=t.id;t.classList="c-led "+c+"-"+e},compile:function(t){this.clk=0,this.pc=0,t?(this.run=!0,this.program=this.parseFunc(t)):(this.run=!1,this.updateLEDs())},parseFunc:function(t){for(var e in t)switch(t[e][0]){case"load":t[e][0]=this.load;break;case"add":t[e][0]=this.add;break;case"sub":t[e][0]=this.sub;break;case"str":t[e][0]=this.str;break;case"read":t[e][0]=this.read;break;case"and":t[e][0]=this.and;break;case"goto":t[e][0]=this.goto;break;case"ifZero":t[e][0]=this.ifZ;break;default:console.error("Inappropriate program line passed")}return t},executeLine:function(){if(this.clk){var t=this.program[this.pc][1];switch(this.program[this.pc][0]){case this.load:this.pl=t;break;case this.add:this.pl=32|t;break;case this.sub:this.pl=64|t;break;case this.str:this.pl=96|t;break;case this.read:this.pl=128|t;break;case this.and:this.pl=160|t;break;case this.goto:this.pl=192|t;break;case this.ifZ:this.pl=224|t;break;default:this.pl=255}this.program[this.pc][0].call(this,t)}},load:function(t){this.alu=t,this.alu%=16},add:function(t){var e=this;this.alu+=t,this.alu%=16,this.nextCycleOp=function(){e.acc=e.alu,e.nextCycleOp=null}},sub:function(t){var e=this;this.alu-=t,this.alu%=16,this.nextCycleOp=function(){e.acc=e.alu,e.nextCycleOp=null}},str:function(t){this.RAM[t]=this.acc},read:function(t){this.alu=this.RAM[t]},and:function(t){this.alu=this.acc&t},goto:function(t){var e=this;this.nextCycleOp=function(){e.pc=t,e.pc%=256,e.nextCycleOp=null}},ifZ:function(t){var e=this;0==this.acc&&(this.nextCycleOp=function(){e.pc=t,e.pc%=256,e.nextCycleOp=null})}}}),n=(c(285),c(45)),component=Object(n.a)(r,(function(){this._self._c;return this._m(0)}),l,!1,null,"1e4c95ac",null);e.default=component.exports}}]);