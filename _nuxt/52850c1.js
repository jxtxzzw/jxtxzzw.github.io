(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1477:function(t,e,n){var content=n(1515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(136).default)("9e1aed62",content,!0,{sourceMap:!1})},1514:function(t,e,n){"use strict";n(1477)},1515:function(t,e,n){var r=n(135)(!1);r.push([t.i,".event[data-v-43ebc5ec]{color:#2d8cf0;font-size:16px;font-weight:700}.date[data-v-43ebc5ec]{font-weight:700}.content[data-v-43ebc5ec],.date[data-v-43ebc5ec]{padding-left:12px;margin-top:6px}.content[data-v-43ebc5ec]{color:#b6c3d7;font-size:12px}.related[data-v-43ebc5ec]{color:#8fb2f6;padding-left:9px;font-size:9px}",""]),t.exports=r},1533:function(t,e,n){"use strict";n.r(e);var r=n(198),o=(n(172),n(114),n(102),n(137),n(121),n(101),n(70),n(93),n(83),n(113),n(99),n(100),n(398)),l=n(37),c=n(73);n(199),n(200),n(115),n(139),n(140);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function h(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m="life-chart",y=new Date,w=Object(l.dateFormat)(y),_="#E0E0E0",x="".concat("#9bf89b","-").concat("#31f531","-").concat("#007500"),O="".concat("#BAE7FF","-").concat("#1890FF","-").concat("#0050B3"),D="#404040",S="#FF0000";function k(t){var e=64*t,n=.75*(document.body.clientHeight-64-24-24-24-24-24);return Math.max(e,n)}function C(t){return 128*t}function j(t){var e,n=[],r=h(t.showData);try{for(r.s();!(e=r.n()).done;){var o=e.value;n.push(f({},o))}}catch(t){r.e(t)}finally{r.f()}for(var c=0,d=n;c<d.length;c++)for(var v=d[c],j=["date","till","should"],T=["formatted_date","formatted_till","formatted_should"],i=0;i<3;i++)v[T[i]]&&(v[j[i]]=v[T[i]].split(" ")[0]);var L=t.selected;if(n[0].chart){if("TIME_BAR"===n[0].chart)return function(t,e){var n=t.$g2.Chart,r="9999-12-31 23:59:59",o="0000-01-01 00:00:00";e.forEach((function(t){var e=t.date,n=t.till;null==n&&(n=Object(l.dateFormat)(y)),e===n&&(e="".concat(e," 00:00:00"),n="".concat(n," 23:59:59")),e<r&&(r=e),n>o&&(o=n),t.range=[e,n],t.today=w,t.should&&(t.shouldRange=[n,t.should],t.should>o&&(o=t.should))}));var c=new n({container:m,autoFit:!0,height:k(e.length)}),view=c.createView({region:{start:{x:0,y:0},end:{x:1,y:1}}});return view.data(e),view.coordinate().transpose().scale(1,-1),view.scale({range:{type:"time",min:r,max:o},today:{type:"time",min:r,max:o},shouldRange:{type:"time",min:r,max:o}}),view.interval().position("event*range").color("event").animate({appear:{animation:"scale-in-x"}}),view.axis("shouldRange",!1),c.legend("shouldRange",!1),view.interval().position("event*shouldRange").color(_).animate({appear:{animation:"scale-in-x"}}).tooltip(!1),view.axis("today",!1),c.legend("today",!1),view.point().position("event*today").color("red").shape("line").size(2048).style({lineWidth:3}).tooltip(!1),c.tooltip({showMarkers:!1,title:function(t,e){var content="".concat(t,"\n\n").concat(e.content,"\n\n");return e.formatted_date&&e.formatted_till&&(content+=" ".concat(e.formatted_date," ~ ").concat(e.formatted_till," \n")),e.should&&e.formatted_date&&e.formatted_should&&(content+="(".concat(e.formatted_date," ~ ").concat(e.formatted_should,")\n")),content}}),c.removeInteraction("legend-filter"),c.render(),c}(t,n);if("CALENDAR"===n[0].chart)return function(t,e,n){var r,o=t.$g2.Chart,c=t.$g2.registerShape,d="9999-12-31";e.forEach((function(t){t.date<d&&(d=t.date),t.event===n&&(r=t)}));var f=d.substring(0,4);d="".concat(f,"-01-01");for(var h,v,w=new Date(d),_="".concat((parseInt(Object(l.dateFormat)(y).substring(0,4))+1).toString(),"-01-01"),k=new Date(_),j=r.date,T=null!==r.till&&void 0!==r.till?r.till:Object(l.dateFormat)(y),L=parseInt(Object(l.dateFormat)(y))-parseInt(d.substring(0,4))+1,I=function(t){return((arguments.length>1&&void 0!==arguments[1]?arguments[1]:y)-t)/864e5}(w,k),z=[],M=[],E={},F=new Date("".concat(d," 00:00:00 UTC")),i=0;i<I+2;i++){z.push(0);var U=Object(l.dateFormat)(F);M.push(U),E[U]=i,F.setDate(F.getDate()+1)}e.forEach((function(t){z[E[t.date]-E[d]]++;var e=t.till;null==e&&(e=Object(l.dateFormat)(y)),z[E[e]-E[d]+1]--}));for(var B=[],P=[],R=0;R<I+1;R++){var V=M[R];if(j===V&&(h=R),T===V&&(v=R),"12"===V.substring(5,7))B.push(!1),P.push(!1);else{if(R<I){var Z=M[R+1];B.push(!A(V,Z))}if(R+7-1<I){var W=M[R+7];P.push(!A(V,W))}else if(R<I){var G=M[R+1];P.push(!A(V,G))}}}for(var data=[],J=0;J<L;J++)data[J]=[];for(var N=0,Y=w.getUTCDay(),H=0;H<I;H++){var s=M[H];"01-01"===s.substring(5,10)&&(Y=new Date(s).getUTCDay());var X=parseInt(s.substring(0,4))-parseInt(f);N+=z[H];var K=Math.floor(Y%7),Q=Math.floor(Y/7);data[X].push({date:s,counts:N,month:parseInt(s.substring(5,7))-1,day:K,week:Q,bottom:B[H]&&6!==K,right:P[H],up:H-1>=0&&B[H-1]&&0!==K,left:H-7>=0&&P[H-7],selectedUp:$(H,h,v)&&(s===j||0===K)||H===v+1&&0!==K,selectedLeft:$(H,h,v)&&H<h+7||$(H-7,h,v)&&H>v,selectedBottom:$(H,h,v)&&(s===T||6===K)||H+1===h&&6!==K,selectedRight:$(H,h,v)&&H>v-7||$(H+7,h,v)&&H<h}),Y++}c("polygon","boundary-polygon",{draw:function(t,e){var n=e.addGroup(),r=t.points;return n.addShape("path",{attrs:{path:this.parsePath([["M",r[0].x,r[0].y],["L",r[1].x,r[1].y],["L",r[2].x,r[2].y],["L",r[3].x,r[3].y],["Z"]]),stroke:"#fff",lineWidth:1,fill:t.color}}),(t.data.right||t.data.selectedRight)&&n.addShape("path",{attrs:{path:this.parsePath([["M",r[2].x,r[2].y],["L",r[3].x,r[3].y]]),lineWidth:t.data.selectedRight?3:2,stroke:t.data.selectedRight?S:D}}),(t.data.bottom||t.data.selectedBottom)&&n.addShape("path",{attrs:{path:this.parsePath([["M",r[1].x,r[1].y],["L",r[2].x,r[2].y]]),lineWidth:t.data.selectedBottom?3:2,stroke:t.data.selectedBottom?S:D}}),(t.data.left||t.data.selectedLeft)&&n.addShape("path",{attrs:{path:this.parsePath([["M",r[0].x,r[0].y],["L",r[1].x,r[1].y]]),lineWidth:t.data.selectedLeft?3:2,stroke:t.data.selectedLeft?S:D}}),(t.data.up||t.data.selectedUp)&&n.addShape("path",{attrs:{path:this.parsePath([["M",r[3].x,r[3].y],["L",r[0].x,r[0].y]]),lineWidth:t.data.selectedUp?3:2,stroke:t.data.selectedUp?S:D}}),n}});for(var tt=new o({container:m,autoFit:!0,height:C(L)}),et=0;et<L;et++){var nt=tt.createView({region:{start:{x:0,y:et*(1/L)},end:{x:1,y:(et+1)*(1/L)}},padding:[10,0,10,60]});nt.data(data[et]),nt.scale({day:{type:"cat",values:[t.$t("life.sun"),t.$t("life.mon"),t.$t("life.tue"),t.$t("life.wed"),t.$t("life.thu"),t.$t("life.fri"),t.$t("life.sat")]},week:{type:"cat"},counts:{sync:!0},date:{type:"cat"}}),nt.axis("week",{position:"top",tickLine:null,line:null,label:{offset:12,style:{fontSize:12,fill:"#666",textBaseline:"top"},formatter:function(t){return""}}}),nt.annotation().text({content:(parseInt(f)+et).toString(10),offsetX:0,offsetY:-5}),nt.axis("day",{grid:null}),nt.coordinate().reflect("y"),nt.polygon().position("week*day*date").color("counts",et===L-1?x:O).shape("boundary-polygon")}return tt.tooltip({title:"date",showMarkers:!1}),tt.legend(!1),tt.interaction("element-active"),tt.render(),tt}(t,n,L)}}function A(a,b){return a.substring(5,7)===b.substring(5,7)}function $(i,t,e){return t<=i&&i<=e}function T(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return L(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var I={name:"Life",data:function(){return{showDate:l.showDate,life:o.life,keywords:"",selected:null,rawData:[],showData:[],group:[],dsu:[],selecting:!1,modalVisible:!1,oldChart:{lifeTimeBar:void 0},timezone:"Original TimeZone",timezoneOptions:["Original TimeZone","UTC","Asia/Shanghai","America/Los_Angeles","America/New_York"]}},watch:{timezone:function(t){var e,n=T(this.showData);try{for(n.s();!(e=n.n()).done;){var r=e.value;this.reformatDate(r,t)}}catch(t){n.e(t)}finally{n.f()}this.renderChart()}},mounted:function(){this.rawData=Object(r.a)(o.life),this.showData=Object(r.a)(o.life);var t,e=T(this.showData);try{for(e.s();!(t=e.n()).done;){var n=t.value;this.reformatDate(n,"Original TimeZone")}}catch(t){e.e(t)}finally{e.f()}this.grouping(),this.renderChart()},methods:{reformatDate:function(t,e){for(var n=["date","till","should"],r=["datezone","tillzone","shouldzone"],o=["formatted_date","formatted_till","formatted_should"],i=0;i<3;i++)if(t[n[i]])if("Original TimeZone"===e)t[o[i]]="".concat(t[n[i]].split(" ")[0]," ").concat(t[r[i]]);else{var l=t[n[i]],c="UTC";t[r[i]]&&(c=t[r[i]]);var d=new Date("".concat(l)).toLocaleString("en-US"),f=new Date("".concat(d," ").concat(c)),h=f.toLocaleString("en-US",{year:"numeric",timeZone:e}),v=f.toLocaleString("en-US",{month:"2-digit",timeZone:e}),m=f.toLocaleString("en-US",{day:"2-digit",timeZone:e});t[o[i]]="".concat(h,"-").concat(v,"-").concat(m," ").concat(e)}},renderChart:function(){this.oldChart.lifeTimeBar&&this.oldChart.lifeTimeBar.destroy(),this.oldChart.lifeTimeBar=this.selecting?j(this):void 0},dsu_init:function(t){this.dsu=[];var e,n=T(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;this.dsu[r]=r}}catch(t){n.e(t)}finally{n.f()}},dsu_find:function(t){return this.dsu[t]===t?t:this.dsu_find(this.dsu[t])},dsu_union:function(t,e){this.dsu[this.dsu_find(t)]=this.dsu_find(e)},dsu_same:function(t,e){return this.dsu_find(t)===this.dsu_find(e)},grouping:function(){var t=this.rawData.map((function(t){return t.event}));this.dsu_init(t);var e,n=T(this.rawData);try{for(n.s();!(e=n.n()).done;){var r=e.value;r.previous&&this.dsu_union(r.event,r.previous)}}catch(t){n.e(t)}finally{n.f()}},select:function(t){var e=this;this.selected=t,this.selecting=!0,this.modalVisible=!0,this.showData=[],this.showData=this.rawData.filter((function(n){return e.dsu_same(t,n.event)})),this.renderChart()},unselect:function(){this.selected=null,this.selecting=!1,this.modalVisible=!1,this.onSearchChange(),this.renderChart()},modalVisibleOnChange:function(t){t?this.oldChart.lifeTimeBar||(this.modalVisible=!1):this.oldChart.lifeTimeBar&&this.unselect(),window.dispatchEvent(new Event("resize"))},getAnchor:function(t){var e="".concat(document.location.origin).concat(document.location.pathname);return"/"===e[e.length-1]&&(e=e.substring(0,e.length-1)),e+="#".concat(t)},onSearchChange:function(){var t=this;this.showData=[],this.keywords?this.showData=this.rawData.filter((function(e){return!(!e.event||!e.event.includes(t.keywords))||(!(!e.content||!e.content.includes(t.keywords))||(!(!e.date||!e.date.includes(t.keywords))||!(!e.till||!e.till.includes(t.keywords))))})):this.showData=Object(r.a)(this.rawData)}}},z=(n(1514),n(134)),component=Object(z.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  "+t._s(t.$t("life.timezone"))+"\n  "),n("RadioGroup",{attrs:{type:"button","button-style":"solid"},model:{value:t.timezone,callback:function(e){t.timezone=e},expression:"timezone"}},t._l(t.timezoneOptions,(function(t){return n("Radio",{key:t,attrs:{label:t}})})),1),t._v(" "),n("Input",{style:{margin:"10px 0px 20px 0px"},attrs:{search:"",clearable:"",placeholder:t.$t("life.search")},on:{"on-change":t.onSearchChange},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),t._v(" "),n("Modal",{attrs:{"footer-hide":"",width:75},on:{"on-visible-change":t.modalVisibleOnChange},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[n("div",{staticStyle:{width:"auto"},attrs:{id:"life-chart"}})]),t._v(" "),n("Timeline",t._l(t.showData,(function(e){return n("TimelineItem",{key:e.event,attrs:{color:"green"}},[n("Icon",{attrs:{slot:"dot",type:"ios-trophy"},slot:"dot"}),t._v(" "),n("p",{staticClass:"event",attrs:{id:e.event}},[t._v("\n        "+t._s(e.event)+"\n        "),t.selecting?[n("a",{staticClass:"related",on:{click:t.unselect}},[t._v("\n            "+t._s(t.$t("life.unselect"))+"\n          ")])]:[e.previous?n("a",{staticClass:"related",attrs:{href:t.getAnchor(e.previous)}},[t._v("\n            "+t._s(t.$t("life.previous"))+"\n          ")]):t._e(),t._v(" "),n("a",{staticClass:"related",on:{click:function(n){return t.select(e.event)}}},[t._v("\n            "+t._s(t.$t("life.related"))+"\n          ")])]],2),t._v(" "),n("p",{staticClass:"date"},[n("span",[t._v(t._s(t.showDate(e)))]),t._v(" "),e.till?n("span",[e.date!==e.till?n("span",[t._v("\n            "+t._s(t.$t("life.till")+" "+t.showDate(e,"formatted_till","till"))+"\n          ")]):t._e()]):n("span",[t._v("\n          "+t._s(t.$t("life.till")+" "+t.$t("life.now"))+"\n        ")])]),t._v(" "),e.content?n("div",t._l(e.content.split("\n"),(function(r){return n("p",{key:e.content.split("\n").indexOf(r)+Math.random(),staticClass:"content"},[t._v("\n          "+t._s(r)+"\n        ")])})),0):t._e()],1)})),1)],1)}),[],!1,null,"43ebc5ec",null);e.default=component.exports}}]);