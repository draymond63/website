(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{254:function(e,r,t){var content=t(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(105).default)("6ab14f54",content,!0,{sourceMap:!1})},269:function(e,r,t){"use strict";var n=t(11),o=t(0),c=t(4),d=t(106),l=t(16),v=t(12),m=t(183),f=t(37),_=t(78),h=t(180),k=t(5),w=t(80).f,x=t(28).f,C=t(18).f,I=t(270),N=t(271).trim,y="Number",E=o.Number,M=E.prototype,S=o.TypeError,A=c("".slice),T=c("".charCodeAt),L=function(e){var r=h(e,"number");return"bigint"==typeof r?r:F(r)},F=function(e){var r,t,n,o,c,d,l,code,v=h(e,"number");if(_(v))throw S("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=N(v),43===(r=T(v,0))||45===r){if(88===(t=T(v,2))||120===t)return NaN}else if(48===r){switch(T(v,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+v}for(d=(c=A(v,2)).length,l=0;l<d;l++)if((code=T(c,l))<48||code>o)return NaN;return parseInt(c,n)}return+v};if(d(y,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var O,$=function(e){var r=arguments.length<1?0:E(L(e)),t=this;return f(M,t)&&k((function(){I(t)}))?m(Object(r),t,$):r},j=n?w(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;j.length>P;P++)v(E,O=j[P])&&!v($,O)&&C($,O,x(E,O));$.prototype=M,M.constructor=$,l(o,y,$,{constructor:!0})}},270:function(e,r,t){var n=t(4);e.exports=n(1..valueOf)},271:function(e,r,t){var n=t(4),o=t(23),c=t(13),d=t(272),l=n("".replace),v="["+d+"]",m=RegExp("^"+v+v+"*"),f=RegExp(v+v+"*$"),_=function(e){return function(r){var t=c(o(r));return 1&e&&(t=l(t,m,"")),2&e&&(t=l(t,f,"")),t}};e.exports={start:_(1),end:_(2),trim:_(3)}},272:function(e,r){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},273:function(e,r,t){"use strict";t(254)},274:function(e,r,t){var n=t(104)(!1);n.push([e.i,".programmer[data-v-76e56d46]{position:relative;background:#fff;border:1px solid #b5b5b5;font-size:.8rem;text-align:center}.programmer>h4>b[data-v-76e56d46]{cursor:pointer}.prog-input[data-v-76e56d46]{background:#d3d3d3;color:var(--text-color);box-sizing:border-box;width:80%;height:10rem;margin:0;padding:0 10% 10%;resize:none}.modal-wrapper[data-v-76e56d46]{position:absolute;width:100%;height:100%;left:0;top:0;display:grid;align-items:center;justify-items:center;place-items:center;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.modal[data-v-76e56d46]{display:flex;flex-direction:column;align-items:center;padding:1rem;background:#ececec;border:1px solid grey;border-radius:1rem}.modal>.commands[data-v-76e56d46]{display:grid;grid-template-columns:repeat(2,1fr);width:fit-content;text-align:left}.modal>.okay-button[data-v-76e56d46]{width:max-content;padding:.25rem .5rem;border-radius:.5rem;background:#fff}h4[data-v-76e56d46]{margin:.5em 0 0}.slider[data-v-76e56d46]{-webkit-appearance:none;width:80%;margin-top:0;height:1em;background:#d3d3d3;outline:1px solid #b5b5b5}.slider[data-v-76e56d46]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1em;height:1em;background:var(--main-color);border-radius:20%;cursor:pointer}.error-icon[data-v-76e56d46]{color:#cf0000}.info-icon[data-v-76e56d46]{color:grey}i[data-v-76e56d46]{color:#a00000;font-size:.9em}",""]),e.exports=n},299:function(e,r,t){"use strict";t.r(r);t(27),t(77),t(269),t(184),t(59),t(60),t(36),t(15);var n={name:"ChumpProgrammer",data:function(){return{program:[],err:0,err_line:0,show_err:!1,show_info:!0}},mounted:function(){this.$refs.input.innerHTML=this.$refs.input.innerHTML.replace(/; /g,"\n"),this.$emit("update-code",this.compile())},methods:{updateSpeed:function(e){var r=Number(e.target.value);console.log(r),this.$emit("speed-change",this.speedFunction(r))},speedFunction:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=500/Math.log(t/r)/Math.log(Math.exp(1)),s=a*Math.log(r)/Math.log(Math.exp(1));return Math.exp((e+s)/a)},compile:function(){var code=document.getElementsByClassName("prog-input").item(0).value;code=this.parseCode(code);var e=this.err;for(var r in code)if(code[r]!=[]&&(this.err=this.compileLine(r,code[r])),this.err)return e!=this.err&&(this.show_err=!0),!1;return this.show_err=!1,this.program},parseCode:function(code){for(var e in code=code.split("\n"))code[e].includes(";")&&(code[e]=code[e].substring(0,code[e].indexOf(";"))),code[e]=code[e].split(" "),code[e]=code[e].filter((function(e){return""!=e&&" "!=e}));return code=code.filter((function(line){return 0!=line.length}))},compileLine:function(e,line){var r=line[0].toLowerCase();switch(this.err_line=e,r){case"load":case"0000":this.program[e]=["load"];break;case"add":case"0010":this.program[e]=["add"];break;case"sub":case"subtract":case"0100":this.program[e]=["sub"];break;case"str":case"store":case"storeto":case"0110":this.program[e]=["str"];break;case"rd":case"read":case"1000":this.program[e]=["read"];break;case"and":case"1010":this.program[e]=["and"];break;case"goto":case"jmp":case"jump":case"1100":this.program[e]=["goto"];break;case"if0":case"breq":case"ifZero":case"1110":this.program[e]=["ifZero"];break;default:return 1}if(void 0===line[1])return 3;for(var i=2;i<10;i++)if(line[1].includes(i))return 2;var t=parseInt(line[1],2);return t>15?4:(this.program[e].push(t),0)},dismissInfoModal:function(){this.show_info=!1,this.$gtag.event("Interaction",{event_category:"Chump",event_label:"Programmer Used"})}}},o=n,c=(t(273),t(45)),component=Object(c.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"programmer"},[t("h4",[e._v("Speed Control")]),e._v(" "),t("input",{staticClass:"slider",attrs:{type:"range",min:"0",max:"500",value:"174"},on:{click:e.updateSpeed}}),e._v(" "),t("h4",[e._v("\n      Programmer\n      "),t("b",{staticClass:"info-icon material-icons",on:{click:function(r){e.show_info=!0}}},[e._v("info")]),e._v(" "),e.err?t("b",{staticClass:"error-icon material-icons",on:{click:function(r){e.show_err=!0}}},[e._v("error_outline")]):e._e()]),e._v(" "),t("textarea",{ref:"input",staticClass:"prog-input",attrs:{spellcheck:"false"},on:{input:function(r){e.$emit("update-code",e.compile())}}},[e._v("read 0010;\nadd 0001;\nstr 0010;\njmp 0000;\n")]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.show_info?t("div",{staticClass:"modal-wrapper"},[t("div",{staticClass:"modal"},[t("b",[e._v("Write commands and adjust the clock speed here!")]),e._v(" "),t("div",{staticClass:"commands"},[t("b",[e._v("Load")]),e._v(" "),t("p",[e._v("Load value into reg")]),e._v(" "),t("b",[e._v("Add")]),e._v(" "),t("p",[e._v("Add constant to reg")]),e._v(" "),t("b",[e._v("Subtract")]),e._v(" "),t("p",[e._v("Subtract constant from reg")]),e._v(" "),t("b",[e._v("And")]),e._v(" "),t("p",[e._v("Bitwise AND with constant")]),e._v(" "),t("b",[e._v("StoreTo")]),e._v(" "),t("p",[e._v("Store reg in address given")]),e._v(" "),t("b",[e._v("Read")]),e._v(" "),t("p",[e._v("Read RAM from address given")]),e._v(" "),t("b",[e._v("GoTo")]),e._v(" "),t("p",[e._v("Jump PC to constant")]),e._v(" "),t("b",[e._v("IfZero")]),e._v(" "),t("p",[e._v("Jump PC to constant if reg is 0")]),t("br")]),e._v(" "),t("button",{staticClass:"okay-button",on:{click:e.dismissInfoModal}},[e._v("Okay")])])]):e._e()]),e._v(" "),t("transition",{attrs:{name:"fade"}},[e.show_err?t("div",{staticClass:"modal-wrapper"},[t("div",{staticClass:"modal"},[1==e.err?t("i",[e._v("Error: opcode at line  "+e._s(e.err_line)+" is uncompilable")]):2==e.err?t("i",[e._v("Error: operand at line "+e._s(e.err_line)+" is not binary")]):3==e.err?t("i",[e._v("Error: missing operand at line "+e._s(e.err_line))]):4==e.err?t("i",[e._v("Error: operand exceeds 4-bit max at line "+e._s(e.err_line))]):e._e(),e._v(" "),t("button",{staticClass:"okay-button",on:{click:function(r){e.show_err=!1}}},[e._v("Okay")])])]):e._e()])],1)}),[],!1,null,"76e56d46",null);r.default=component.exports}}]);