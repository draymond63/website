(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{214:function(t,e,h){var content=h(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,h(84).default)("b58b7cfc",content,!0,{sourceMap:!1})},224:function(t,e,h){t.exports=h.p+"img/chumpRender.518155e.svg"},225:function(t,e,h){"use strict";var r=h(4),c=h(226);r({target:"String",proto:!0,forced:h(227)("sub")},{sub:function(){return c(this,"sub","","")}})},226:function(t,e,h){var r=h(18),c=h(8),o=/"/g;t.exports=function(t,e,h,l){var n=c(r(t)),d="<"+e;return""!==h&&(d+=" "+h+'="'+c(l).replace(o,"&quot;")+'"'),d+">"+n+"</"+e+">"}},227:function(t,e,h){var r=h(5);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},228:function(t,e,h){"use strict";h(214)},229:function(t,e,h){var r=h(83)(!1);r.push([t.i,".computer[data-v-0afc7088]{position:relative;height:min-content}.c-led[data-v-0afc7088]{position:absolute;bottom:8%;width:1.3vmin;height:1.3vmin;border-radius:50%}.g-0[data-v-0afc7088]{background-color:green}.g-1[data-v-0afc7088]{background-color:#adff2f}.r-0[data-v-0afc7088]{background-color:maroon}.r-1[data-v-0afc7088]{background-color:red}.y-0[data-v-0afc7088]{background-color:#b8860b}.y-1[data-v-0afc7088]{background-color:#ff0}",""]),t.exports=r},259:function(t,e,h){"use strict";h.r(e);h(48),h(50),h(29),h(49),h(225);var r={name:"ChumpComputer",data:function(){return{clk:1,program:[],pc:0,alu:0,RAM:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],pl:255,acc:0,run:!0,nextCycleOp:null,showLEDs:!1,interval:null}},mounted:function(){var t=this;document.getElementById("chumpRender").onload=function(){t.showLEDs=!0,t.interval=setInterval(t.update.bind(t),500)},this.LEDs=Array.from(document.getElementsByClassName("c-led")),this.clkLED=this.LEDs[0],this.aluLEDs=this.LEDs.slice(1,5),this.plLEDs=this.LEDs.slice(5,13),this.pcLEDs=this.LEDs.slice(13,22),this.accLEDs=this.LEDs.slice(21,25)},methods:{changeSpeed:function(t){clearInterval(this.interval),this.interval=0!=t?setInterval(this.update.bind(this),25e3/t):null},update:function(){this.run&&(this.clk^=1,this.clk&&(null!=this.program[this.pc]&&null!=this.program[this.pc][0]&&null!=this.program[this.pc][1]?this.executeLine():this.clk&&(this.pl=255),this.updateLEDs(),this.pc%=256,this.pc++,this.nextCycleOp&&this.nextCycleOp()),this.toggle(this.clkLED,this.clk))},updateLEDs:function(){for(var i in this.aluLEDs){var t=this.alu&8>>i;this.toggle(this.aluLEDs[i],t)}for(var e in this.plLEDs){var h=this.pl&128>>e;this.toggle(this.plLEDs[e],h)}for(var r in this.pcLEDs){var c=this.pc&128>>r;this.toggle(this.pcLEDs[r],c)}for(var o in this.accLEDs){var l=this.acc&8>>o;this.toggle(this.accLEDs[o],l)}},toggle:function(t,e){e&&(e=1);var h=t.id;t.classList="c-led "+h+"-"+e},compile:function(t){this.clk=0,this.pc=0,t?(this.run=!0,this.program=this.parseFunc(t)):(this.run=!1,this.updateLEDs())},parseFunc:function(t){for(var e in t)switch(t[e][0]){case"load":t[e][0]=this.load;break;case"add":t[e][0]=this.add;break;case"sub":t[e][0]=this.sub;break;case"str":t[e][0]=this.str;break;case"read":t[e][0]=this.read;break;case"and":t[e][0]=this.and;break;case"goto":t[e][0]=this.goto;break;case"ifZero":t[e][0]=this.ifZ;break;default:console.error("Inappropriate program line passed")}return t},executeLine:function(){if(this.clk){var t=this.program[this.pc][1];switch(this.program[this.pc][0]){case this.load:this.pl=t;break;case this.add:this.pl=32|t;break;case this.sub:this.pl=64|t;break;case this.str:this.pl=96|t;break;case this.read:this.pl=128|t;break;case this.and:this.pl=160|t;break;case this.goto:this.pl=192|t;break;case this.ifZ:this.pl=224|t;break;default:this.pl=255}this.program[this.pc][0].call(this,t)}},load:function(t){this.alu=t,this.alu%=16},add:function(t){var e=this;this.alu+=t,this.alu%=16,this.nextCycleOp=function(){e.acc=e.alu,e.nextCycleOp=null}},sub:function(t){var e=this;this.alu-=t,this.alu%=16,this.nextCycleOp=function(){e.acc=e.alu,e.nextCycleOp=null}},str:function(t){this.RAM[t]=this.acc},read:function(t){this.alu=this.RAM[t]},and:function(t){this.alu=this.acc&t},goto:function(t){var e=this;this.nextCycleOp=function(){e.pc=t,e.pc%=256,e.nextCycleOp=null}},ifZ:function(t){var e=this;0==this.acc&&(this.nextCycleOp=function(){e.pc=t,e.pc%=256,e.nextCycleOp=null})}}},c=(h(228),h(37)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"computer"},[r("img",{attrs:{id:"chumpRender",src:h(224)}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"5%"},attrs:{id:"r"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"10%"},attrs:{id:"g"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"13%"},attrs:{id:"g"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"16%"},attrs:{id:"g"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"19%"},attrs:{id:"g"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"23%"},attrs:{id:"y"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"26%"},attrs:{id:"y"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"29%"},attrs:{id:"y"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"32%"},attrs:{id:"y"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"35%"},attrs:{id:"y"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"38%"},attrs:{id:"y"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"41%"},attrs:{id:"y"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"44%"},attrs:{id:"y"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"50%"},attrs:{id:"r"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"53%"},attrs:{id:"r"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"56%"},attrs:{id:"r"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"59%"},attrs:{id:"r"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"62%"},attrs:{id:"r"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"65%"},attrs:{id:"r"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"68%"},attrs:{id:"r"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"71%"},attrs:{id:"r"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"82%"},attrs:{id:"g"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"85%"},attrs:{id:"g"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"88%"},attrs:{id:"g"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"91%"},attrs:{id:"g"}})])}),[],!1,null,"0afc7088",null);e.default=component.exports}}]);