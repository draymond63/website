(window.webpackJsonp=window.webpackJsonp||[]).push([[8,7],{206:function(e,t,r){var content=r(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(84).default)("bffb7792",content,!0,{sourceMap:!1})},209:function(e,t,r){"use strict";r(206)},210:function(e,t,r){var n=r(83)(!1);n.push([e.i,".tile-wrapper[data-v-d47ee104]{--shift-distance:.2rem}.tile[data-v-d47ee104]{width:100%;padding:1rem;background:#fffaf7;margin-top:var(--shift-distance);transition:all .3s ease;box-shadow:0 4px 8px 0 rgba(201,171,160,.4588235294117647)}.tile-wrapper:hover>.tile[data-v-d47ee104]{margin-top:0;margin-bottom:var(--shift-distance);box-shadow:0 4px 8px 0 rgba(228,169,150,.8705882352941177)}.header[data-v-d47ee104]{display:flex;justify-content:space-between;flex-wrap:wrap}h3[data-v-d47ee104]{font-size:1.4em}h5.type[data-v-d47ee104]{color:var(--main-color);opacity:.75}.tags[data-v-d47ee104]{display:flex;flex-direction:row;flex-wrap:wrap}.tag[data-v-d47ee104]{width:max-content;padding:.2rem .8rem;margin-bottom:.4rem;color:var(--text-color);border:1px solid var(--main-color);border-radius:1rem}.tag[data-v-d47ee104]:not(:last-child){margin-right:1rem}a[data-v-d47ee104],p[data-v-d47ee104]{color:var(--text-color);text-decoration:none}",""]),e.exports=n},211:function(e,t,r){var content=r(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(84).default)("44d6d7e4",content,!0,{sourceMap:!1})},215:function(e,t,r){"use strict";r.r(t);var n=r(1).a.extend({name:"Tile",props:{title:{type:String,default:""},blurb:{type:String,default:""},link:{type:String,default:""},type:{type:String,default:""},tags:{type:Array,default:function(){return[]}}}}),o=(r(209),r(35)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tile-wrapper"},[r(e.link?"nuxt-link":"div",{tag:"component",staticClass:"tile",attrs:{to:e.link}},[r("div",{staticClass:"header"},[r("h3",[e._v(e._s(e.title))]),e._v(" "),r("h5",{staticClass:"type"},[e._v(e._s(e.type))])]),e._v(" "),r("div",{staticClass:"tags"},e._l(e.tags,(function(t){return r("h6",{key:t,staticClass:"tag"},[e._v(e._s(t))])})),0),e._v(" "),r("p",[e._v(e._s(e.blurb))])])],1)}),[],!1,null,"d47ee104",null);t.default=component.exports},222:function(e,t,r){"use strict";var n=r(4),o=r(60),l=r(20),d=r(13),c=r(8),f=r(5),h=r(223),m=r(116),v=r(224),y=r(225),w=r(61),x=r(226),I=[],_=I.sort,A=f((function(){I.sort(void 0)})),C=f((function(){I.sort(null)})),k=m("sort"),P=!f((function(){if(w)return w<70;if(!(v&&v>3)){if(y)return!0;if(x)return x<603;var code,e,t,r,n="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(r=0;r<47;r++)I.push({k:e+r,v:t})}for(I.sort((function(a,b){return b.v-a.v})),r=0;r<I.length;r++)e=I[r].k.charAt(0),n.charAt(n.length-1)!==e&&(n+=e);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:A||!C||!k||!P},{sort:function(e){void 0!==e&&o(e);var t=l(this);if(P)return void 0===e?_.call(t):_.call(t,e);var r,n,f=[],m=d(t.length);for(n=0;n<m;n++)n in t&&f.push(t[n]);for(r=(f=h(f,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:c(t)>c(r)?1:-1}}(e))).length,n=0;n<r;)t[n]=f[n++];for(;n<m;)delete t[n++];return t}})},223:function(e,t){var r=Math.floor,n=function(e,t){var d=e.length,c=r(d/2);return d<8?o(e,t):l(n(e.slice(0,c),t),n(e.slice(c),t),t)},o=function(e,t){for(var element,r,n=e.length,i=1;i<n;){for(r=i,element=e[i];r&&t(e[r-1],element)>0;)e[r]=e[--r];r!==i++&&(e[r]=element)}return e},l=function(e,t,r){for(var n=e.length,o=t.length,l=0,d=0,c=[];l<n||d<o;)l<n&&d<o?c.push(r(e[l],t[d])<=0?e[l++]:t[d++]):c.push(l<n?e[l++]:t[d++]);return c};e.exports=n},224:function(e,t,r){var n=r(44).match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},225:function(e,t,r){var n=r(44);e.exports=/MSIE|Trident/.test(n)},226:function(e,t,r){var n=r(44).match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},227:function(e,t,r){var n=r(4),o=r(160).values;n({target:"Object",stat:!0},{values:function(e){return o(e)}})},228:function(e){e.exports=JSON.parse('{"2019":[{"title":"Started University at Waterloo!","blurb":"I began my first term in September! I met amazing people, played Varsity Ultimate Frisbee, and lived on my own for the first real time.","type":"Fun"},{"title":"Camp Counselour","blurb":"I worked at Camp Couchiching after being a camper there for 10 years. I got to spend lots of time with some really amazing kids.","type":"Experience"},{"title":"Shad at UCalgary","blurb":"In July I went to Calgary and worked with an amazing group, developing a product focused on environmental sustainability. I got to play a lot of Ultimate Frisbee, visit some tourist destinations, and camp! I even got to be the Valedictorian :)","type":"Fun"},{"title":"Four bit Computer","blurb":"I spent six months breadboarding, designing, and building a fully programmable four bit computer - it was the most intense hardware project I\'ve built. The final product is a printed circuit board with a 3D-printed case a laser-cut acryllic cover.","type":"Project","tags":["Electrical","PCB"]},{"title":"Student Theatre Festival","blurb":"I organized and hosted a student-run threatre festival with plays, a magician, musical acts, and improv. I have also wrote a play and directed, acted, and ran audio for the entire show. This is my favourite memory from highschool.","type":"Fun","tags":["Acting","Directing"]},{"title":"Flexible PCB Snake Game","blurb":"I designed & soldered a custom SMT PCB with an LED matrix and a solar panel. As an added challenge, the entire game was programmed in Assembly (600+ lines)","type":"Project","tags":["Electrical","PCB"]}],"2020":[{"title":"Firmware Security @ AMD","blurb":"I developed communication systems inside new APUs while maintaining security and efficiency. Although is was completely remote, I\'m still very thankful because I got to work with incredibly smart people.","type":"Experience","tags":["C","FW"]},{"title":"Passion Finding App","blurb":"I made this app to help people explore concepts and ideas in a non-linear way. Users can explore a 2D map of interests and see how they see themselves in it. This took lots of data analysis, app design, and development!","type":"Project","tags":["App Dev","Flutter","GCP"]},{"title":"AI Acceleration Engineering @ Untether AI","blurb":"My first tech job ever! I worked in Toronto for both the Hardware and Software teams; I helped build their SoC verification suite and the drivers that transfered data to and from their chip!","type":"Experience","tags":["C","Python"]},{"title":"Vibeify: An AI DJ","blurb":"","type":"Project","tags":["Web","React","AI"]}],"2021":[{"title":"Avionics Intern @ SpaceX","blurb":"I\'m worked at SpaceX this summer! I was a sensor development intern for Starship Avionics, developing precise data pipelines, demodulation algorithms, and data fitting methods.","type":"Experience","tags":["C","FPGA","DSP"]},{"title":"Summer in Los Angeles!","blurb":"My SpaceX internship was in person, so I lived in LA for the summer! I surfed, rock climbed, bungee jumped, and got to make incredible friends that I will cherish forever.","type":"Fun"},{"title":"CUTC Technology Lead","blurb":"As a part of the Canadian Undergraduate Technology Conference I lead the technology team, which provides the infrastructure to allow the conference to function. We primarily focused on registration, the website, and the blog.","type":"Experience","tags":["Web","Vue","PHP"]},{"title":"FPGA AI Processor","blurb":"I designed and implemented a verilog design that performed neural network inferences. It runs on a FPGA simulation and can run any binarized neural network. This project was a dive into Verilog and AI optimization.","type":"Project","tags":["FPGA","AI"]}]}')},229:function(e,t,r){"use strict";r(211)},230:function(e,t,r){var n=r(83)(!1);n.push([e.i,"#experience[data-v-69676ee7]{margin:0 5rem;padding:3rem}.timeline-content[data-v-69676ee7]{display:grid;align-items:center;justify-items:center;place-items:center}.year[data-v-69676ee7]{text-align:center;width:max-content;padding:.5rem;margin-bottom:.2rem;background:#fff;border:4px solid var(--main-color);border-radius:.3rem}.grid[data-v-69676ee7]{width:100%;margin-bottom:2rem;display:grid;grid-template-columns:1fr 1fr;grid-gap:1rem 2rem;gap:1rem 2rem}button[data-v-69676ee7]{background:#fffaf7;border:1px solid #f5dec1;border-radius:1rem;margin:.5rem .5rem .5rem 0}button.active[data-v-69676ee7]{background:#f5dec1}@media screen and (max-width:850px){#experience[data-v-69676ee7]{margin:0 1rem;padding:1rem}.grid[data-v-69676ee7]{grid-template-columns:1fr}}.fadeHeight-enter-active[data-v-69676ee7],.fadeHeight-leave-active[data-v-69676ee7]{transition:all .5s;max-height:100vh}.fadeHeight-enter[data-v-69676ee7],.fadeHeight-leave-to[data-v-69676ee7]{opacity:0;max-height:0;overflow:hidden;padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0}",""]),e.exports=n},242:function(e,t,r){"use strict";r.r(t);r(45),r(46),r(36),r(31),r(222),r(159),r(227);var n=r(215),o=r(228),l=r(1).a.extend({name:"Projects",components:{tile:n.default},data:function(){return{info:{},typeOptions:[],types:[]}},methods:{popPush:function(e){this.types.includes(e)?this.types=this.types.filter((function(t){return t!==e})):this.types.push(e)},includeTile:function(e){return 0==this.types.length||this.types.includes(e)},hasTiles:function(e){var t=this,r=!1;return 0==this.types.length||(this.info[e]&&this.info[e].forEach((function(e){e.type&&t.includeTile(e.type)&&(r=!0)})),r)},getSortedInfo:function(){return Object.entries(this.info).sort((function(a,b){return b[0].localeCompare(a[0])}))}},beforeMount:function(){var e=this,t=Object.entries(o);for(var i in t){var r=t[i][0],n=t[i][1];this.info[r]=n}Object.values(this.info).forEach((function(t){return t.forEach((function(t){t.type&&!e.typeOptions.includes(t.type)&&e.typeOptions.push(t.type)}))}))}}),d=(r(229),r(35)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("client-only",[r("div",{attrs:{id:"experience"}},[r("h2",[e._v("A Timeline")]),e._v(" "),r("h3",[e._v("A brief overview of what I've done")]),e._v(" "),r("div",{attrs:{id:"timeline"}},[e._l(e.typeOptions,(function(t){return r("button",{key:t,class:{active:e.types.includes(t)},on:{click:function(){return e.popPush(t)}}},[e._v(e._s(t)+"\n\t\t\t")])})),e._v(" "),e._l(e.getSortedInfo(),(function(t){return r("div",{key:t[0],staticClass:"timeline-content"},[r("transition",{attrs:{name:"fadeHeight"}},[e.hasTiles(t[0])?r("h3",{staticClass:"year"},[e._v(e._s(t[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"grid"},e._l(t[1],(function(t,i){return r("transition",{key:i,attrs:{name:"fadeHeight"}},[e.includeTile(t.type)?r("tile",e._b({},"tile",t,!1)):e._e()],1)})),1)],1)})),e._v(" "),r("p",[e._v("Click here to learn more about "),r("a",{attrs:{href:"/DER.pdf"}},[e._v("my projects")]),e._v("!")])],2)])])}),[],!1,null,"69676ee7",null);t.default=component.exports}}]);