(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cbc5987"],{"0535":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cp-main",class:{"main-mobile":this.is_mobile}},[s("div",[t._m(0),s("h3",[t._v("The Why")]),s("p",[t._v(" There are so many systems working to make the picture you see on your screen, it's seems impossible to figure out all that's going on. ")]),s("h3",[t._v("The What")]),t._m(1),s("h3",[t._v("Let's use this Sim!")]),t._m(2),s("h3",[t._v("My Project")]),s("p",[t._v(" For this project I spend 2 months build a breadboard prototype and 3 months designing and manufacturing a custom "),s("a",[t._v("PCB")]),t._v(" and 3D printed case."),s("br"),t._v(" If you'd like a technical, in-depth report of this project click "),s("a",{attrs:{href:"DER.pdf#page=33"},on:{click:function(e){return t.$emit("ga-event","CHUMP","Viewed")}}},[t._v("here!")])]),s("br")]),s("div",[s("CHUMP",{ref:"CHUMP"}),s("Programmer",{on:{"update-code":t.compile,"speed-change":t.changeSpeed}})],1)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{attrs:{id:"header"}},[s("h1",{staticStyle:{"margin-right":"5%"}},[t._v("CHUMP")]),s("h2",[t._v("Computers can often be a black box.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" This project attempts to strip down a computer to what it was originally: a device capable of executing a program in order to fulfill a given purpose. For the most basic tasks, a computer needs 5 things: "),s("ul",[s("i",[s("li",[t._v("a "),s("a",[t._v("program")]),t._v(" to run")]),s("li",[t._v("a "),s("a",[t._v("counter")]),t._v(" to keep track of the program line")]),s("li",[t._v("a method of "),s("a",[t._v("decoding")]),t._v(" the current the operation")]),s("li",[t._v("a chip to carry out the "),s("a",[t._v("logic")]),t._v(" operation")]),s("li",[s("a",[t._v("memory")]),t._v(" to store and read data")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" I've made a little simulation of my project for you to play with right here on this page!"),s("br"),s("br"),t._v(" If you've programmed in "),s("a",[t._v("Assembly")]),t._v(", this is like my own personal version."),s("br"),t._v(" If not, this will be a new thing to learn :)."),s("br"),s("br"),t._v(" With these simple concepts the computer can perform these operations: "),s("ul",[s("i",[s("li",[t._v("Load")]),s("li",[t._v("Addition & subtraction")]),s("li",[t._v("Bitwise ANDing")]),s("li",[t._v("Storing and reading to memory")]),s("li",[t._v("Conditional & non-conditional jumping")])])]),t._v(" Each operation is made up of an operation and a constant. The constant will be used in conjuction with the result from the previous operation, shown by the LEDs from the output of the ALU (Arithmetic and logic unit). For memory instructions, the constant is treated as an address, and for the goto or the if-zero conditional, the constant is treated as the line number to jump to. "),s("br"),s("br"),t._v(" The program currently running reads address 2 from memory and adds 1 to the value (shown in the "),s("a",[t._v("accumulator")]),t._v("). It then stores that value back and restarts the program by jumping to the first line (0)."),s("br"),t._v(" As you can see the accumulator is incrementing by one, showing the output of the program! ")])}],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"computer"},[i("img",{attrs:{id:"chumpRender",src:s("fee6")}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"5%"},attrs:{id:"r"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"10%"},attrs:{id:"g"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"13%"},attrs:{id:"g"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"16%"},attrs:{id:"g"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"19%"},attrs:{id:"g"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"23%"},attrs:{id:"y"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"26%"},attrs:{id:"y"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"29%"},attrs:{id:"y"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"32%"},attrs:{id:"y"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"35%"},attrs:{id:"y"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"38%"},attrs:{id:"y"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"41%"},attrs:{id:"y"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led y-0",staticStyle:{left:"44%"},attrs:{id:"y"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"50%"},attrs:{id:"r"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"53%"},attrs:{id:"r"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"56%"},attrs:{id:"r"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"59%"},attrs:{id:"r"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"62%"},attrs:{id:"r"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"65%"},attrs:{id:"r"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"68%"},attrs:{id:"r"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led r-0",staticStyle:{left:"71%"},attrs:{id:"r"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"82%"},attrs:{id:"g"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"85%"},attrs:{id:"g"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"88%"},attrs:{id:"g"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:this.showLEDs,expression:"this.showLEDs"}],staticClass:"c-led g-0",staticStyle:{left:"91%"},attrs:{id:"g"}})])},n=[],o=(s("a630"),s("fb6a"),s("3ca3"),s("4c53"),{name:"CHUMP",data:function(){return{clk:1,program:[],pc:0,alu:0,RAM:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],pl:255,acc:0,run:!0,nextCycleOp:null,showLEDs:!1,interval:null}},mounted:function(){var t=this,e=document.getElementById("chumpRender");e.onload=function(){t.showLEDs=!0,t.interval=setInterval(t.update.bind(t),500)},this.LEDs=Array.from(document.getElementsByClassName("c-led")),this.clkLED=this.LEDs[0],this.aluLEDs=this.LEDs.slice(1,5),this.plLEDs=this.LEDs.slice(5,13),this.pcLEDs=this.LEDs.slice(13,22),this.accLEDs=this.LEDs.slice(21,25)},methods:{changeSpeed:function(t){console.log(t),clearInterval(this.interval),0!=t?(console.log("running"),this.interval=setInterval(this.update.bind(this),25e3/t)):this.interval=null},update:function(){this.run&&(this.clk^=1,this.clk&&(null!=this.program[this.pc]&&null!=this.program[this.pc][0]&&null!=this.program[this.pc][1]?this.executeLine():this.clk&&(this.pl=255),this.pc%=256,this.pc++,this.updateLEDs(),this.nextCycleOp&&this.nextCycleOp()),this.toggle(this.clkLED,this.clk))},updateLEDs:function(){for(var t in this.aluLEDs){var e=this.alu&8>>t;this.toggle(this.aluLEDs[t],e)}for(var s in this.plLEDs){var i=this.pl&128>>s;this.toggle(this.plLEDs[s],i)}for(var r in this.pcLEDs){var a=this.pc&128>>r;this.toggle(this.pcLEDs[r],a)}for(var n in this.accLEDs){var o=this.acc&8>>n;this.toggle(this.accLEDs[n],o)}},toggle:function(t,e){e&&(e=1);var s=t.id;t.classList="c-led "+s+"-"+e},compile:function(t){this.clk=0,this.pc=0,t?(this.run=!0,this.program=this.parseFunc(t)):(this.run=!1,this.updateLEDs())},parseFunc:function(t){for(var e in t)switch(t[e][0]){case"load":t[e][0]=this.load;break;case"add":t[e][0]=this.add;break;case"sub":t[e][0]=this.sub;break;case"str":t[e][0]=this.str;break;case"read":t[e][0]=this.read;break;case"and":t[e][0]=this.and;break;case"goto":t[e][0]=this.goto;break;case"ifZero":t[e][0]=this.ifZ;break;default:console.error("Inappropriate program line passed")}return t},executeLine:function(){if(this.clk){var t=this.program[this.pc][1];switch(this.program[this.pc][0]){case this.load:this.pl=t;break;case this.add:this.pl=32|t;break;case this.sub:this.pl=64|t;break;case this.str:this.pl=96|t;break;case this.read:this.pl=128|t;break;case this.and:this.pl=160|t;break;case this.goto:this.pl=192|t;break;case this.ifZ:this.pl=224|t;break;default:this.pl=255;break}this.program[this.pc][0].call(this,t)}},load:function(t){this.alu=t,this.alu%=16},add:function(t){var e=this;this.alu+=t,this.alu%=16,this.nextCycleOp=function(){e.acc=e.alu,e.nextCycleOp=null}},sub:function(t){var e=this;this.alu-=t,this.alu%=16,this.nextCycleOp=function(){e.acc=e.alu,e.nextCycleOp=null}},str:function(t){this.RAM[t]=this.acc},read:function(t){this.alu=this.RAM[t]},and:function(t){this.alu=this.acc&t},goto:function(t){var e=this;this.nextCycleOp=function(){e.pc=t-1,e.pc%=256,e.nextCycleOp=null}},ifZ:function(t){var e=this;0==this.acc&&(this.nextCycleOp=function(){e.pc=t-1,e.pc%=256,e.nextCycleOp=null})}}}),c=o,l=(s("bf61"),s("2877")),h=Object(l["a"])(c,a,n,!1,null,"2bb7363e",null),u=h.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"programmer"},[s("span",{staticClass:"speed-header"},[s("h4",[t._v("Speed Control")]),s("input",{ref:"SPEED",staticClass:"slider",attrs:{type:"range",min:"0",max:"500",value:"50"},on:{click:function(){return t.$emit("speed-change",t.getSpeed())}}}),s("h4",[t._v("Programmer")])]),s("div",{staticClass:"placement"},[s("div",[t._m(0),s("div",{staticStyle:{height:"8vh"}},[1==this.err?s("i",[t._v("Error: opcode at line "+t._s(this.err_line)+" is uncompilable")]):2==this.err?s("i",[t._v("Error: operand at line "+t._s(this.err_line)+" is not binary")]):3==this.err?s("i",[t._v("Error: missing operand at line "+t._s(this.err_line))]):4==this.err?s("i",[t._v("Error: operand exceeds 4-bit max at line "+t._s(this.err_line))]):t._e()])]),s("textarea",{ref:"input",staticClass:"prog-input",attrs:{spellcheck:"false"},on:{input:function(e){t.$emit("update-code",t.compile())}}},[t._v("read 0010; add 0001; str 0010; jmp 0000; ")])])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{margin:"10%"}},[s("b",[t._v("Load")]),s("p",[t._v("Load value into reg")]),s("b",[t._v("Add")]),s("p",[t._v("Add constant to reg")]),s("b",[t._v("Subtract")]),s("p",[t._v("Subtract constant from reg")]),s("b",[t._v("And")]),s("p",[t._v("Bitwise AND with constant")]),s("b",[t._v("StoreTo")]),s("p",[t._v("Store reg in address given")]),s("b",[t._v("Read")]),s("p",[t._v("Read RAM from address given")]),s("b",[t._v("GoTo")]),s("p",[t._v("Jump PC to constant")]),s("b",[t._v("IfZero")]),s("p",[t._v("Jump PC to constant if reg is 0")]),s("br")])}],f=(s("4de4"),s("caad"),s("c975"),s("ac1f"),s("2532"),s("5319"),s("1276"),{name:"Programmer",data:function(){return{program:[],err:0,err_line:0}},mounted:function(){this.$refs.input.innerHTML=this.$refs.input.innerHTML.replace(/; /g,"\n"),this.$emit("update-code",this.compile())},methods:{getSpeed:function(){return this.$refs.SPEED.value},compile:function(){var t=document.getElementsByClassName("prog-input").item(0).value;for(var e in t=this.parseCode(t),t)if(t[e]!=[]&&(this.err=this.compileLine(e,t[e])),this.err)return!1;return this.program},parseCode:function(t){for(var e in t=t.split("\n"),t)t[e].includes(";")&&(t[e]=t[e].substring(0,t[e].indexOf(";"))),t[e]=t[e].split(" "),t[e]=t[e].filter((function(t){return""!=t&&" "!=t}));return t=t.filter((function(t){return 0!=t.length})),t},compileLine:function(t,e){var s=e[0].toLowerCase();switch(this.err_line=t,s){case"load":case"0000":this.program[t]=["load"];break;case"add":case"0010":this.program[t]=["add"];break;case"sub":case"subtract":case"0100":this.program[t]=["sub"];break;case"str":case"store":case"storeto":case"0110":this.program[t]=["str"];break;case"rd":case"read":case"1000":this.program[t]=["read"];break;case"and":case"1010":this.program[t]=["and"];break;case"goto":case"jmp":case"jump":case"1100":this.program[t]=["goto"];break;case"if0":case"breq":case"ifZero":case"1110":this.program[t]=["ifZero"];break;default:return 1}if(void 0===e[1])return 3;for(var i=2;i<10;i++)if(e[1].includes(i))return 2;var r=parseInt(e[1],2);return r>15?4:(this.program[t].push(r),0)}}}),p=f,g=(s("ebba"),Object(l["a"])(p,d,v,!1,null,"31c8dca8",null)),m=g.exports,w={name:"ChumpPage",components:{CHUMP:u,Programmer:m},methods:{compile:function(t){this.$refs.CHUMP.compile(t)},changeSpeed:function(t){this.$refs.CHUMP.changeSpeed(t)}},props:{is_mobile:Boolean}},b=w,E=(s("3dd5"),Object(l["a"])(b,i,r,!1,null,"39899fa0",null));e["default"]=E.exports},1276:function(t,e,s){"use strict";var i=s("d784"),r=s("44e7"),a=s("825a"),n=s("1d80"),o=s("4840"),c=s("8aa5"),l=s("50c4"),h=s("14c3"),u=s("9263"),d=s("d039"),v=[].push,f=Math.min,p=4294967295,g=!d((function(){return!RegExp(p,"y")}));i("split",2,(function(t,e,s){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var i=String(n(this)),a=void 0===s?p:s>>>0;if(0===a)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,a);var o,c,l,h=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,g=new RegExp(t.source,d+"g");while(o=u.call(g,i)){if(c=g.lastIndex,c>f&&(h.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&v.apply(h,o.slice(1)),l=o[0].length,f=c,h.length>=a))break;g.lastIndex===o.index&&g.lastIndex++}return f===i.length?!l&&g.test("")||h.push(""):h.push(i.slice(f)),h.length>a?h.slice(0,a):h}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:e.call(this,t,s)}:e,[function(e,s){var r=n(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,s):i.call(String(r),e,s)},function(t,r){var n=s(i,t,this,r,i!==e);if(n.done)return n.value;var u=a(t),d=String(this),v=o(u,RegExp),m=u.unicode,w=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),b=new v(g?u:"^(?:"+u.source+")",w),E=void 0===r?p:r>>>0;if(0===E)return[];if(0===d.length)return null===h(b,d)?[d]:[];var x=0,y=0,_=[];while(y<d.length){b.lastIndex=g?y:0;var L,S=h(b,g?d:d.slice(y));if(null===S||(L=f(l(b.lastIndex+(g?0:y)),d.length))===x)y=c(d,y,m);else{if(_.push(d.slice(x,y)),_.length===E)return _;for(var D=1;D<=S.length-1;D++)if(_.push(S[D]),_.length===E)return _;y=x=L}}return _.push(d.slice(x)),_}]}),!g)},"14c3":function(t,e,s){var i=s("c6b6"),r=s("9263");t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var a=s.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"1dde":function(t,e,s){var i=s("d039"),r=s("b622"),a=s("2d00"),n=r("species");t.exports=function(t){return a>=51||!i((function(){var e=[],s=e.constructor={};return s[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,s){"use strict";var i=s("23e7"),r=s("5a34"),a=s("1d80"),n=s("ab13");i({target:"String",proto:!0,forced:!n("includes")},{includes:function(t){return!!~String(a(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},2970:function(t,e,s){},"393a":function(t,e,s){},"3ca3":function(t,e,s){"use strict";var i=s("6547").charAt,r=s("69f3"),a=s("7dd0"),n="String Iterator",o=r.set,c=r.getterFor(n);a(String,"String",(function(t){o(this,{type:n,string:String(t),index:0})}),(function(){var t,e=c(this),s=e.string,r=e.index;return r>=s.length?{value:void 0,done:!0}:(t=i(s,r),e.index+=t.length,{value:t,done:!1})}))},"3dd5":function(t,e,s){"use strict";var i=s("393a"),r=s.n(i);r.a},"44e7":function(t,e,s){var i=s("861d"),r=s("c6b6"),a=s("b622"),n=a("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==r(t))}},"4c53":function(t,e,s){"use strict";var i=s("23e7"),r=s("857a"),a=s("af03");i({target:"String",proto:!0,forced:a("sub")},{sub:function(){return r(this,"sub","","")}})},"4de4":function(t,e,s){"use strict";var i=s("23e7"),r=s("b727").filter,a=s("1dde"),n=s("ae40"),o=a("filter"),c=n("filter");i({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,s){"use strict";var i=s("0366"),r=s("7b0b"),a=s("9bdd"),n=s("e95a"),o=s("50c4"),c=s("8418"),l=s("35a1");t.exports=function(t){var e,s,h,u,d,v,f=r(t),p="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,w=void 0!==m,b=l(f),E=0;if(w&&(m=i(m,g>2?arguments[2]:void 0,2)),void 0==b||p==Array&&n(b))for(e=o(f.length),s=new p(e);e>E;E++)v=w?m(f[E],E):f[E],c(s,E,v);else for(u=b.call(f),d=u.next,s=new p;!(h=d.call(u)).done;E++)v=w?a(u,m,[h.value,E],!0):h.value,c(s,E,v);return s.length=E,s}},5319:function(t,e,s){"use strict";var i=s("d784"),r=s("825a"),a=s("7b0b"),n=s("50c4"),o=s("a691"),c=s("1d80"),l=s("8aa5"),h=s("14c3"),u=Math.max,d=Math.min,v=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,s,i){var m=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,w=i.REPLACE_KEEPS_$0,b=m?"$":"$0";return[function(s,i){var r=c(this),a=void 0==s?void 0:s[t];return void 0!==a?a.call(s,r,i):e.call(String(r),s,i)},function(t,i){if(!m&&w||"string"===typeof i&&-1===i.indexOf(b)){var a=s(e,t,this,i);if(a.done)return a.value}var c=r(t),v=String(this),f="function"===typeof i;f||(i=String(i));var p=c.global;if(p){var x=c.unicode;c.lastIndex=0}var y=[];while(1){var _=h(c,v);if(null===_)break;if(y.push(_),!p)break;var L=String(_[0]);""===L&&(c.lastIndex=l(v,n(c.lastIndex),x))}for(var S="",D=0,C=0;C<y.length;C++){_=y[C];for(var k=String(_[0]),A=u(d(o(_.index),v.length),0),R=[],I=1;I<_.length;I++)R.push(g(_[I]));var N=_.groups;if(f){var O=[k].concat(R,A,v);void 0!==N&&O.push(N);var P=String(i.apply(void 0,O))}else P=E(k,v,A,R,N,i);A>=D&&(S+=v.slice(D,A)+P,D=A+k.length)}return S+v.slice(D)}];function E(t,s,i,r,n,o){var c=i+t.length,l=r.length,h=p;return void 0!==n&&(n=a(n),h=f),e.call(o,h,(function(e,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return s.slice(0,i);case"'":return s.slice(c);case"<":o=n[a.slice(1,-1)];break;default:var h=+a;if(0===h)return e;if(h>l){var u=v(h/10);return 0===u?e:u<=l?void 0===r[u-1]?a.charAt(1):r[u-1]+a.charAt(1):e}o=r[h-1]}return void 0===o?"":o}))}}))},"5a34":function(t,e,s){var i=s("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},6547:function(t,e,s){var i=s("a691"),r=s("1d80"),a=function(t){return function(e,s){var a,n,o=String(r(e)),c=i(s),l=o.length;return c<0||c>=l?t?"":void 0:(a=o.charCodeAt(c),a<55296||a>56319||c+1===l||(n=o.charCodeAt(c+1))<56320||n>57343?t?o.charAt(c):a:t?o.slice(c,c+2):n-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(t,e,s){var i=s("861d"),r=s("e8b5"),a=s("b622"),n=a("species");t.exports=function(t,e){var s;return r(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!r(s.prototype)?i(s)&&(s=s[n],null===s&&(s=void 0)):s=void 0),new(void 0===s?Array:s)(0===e?0:e)}},8418:function(t,e,s){"use strict";var i=s("c04e"),r=s("9bf2"),a=s("5c6c");t.exports=function(t,e,s){var n=i(e);n in t?r.f(t,n,a(0,s)):t[n]=s}},"857a":function(t,e,s){var i=s("1d80"),r=/"/g;t.exports=function(t,e,s,a){var n=String(i(t)),o="<"+e;return""!==s&&(o+=" "+s+'="'+String(a).replace(r,"&quot;")+'"'),o+">"+n+"</"+e+">"}},"8aa5":function(t,e,s){"use strict";var i=s("6547").charAt;t.exports=function(t,e,s){return e+(s?i(t,e).length:1)}},9263:function(t,e,s){"use strict";var i=s("ad6d"),r=s("9f7fd"),a=RegExp.prototype.exec,n=String.prototype.replace,o=a,c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,h=void 0!==/()??/.exec("")[1],u=c||h||l;u&&(o=function(t){var e,s,r,o,u=this,d=l&&u.sticky,v=i.call(u),f=u.source,p=0,g=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(f="(?: "+f+")",g=" "+g,p++),s=new RegExp("^(?:"+f+")",v)),h&&(s=new RegExp("^"+f+"$(?!\\s)",v)),c&&(e=u.lastIndex),r=a.call(d?s:u,g),d?r?(r.input=r.input.slice(p),r[0]=r[0].slice(p),r.index=u.lastIndex,u.lastIndex+=r[0].length):u.lastIndex=0:c&&r&&(u.lastIndex=u.global?r.index+r[0].length:e),h&&r&&r.length>1&&n.call(r[0],s,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=o},"9f7fd":function(t,e,s){"use strict";var i=s("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a630:function(t,e,s){var i=s("23e7"),r=s("4df4"),a=s("1c7e"),n=!a((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:n},{from:r})},a640:function(t,e,s){"use strict";var i=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&i((function(){s.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,s){var i=s("b622"),r=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[r]=!1,"/./"[t](e)}catch(i){}}return!1}},ac1f:function(t,e,s){"use strict";var i=s("23e7"),r=s("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,s){"use strict";var i=s("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,s){var i=s("83ab"),r=s("d039"),a=s("5135"),n=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(a(o,t))return o[t];e||(e={});var s=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,h=a(e,0)?e[0]:c,u=a(e,1)?e[1]:void 0;return o[t]=!!s&&!r((function(){if(l&&!i)return!0;var t={length:-1};l?n(t,1,{enumerable:!0,get:c}):t[1]=1,s.call(t,h,u)}))}},af03:function(t,e,s){var i=s("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b727:function(t,e,s){var i=s("0366"),r=s("44ad"),a=s("7b0b"),n=s("50c4"),o=s("65f0"),c=[].push,l=function(t){var e=1==t,s=2==t,l=3==t,h=4==t,u=6==t,d=5==t||u;return function(v,f,p,g){for(var m,w,b=a(v),E=r(b),x=i(f,p,3),y=n(E.length),_=0,L=g||o,S=e?L(v,y):s?L(v,0):void 0;y>_;_++)if((d||_ in E)&&(m=E[_],w=x(m,_,b),t))if(e)S[_]=w;else if(w)switch(t){case 3:return!0;case 5:return m;case 6:return _;case 2:c.call(S,m)}else if(h)return!1;return u?-1:l||h?h:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},bf61:function(t,e,s){"use strict";var i=s("2970"),r=s.n(i);r.a},c975:function(t,e,s){"use strict";var i=s("23e7"),r=s("4d64").indexOf,a=s("a640"),n=s("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),h=n("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!l||!h},{indexOf:function(t){return c?o.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,e,s){"use strict";var i=s("23e7"),r=s("4d64").includes,a=s("44d2"),n=s("ae40"),o=n("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!o},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d681:function(t,e,s){},d784:function(t,e,s){"use strict";s("ac1f");var i=s("6eeb"),r=s("d039"),a=s("b622"),n=s("9263"),o=s("9112"),c=a("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),h=function(){return"$0"==="a".replace(/./,"$0")}(),u=a("replace"),d=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),v=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2!==s.length||"a"!==s[0]||"b"!==s[1]}));t.exports=function(t,e,s,u){var f=a(t),p=!r((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),g=p&&!r((function(){var e=!1,s=/a/;return"split"===t&&(s={},s.constructor={},s.constructor[c]=function(){return s},s.flags="",s[f]=/./[f]),s.exec=function(){return e=!0,null},s[f](""),!e}));if(!p||!g||"replace"===t&&(!l||!h||d)||"split"===t&&!v){var m=/./[f],w=s(f,""[t],(function(t,e,s,i,r){return e.exec===n?p&&!r?{done:!0,value:m.call(e,s,i)}:{done:!0,value:t.call(s,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:h,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=w[0],E=w[1];i(String.prototype,t,b),i(RegExp.prototype,f,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}u&&o(RegExp.prototype[f],"sham",!0)}},e8b5:function(t,e,s){var i=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},ebba:function(t,e,s){"use strict";var i=s("d681"),r=s.n(i);r.a},fb6a:function(t,e,s){"use strict";var i=s("23e7"),r=s("861d"),a=s("e8b5"),n=s("23cb"),o=s("50c4"),c=s("fc6a"),l=s("8418"),h=s("b622"),u=s("1dde"),d=s("ae40"),v=u("slice"),f=d("slice",{ACCESSORS:!0,0:0,1:2}),p=h("species"),g=[].slice,m=Math.max;i({target:"Array",proto:!0,forced:!v||!f},{slice:function(t,e){var s,i,h,u=c(this),d=o(u.length),v=n(t,d),f=n(void 0===e?d:e,d);if(a(u)&&(s=u.constructor,"function"!=typeof s||s!==Array&&!a(s.prototype)?r(s)&&(s=s[p],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return g.call(u,v,f);for(i=new(void 0===s?Array:s)(m(f-v,0)),h=0;v<f;v++,h++)v in u&&l(i,h,u[v]);return i.length=h,i}})},fee6:function(t,e,s){t.exports=s.p+"img/chumpRender.b291b093.svg"}}]);
//# sourceMappingURL=chunk-4cbc5987.fdde9074.js.map