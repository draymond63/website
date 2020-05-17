(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dd04b74"],{"0535":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{"main-mobile":this.is_mobile},attrs:{id:"main"}},[t._m(0),r("div",[r("CHUMP",{ref:"CHUMP"}),r("Programmer",{on:{"update-code":t.compile}})],1)])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{attrs:{id:"header"}},[r("h1",{staticStyle:{"margin-right":"5%"}},[t._v("CHUMP")]),r("h2",[t._v("A programmable 4-bit computer, my largest project to date.")])]),r("h3",[t._v("How It Works")]),r("p",[t._v(" The control ROM receives the opcod ⁠— the instruction for the entire computer ⁠— from the program ROM. This ROM is programmed by the user with a "),r("a",[t._v("machine code")]),t._v(" language I devised from scratch. Using this information and its eight output pins, the control ROM distributes the proper ALU instruction, which function the RAM should be performing (read or write), and the inhibiting pin of the accumulator chip (Accum). It knows this based on the previously agreed upon interpretation and language inside the registers of the ROMs. For example, the current opcode for an addition operation is 0010. This number becomes the address for the control ROM. It looks inside that specific register and outputs whatever it sees. In this case, it would set the ALU to addition and enable the Accum. Since we aren’t using the RAM, it is set to read as a precaution. ")]),r("h3",[t._v("The RAM")]),r("p",[t._v(" The RAM that is used in this project is the SN74LS189N. It has 16 four-bit registers. As a result, it has four address pins, four data input pins, and four output pins. It works similarly to the EEPROMs as previously discussed the main difference being that in this project we are writing to it in certain scenarios. To write to this chip, the R/W pin is grounded. ")]),r("h3",[t._v("The Address Chip and Accumulator")]),r("p",[t._v(" The address chip is a hex flip-flop. It has eight inputs and eight corresponding outputs. When an input is given power, even for an instant, its respective output is set to high. In this way, it acts as a single register that holds the address for the RAM. Once its clock pin completes one full cycle all its outputs are set low. The Accum is the exact same chip, but it is an octal flip-flop with an optional inhibitor. ")]),r("h3",[t._v("The Multiplexer")]),r("p",[t._v(" The multiplexer has two primary inputs comprised of four pins each: A and B. Based on the input of a select pin, it decides to output either all the A inputs or all the B inputs. This is used in the CHUMP to determine whether to use the constant provided by the program ROM or the output of the RAM. ")])])}],n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"computer"},[i("img",{attrs:{src:r("fee6")}}),i("div",{staticClass:"c-led r-0",staticStyle:{left:"5%"},attrs:{id:"r"}}),i("div",{staticClass:"c-led g-0",staticStyle:{left:"10%"},attrs:{id:"g"}}),i("div",{staticClass:"c-led g-0",staticStyle:{left:"13%"},attrs:{id:"g"}}),i("div",{staticClass:"c-led g-0",staticStyle:{left:"16%"},attrs:{id:"g"}}),i("div",{staticClass:"c-led g-0",staticStyle:{left:"19%"},attrs:{id:"g"}}),i("div",{staticClass:"c-led y-0",staticStyle:{left:"23%"},attrs:{id:"y"}}),i("div",{staticClass:"c-led y-0",staticStyle:{left:"26%"},attrs:{id:"y"}}),i("div",{staticClass:"c-led y-0",staticStyle:{left:"29%"},attrs:{id:"y"}}),i("div",{staticClass:"c-led y-0",staticStyle:{left:"32%"},attrs:{id:"y"}}),i("div",{staticClass:"c-led y-0",staticStyle:{left:"35%"},attrs:{id:"y"}}),i("div",{staticClass:"c-led y-0",staticStyle:{left:"38%"},attrs:{id:"y"}}),i("div",{staticClass:"c-led y-0",staticStyle:{left:"41%"},attrs:{id:"y"}}),i("div",{staticClass:"c-led y-0",staticStyle:{left:"44%"},attrs:{id:"y"}}),i("div",{staticClass:"c-led r-0",staticStyle:{left:"50%"},attrs:{id:"r"}}),i("div",{staticClass:"c-led r-0",staticStyle:{left:"53%"},attrs:{id:"r"}}),i("div",{staticClass:"c-led r-0",staticStyle:{left:"56%"},attrs:{id:"r"}}),i("div",{staticClass:"c-led r-0",staticStyle:{left:"59%"},attrs:{id:"r"}}),i("div",{staticClass:"c-led r-0",staticStyle:{left:"62%"},attrs:{id:"r"}}),i("div",{staticClass:"c-led r-0",staticStyle:{left:"65%"},attrs:{id:"r"}}),i("div",{staticClass:"c-led r-0",staticStyle:{left:"68%"},attrs:{id:"r"}}),i("div",{staticClass:"c-led r-0",staticStyle:{left:"71%"},attrs:{id:"r"}}),i("div",{staticClass:"c-led g-0",staticStyle:{left:"82%"},attrs:{id:"g"}}),i("div",{staticClass:"c-led g-0",staticStyle:{left:"85%"},attrs:{id:"g"}}),i("div",{staticClass:"c-led g-0",staticStyle:{left:"88%"},attrs:{id:"g"}}),i("div",{staticClass:"c-led g-0",staticStyle:{left:"91%"},attrs:{id:"g"}})])}],c=(r("a630"),r("fb6a"),r("3ca3"),r("4c53"),{name:"CHUMP",data:function(){return{run:!0,clk:1,program:[],pc:0,alu:0,RAM:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],pl:255,acc:0}},mounted:function(){setInterval(this.update.bind(this),500),this.LEDs=Array.from(document.getElementsByClassName("c-led")),this.clkLED=this.LEDs[0],this.aluLEDs=this.LEDs.slice(1,5),this.plLEDs=this.LEDs.slice(5,13),this.pcLEDs=this.LEDs.slice(13,22),this.accLEDs=this.LEDs.slice(21,25)},methods:{update:function(){this.run&&(this.clk^=1,null!=this.program[this.pc]&&null!=this.program[this.pc][0]&&null!=this.program[this.pc][1]?this.executeLine():this.clk&&(this.pl=255),this.clk&&(this.pc%=256,this.pc++),this.updateLEDs())},updateLEDs:function(){for(var t in this.toggle(this.clkLED,this.clk),this.aluLEDs){var e=this.alu&8>>t;this.toggle(this.aluLEDs[t],e)}for(var r in this.plLEDs){var i=this.pl&128>>r;this.toggle(this.plLEDs[r],i)}for(var s in this.pcLEDs){var n=this.pc&128>>s;this.toggle(this.pcLEDs[s],n)}for(var a in this.accLEDs){var c=this.acc&8>>a;this.toggle(this.accLEDs[a],c)}},toggle:function(t,e){e&&(e=1);var r=t.id;t.classList="c-led "+r+"-"+e},compile:function(t){this.clk=0,this.pc=0,t?(this.run=!0,this.program=this.parseFunc(t)):(this.run=!1,this.updateLEDs())},parseFunc:function(t){for(var e in t)switch(t[e][0]){case"load":t[e][0]=this.load;break;case"add":t[e][0]=this.add;break;case"sub":t[e][0]=this.sub;break;case"str":t[e][0]=this.str;break;case"read":t[e][0]=this.read;break;case"and":t[e][0]=this.and;break;case"goto":t[e][0]=this.goto;break;case"ifZero":t[e][0]=this.ifZ;break;default:console.error("Inappropriate program line passed")}return t},executeLine:function(){if(this.clk){var t=this.program[this.pc][1];switch(this.program[this.pc][0]){case this.load:this.pl=t;break;case this.add:this.pl=32|t;break;case this.subtract:this.pl=64|t;break;case this.storeTo:this.pl=96|t;break;case this.read:this.pl=128|t;break;case this.and:this.pl=160|t;break;case this.goTo:this.pl=192|t;break;case this.ifZero:this.pl=224|t;break;default:this.pl=255;break}this.program[this.pc][0].call(this,t)}},load:function(t){this.alu=t,this.alu%=16},add:function(t){this.alu+=t,this.alu%=16,this.acc=this.alu},sub:function(t){this.alu-=t,this.alu%=16,this.acc=this.alu},str:function(t){this.RAM[t]=this.acc},read:function(t){this.alu=this.RAM[t],this.acc=this.alu},and:function(t){this.alu=this.acc&t},goto:function(t){this.pc=t-1,this.pc%=256},ifZ:function(t){0==this.acc&&(this.pc=t-1,this.pc%=256)}}}),o=c,l=(r("d25d"),r("2877")),u=Object(l["a"])(o,n,a,!1,null,"d765c976",null),d=u.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"programmer"},[r("div",[t._m(0),r("div",{staticStyle:{height:"8vh"}},[1==this.err?r("i",[t._v("Error: opcode at line "+t._s(this.err_line)+" is uncompilable")]):2==this.err?r("i",[t._v("Error: operand at line "+t._s(this.err_line)+" is not binary")]):3==this.err?r("i",[t._v("Error: missing operand at line "+t._s(this.err_line))]):4==this.err?r("i",[t._v("Error: operand exceeds 4-bit max at line "+t._s(this.err_line))]):t._e()])]),r("textarea",{staticClass:"prog-input",attrs:{spellcheck:"false"},on:{input:function(e){t.$emit("update-code",t.compile())}}},[t._v("load 0010")])])},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticStyle:{margin:"10%"}},[r("b",[t._v("Load")]),r("br"),t._v(" Load value into reg"),r("br"),r("b",[t._v("Add")]),r("br"),t._v(" Add constant to reg"),r("br"),r("b",[t._v("Subtract")]),r("br"),t._v(" Subtract constant from reg"),r("br"),r("b",[t._v("StoreTo")]),r("br"),t._v(" Store reg in address given"),r("br"),r("b",[t._v("Read")]),r("br"),t._v(" Read RAM from address given"),r("br"),r("b",[t._v("GoTo")]),r("br"),t._v(" Jump PC to constant"),r("br"),r("b",[t._v("IfZero")]),r("br"),t._v(" Jump PC to constant if reg is 0"),r("br"),r("br")])}],p=(r("4de4"),r("caad"),r("c975"),r("ac1f"),r("2532"),r("1276"),{name:"Programmer",data:function(){return{program:[],err:0,err_line:0}},methods:{compile:function(){var t=document.getElementsByClassName("prog-input").item(0).value;for(var e in t=this.parseCode(t),t)if(t[e]!=[]&&(this.err=this.compileLine(e,t[e])),this.err)return!1;return this.program},parseCode:function(t){for(var e in t=t.split("\n"),t)t[e].includes(";")&&(t[e]=t[e].substring(0,t[e].indexOf(";"))),t[e]=t[e].split(" "),t[e]=t[e].filter((function(t){return""!=t&&" "!=t}));return t=t.filter((function(t){return 0!=t.length})),t},compileLine:function(t,e){var r=e[0].toLowerCase();switch(this.err_line=t,r){case"load":case"0000":this.program[t]=["load"];break;case"add":case"0010":this.program[t]=["add"];break;case"sub":case"subtract":case"0100":this.program[t]=["sub"];break;case"str":case"store":case"storeto":case"0110":this.program[t]=["str"];break;case"rd":case"read":case"1000":this.program[t]=["read"];break;case"and":case"1010":this.program[t]=["and"];break;case"goto":case"jmp":case"jump":case"1100":this.program[t]=["goto"];break;case"if0":case"breq":case"ifZero":case"1110":this.program[t]=["ifZero"];break;default:return 1}if(void 0===e[1])return 3;for(var i=2;i<10;i++)if(e[1].includes(i))return 2;var s=parseInt(e[1],2);return s>15?4:(this.program[t].push(s),0)}}}),v=p,g=(r("6e95"),Object(l["a"])(v,h,f,!1,null,"542e30cc",null)),b=g.exports,m={name:"ChumpPage",components:{CHUMP:d,Programmer:b},methods:{compile:function(t){this.$refs.CHUMP.compile(t)}},props:{is_mobile:Boolean}},y=m,x=(r("ab4c"),Object(l["a"])(y,i,s,!1,null,"24b3b8e7",null));e["default"]=x.exports},1276:function(t,e,r){"use strict";var i=r("d784"),s=r("44e7"),n=r("825a"),a=r("1d80"),c=r("4840"),o=r("8aa5"),l=r("50c4"),u=r("14c3"),d=r("9263"),h=r("d039"),f=[].push,p=Math.min,v=4294967295,g=!h((function(){return!RegExp(v,"y")}));i("split",2,(function(t,e,r){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var i=String(a(this)),n=void 0===r?v:r>>>0;if(0===n)return[];if(void 0===t)return[i];if(!s(t))return e.call(i,t,n);var c,o,l,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,h+"g");while(c=d.call(g,i)){if(o=g.lastIndex,o>p&&(u.push(i.slice(p,c.index)),c.length>1&&c.index<i.length&&f.apply(u,c.slice(1)),l=c[0].length,p=o,u.length>=n))break;g.lastIndex===c.index&&g.lastIndex++}return p===i.length?!l&&g.test("")||u.push(""):u.push(i.slice(p)),u.length>n?u.slice(0,n):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var s=a(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,s,r):i.call(String(s),e,r)},function(t,s){var a=r(i,t,this,s,i!==e);if(a.done)return a.value;var d=n(t),h=String(this),f=c(d,RegExp),b=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),y=new f(g?d:"^(?:"+d.source+")",m),x=void 0===s?v:s>>>0;if(0===x)return[];if(0===h.length)return null===u(y,h)?[h]:[];var E=0,S=0,_=[];while(S<h.length){y.lastIndex=g?S:0;var C,A=u(y,g?h:h.slice(S));if(null===A||(C=p(l(y.lastIndex+(g?0:S)),h.length))===E)S=o(h,S,b);else{if(_.push(h.slice(E,S)),_.length===x)return _;for(var R=1;R<=A.length-1;R++)if(_.push(A[R]),_.length===x)return _;S=E=C}}return _.push(h.slice(E)),_}]}),!g)},"14c3":function(t,e,r){var i=r("c6b6"),s=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var n=r.call(t,e);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},"1dde":function(t,e,r){var i=r("d039"),s=r("b622"),n=r("2d00"),a=s("species");t.exports=function(t){return n>=51||!i((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,r){"use strict";var i=r("23e7"),s=r("5a34"),n=r("1d80"),a=r("ab13");i({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(n(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},"3ca3":function(t,e,r){"use strict";var i=r("6547").charAt,s=r("69f3"),n=r("7dd0"),a="String Iterator",c=s.set,o=s.getterFor(a);n(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=o(this),r=e.string,s=e.index;return s>=r.length?{value:void 0,done:!0}:(t=i(r,s),e.index+=t.length,{value:t,done:!1})}))},"44e7":function(t,e,r){var i=r("861d"),s=r("c6b6"),n=r("b622"),a=n("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==s(t))}},"4c53":function(t,e,r){"use strict";var i=r("23e7"),s=r("857a"),n=r("af03");i({target:"String",proto:!0,forced:n("sub")},{sub:function(){return s(this,"sub","","")}})},"4de4":function(t,e,r){"use strict";var i=r("23e7"),s=r("b727").filter,n=r("1dde"),a=r("ae40"),c=n("filter"),o=a("filter");i({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,r){"use strict";var i=r("0366"),s=r("7b0b"),n=r("9bdd"),a=r("e95a"),c=r("50c4"),o=r("8418"),l=r("35a1");t.exports=function(t){var e,r,u,d,h,f,p=s(t),v="function"==typeof this?this:Array,g=arguments.length,b=g>1?arguments[1]:void 0,m=void 0!==b,y=l(p),x=0;if(m&&(b=i(b,g>2?arguments[2]:void 0,2)),void 0==y||v==Array&&a(y))for(e=c(p.length),r=new v(e);e>x;x++)f=m?b(p[x],x):p[x],o(r,x,f);else for(d=y.call(p),h=d.next,r=new v;!(u=h.call(d)).done;x++)f=m?n(d,b,[u.value,x],!0):u.value,o(r,x,f);return r.length=x,r}},"5a34":function(t,e,r){var i=r("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},6547:function(t,e,r){var i=r("a691"),s=r("1d80"),n=function(t){return function(e,r){var n,a,c=String(s(e)),o=i(r),l=c.length;return o<0||o>=l?t?"":void 0:(n=c.charCodeAt(o),n<55296||n>56319||o+1===l||(a=c.charCodeAt(o+1))<56320||a>57343?t?c.charAt(o):n:t?c.slice(o,o+2):a-56320+(n-55296<<10)+65536)}};t.exports={codeAt:n(!1),charAt:n(!0)}},"65f0":function(t,e,r){var i=r("861d"),s=r("e8b5"),n=r("b622"),a=n("species");t.exports=function(t,e){var r;return s(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!s(r.prototype)?i(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6e95":function(t,e,r){"use strict";var i=r("d339"),s=r.n(i);s.a},7013:function(t,e,r){},8418:function(t,e,r){"use strict";var i=r("c04e"),s=r("9bf2"),n=r("5c6c");t.exports=function(t,e,r){var a=i(e);a in t?s.f(t,a,n(0,r)):t[a]=r}},"857a":function(t,e,r){var i=r("1d80"),s=/"/g;t.exports=function(t,e,r,n){var a=String(i(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+String(n).replace(s,"&quot;")+'"'),c+">"+a+"</"+e+">"}},"8aa5":function(t,e,r){"use strict";var i=r("6547").charAt;t.exports=function(t,e,r){return e+(r?i(t,e).length:1)}},"8eb9":function(t,e,r){},9263:function(t,e,r){"use strict";var i=r("ad6d"),s=r("9f7f"),n=RegExp.prototype.exec,a=String.prototype.replace,c=n,o=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=s.UNSUPPORTED_Y||s.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||l;d&&(c=function(t){var e,r,s,c,d=this,h=l&&d.sticky,f=i.call(d),p=d.source,v=0,g=t;return h&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,v++),r=new RegExp("^(?:"+p+")",f)),u&&(r=new RegExp("^"+p+"$(?!\\s)",f)),o&&(e=d.lastIndex),s=n.call(h?r:d,g),h?s?(s.input=s.input.slice(v),s[0]=s[0].slice(v),s.index=d.lastIndex,d.lastIndex+=s[0].length):d.lastIndex=0:o&&s&&(d.lastIndex=d.global?s.index+s[0].length:e),u&&s&&s.length>1&&a.call(s[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(s[c]=void 0)})),s}),t.exports=c},"9f7f":function(t,e,r){"use strict";var i=r("d039");function s(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a630:function(t,e,r){var i=r("23e7"),s=r("4df4"),n=r("1c7e"),a=!n((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:a},{from:s})},a640:function(t,e,r){"use strict";var i=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&i((function(){r.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,r){var i=r("b622"),s=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[s]=!1,"/./"[t](e)}catch(i){}}return!1}},ab4c:function(t,e,r){"use strict";var i=r("8eb9"),s=r.n(i);s.a},ac1f:function(t,e,r){"use strict";var i=r("23e7"),s=r("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(t,e,r){"use strict";var i=r("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,r){var i=r("83ab"),s=r("d039"),n=r("5135"),a=Object.defineProperty,c={},o=function(t){throw t};t.exports=function(t,e){if(n(c,t))return c[t];e||(e={});var r=[][t],l=!!n(e,"ACCESSORS")&&e.ACCESSORS,u=n(e,0)?e[0]:o,d=n(e,1)?e[1]:void 0;return c[t]=!!r&&!s((function(){if(l&&!i)return!0;var t={length:-1};l?a(t,1,{enumerable:!0,get:o}):t[1]=1,r.call(t,u,d)}))}},af03:function(t,e,r){var i=r("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b727:function(t,e,r){var i=r("0366"),s=r("44ad"),n=r("7b0b"),a=r("50c4"),c=r("65f0"),o=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,d=6==t,h=5==t||d;return function(f,p,v,g){for(var b,m,y=n(f),x=s(y),E=i(p,v,3),S=a(x.length),_=0,C=g||c,A=e?C(f,S):r?C(f,0):void 0;S>_;_++)if((h||_ in x)&&(b=x[_],m=E(b,_,y),t))if(e)A[_]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return _;case 2:o.call(A,b)}else if(u)return!1;return d?-1:l||u?u:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c975:function(t,e,r){"use strict";var i=r("23e7"),s=r("4d64").indexOf,n=r("a640"),a=r("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,l=n("indexOf"),u=a("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:o||!l||!u},{indexOf:function(t){return o?c.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,e,r){"use strict";var i=r("23e7"),s=r("4d64").includes,n=r("44d2"),a=r("ae40"),c=a("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!c},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},d25d:function(t,e,r){"use strict";var i=r("7013"),s=r.n(i);s.a},d339:function(t,e,r){},d784:function(t,e,r){"use strict";r("ac1f");var i=r("6eeb"),s=r("d039"),n=r("b622"),a=r("9263"),c=r("9112"),o=n("species"),l=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=n("replace"),h=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var p=n(t),v=!s((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=v&&!s((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!v||!g||"replace"===t&&(!l||!u||h)||"split"===t&&!f){var b=/./[p],m=r(p,""[t],(function(t,e,r,i,s){return e.exec===a?v&&!s?{done:!0,value:b.call(e,r,i)}:{done:!0,value:t.call(r,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),y=m[0],x=m[1];i(String.prototype,t,y),i(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}d&&c(RegExp.prototype[p],"sham",!0)}},e8b5:function(t,e,r){var i=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fb6a:function(t,e,r){"use strict";var i=r("23e7"),s=r("861d"),n=r("e8b5"),a=r("23cb"),c=r("50c4"),o=r("fc6a"),l=r("8418"),u=r("b622"),d=r("1dde"),h=r("ae40"),f=d("slice"),p=h("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),g=[].slice,b=Math.max;i({target:"Array",proto:!0,forced:!f||!p},{slice:function(t,e){var r,i,u,d=o(this),h=c(d.length),f=a(t,h),p=a(void 0===e?h:e,h);if(n(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?s(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return g.call(d,f,p);for(i=new(void 0===r?Array:r)(b(p-f,0)),u=0;f<p;f++,u++)f in d&&l(i,u,d[f]);return i.length=u,i}})},fee6:function(t,e,r){t.exports=r.p+"img/chumpRender.b291b093.svg"}}]);
//# sourceMappingURL=chunk-1dd04b74.31bf7410.js.map