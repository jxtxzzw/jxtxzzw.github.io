(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1597:function(e,t,n){"use strict";n.r(t);n(109),n(122),n(86),n(103),n(134),n(120),n(121);function r(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,d=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){d=!0,c=e},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw c}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function c(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o={},c=r(e);try{for(c.s();!(t=c.n()).done;){var l=t.value,d=l.year,f=parseFloat(l.amount),v=l.type;if(d in o||(o[d]={}),v in o[d]||(o[d][v]=n?{}:0),n){var h=l.currency,m=parseFloat(l.currency_weight);h in o[d][v]||(o[d][v][h]={amount:0,weightedAmount:0}),o[d][v][h].amount+=f,o[d][v][h].weightedAmount+=f*m}else o[d][v]+=f}}catch(e){c.e(e)}finally{c.f()}var data=[];for(var y in o)for(var F in o[y])if(n)for(var w in o[y][F])data.push({year:y,type:F,currency:w,amount:o[y][F][w].amount,weightedAmount:o[y][F][w].weightedAmount});else data.push({year:y,type:F,amount:o[y][F]});return data}function l(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"container",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:["#FF6B3B","#5B8FF9","#FFC100","#61DDAA","#76523B","#0E8E89","#E19348","#F383A2","#247FEA"],l=arguments.length>4&&void 0!==arguments[4]&&arguments[4],d=e.$g2.Chart,data=c(t,l),f=new d({container:r,autoFit:!0,height:500});f.data(data),f.option("slider",{height:30,trendCfg:{smooth:!0,isArea:!0}}),f.scale(l?"weightedAmount":"amount",{alias:"金额",formatter:function(e){return e=parseFloat(e).toFixed(2)}}),f.axis("year",{tickLine:null}),f.axis(l?"weightedAmount":"amount",{title:{offset:80,style:{fill:"#aaaaaa"}}}),f.tooltip({shared:!1,showMarkers:!0,showTitle:!0}),f.interaction("active-region"),f.interaction("element-highlight-by-color"),f.interaction("legend-highlight"),f.interaction("axis-label-highlight"),n=l?[{type:"dodge",dodgeBy:"currency",marginRatio:0},{type:"stack"}]:"stack",f.interval().adjust(n).position("year*".concat(l?"weightedAmount":"amount")).color("type",o).label("value",(function(){return{position:"middle",offset:0,content:function(e){var t=parseFloat(e.amount).toFixed(2);return l?"".concat(e.currency," ").concat(t):t},style:{stroke:"#fff"}}})),f.render()}function d(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o={},c=0,l=r(e);try{for(l.s();!(t=l.n()).done;){var d=t.value,f=d.category,v=parseFloat(d.amount);if(f in o||(o[f]=n?{}:0),!(v<=0))if(n){var h=d.currency,m=parseFloat(d.currency_weight);h in o[f]||(o[f][h]={amount:0,weightedAmount:0}),o[f][h].amount+=v,o[f][h].weightedAmount+=v*m}else o[f]+=v,c+=v}}catch(e){l.e(e)}finally{l.f()}var data=[];for(var y in o)if(n)for(var F in o[y]){var w=o[y][F].amount,A=o[y][F].weightedAmount;w>0&&data.push({category:y,amount:w,weightedAmount:A,currency:"".concat(y," - ").concat(F)})}else{var _=o[y];_>0&&data.push({category:y,amount:_,percent:_/c})}return data}function f(e,t){var n=e.$g2.Chart,o=e.$dataset.DataView,c=function(e){var t,n={},o=r(e);try{for(o.s();!(t=o.n()).done;){var c=t.value,l=parseFloat(c.amount);void 0!==c.currency_weight&&null!==c.currency_weight&&(l*=parseFloat(c.currency_weight));var d=c.type,f=c.platform;f in n||(n[f]={},n[f].value=0,n[f].children={}),n[f].value+=l,d in n[f].children||(n[f].children[d]=0),n[f].children[d]+=l}}catch(e){o.e(e)}finally{o.f()}var data=[];for(var v in n){var h={name:v,brand:v,value:n[v].value,children:[]};for(var m in n[v].children)h.children.push({name:v+" - "+m,value:n[v].children[m]});data.push(h)}return data.sort((function(a,b){return b.value-a.value})),data}(t);c.forEach((function(td){td.value=0}));var data={name:"root",children:c},l=new o;l.source(data,{type:"hierarchy"}).transform({field:"value",type:"hierarchy.treemap",tile:"treemapResquarify",as:["x","y"]});var d,f=[],v=r(l.getAllNodes());try{for(v.s();!(d=v.n()).done;){var h=d.value;if(!h.children){var m={name:h.data.name,x:h.x,y:h.y,depth:h.depth,value:h.value};!h.data.brand&&h.parent?m.brand=h.parent.data.brand:m.brand=h.data.brand,f.push(m)}}}catch(e){v.e(e)}finally{v.f()}var y=new n({container:"advanced-platform",autoFit:!0,height:500});y.coordinate().scale(1,-1),y.data(f),y.axis(!1),y.legend({position:"bottom"}),y.tooltip({showTitle:!1,showMarkers:!1}),y.polygon().position("x*y").color("brand").tooltip("name*value",(function(e,t){return{name:e,value:parseFloat(t).toFixed(2)}})).style({lineWidth:1,stroke:"#fff"}).label("name",{offset:0,style:{textBaseline:"middle",fill:"#000",shadowBlur:10,shadowColor:"#fff"},layout:{type:"limit-in-shape"}}),y.interaction("element-active"),y.render()}var v=n(425),h={name:"Income",mounted:function(){l(this,v.income,"basic-year",["#FF6B3B","#5B8FF9","#FFC100","#61DDAA","#76523B","#0E8E89","#E19348","#F383A2","#247FEA"],!0),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e.$g2.Chart,o=e.$dataset.DataView,data=d(t,n),c=new o;c.source(data).transform({type:"percent",field:n?"weightedAmount":"amount",dimension:"category",as:"percent"});var l=new r({container:"basic-category",autoFit:!0,height:500});if(l.data(c.rows),l.scale({percent:{formatter:function(e){return parseFloat(100*e).toFixed(2)+"%"}}}),l.coordinate("theta",{radius:.5}),l.legend(!1),l.tooltip({showTitle:!0,showMarkers:!0}),l.interval().adjust("stack").position("percent").color("category").label("percent",{content:function(data){return"".concat(data.category,": ").concat(parseFloat(100*data.percent).toFixed(2),"%")}}),n){var f=l.createView(),v=new o;v.source(data).transform({type:"percent",field:n?"weightedAmount":"amount",dimension:"currency",as:"percent"}),f.data(v.rows),f.scale({percent:{formatter:function(e){return parseFloat(100*e).toFixed(2)+"%"}}}),f.coordinate("theta",{innerRadius:.5/.75,radius:.75}),f.interval().adjust("stack").position("percent").color("currency",["#BAE7FF","#7FC9FE","#71E3E3","#ABF5F5","#8EE0A1","#BAF5C4"]).label("currency").tooltip("currency*percent",(function(e,t){return{name:e,value:t=(100*t).toFixed(2)+"%"}})).style({lineWidth:1,stroke:"#fff"})}l.interaction("element-active"),l.render()}(this,v.income,!0),l(this,v.advancedIncome,"advanced-year",["#025DF4","#DB6BCF","#2498D1","#bbbde6","#4045b2","#21A97A","#FF745A","#007E99","#FFA8A8","#2391FF"],!0),f(this,v.advancedIncome),window.dispatchEvent(new Event("resize"))}},m=h,y=n(147),component=Object(y.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Divider",[e._v(e._s(e.$t("income.basic-year")))]),e._v(" "),n("div",{attrs:{id:"basic-year"}}),e._v(" "),n("Divider",[e._v(e._s(e.$t("income.basic-category")))]),e._v(" "),n("div",{attrs:{id:"basic-category"}}),e._v(" "),n("Divider",[e._v(e._s(e.$t("income.advanced-year")))]),e._v(" "),n("div",{attrs:{id:"advanced-year"}}),e._v(" "),n("Divider",[e._v(e._s(e.$t("income.advanced-platform")))]),e._v(" "),n("div",{attrs:{id:"advanced-platform"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);