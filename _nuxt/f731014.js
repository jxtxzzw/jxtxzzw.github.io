(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1562:function(t,n,o){var content=o(1594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(149).default)("76a131c8",content,!0,{sourceMap:!1})},1593:function(t,n,o){"use strict";o(1562)},1594:function(t,n,o){var e=o(148)(!1);e.push([t.i,"tr:last-child td{padding-bottom:0}.time{color:#2d8cf0;font-size:16px}.content,.time{font-weight:700}.content{padding-left:12px;font-size:14px}",""]),t.exports=e},1624:function(t,n,o){"use strict";o.r(n);o(119),o(166),o(150),o(110);var e=o(426),r={name:"Introduction",data:function(){return{introduction:e.introduction,milestone:e.milestone,distinctPlatform:[]}},mounted:function(){var t=this;this.milestone=e.milestone.map((function(n){return t.distinctPlatform.includes(n.platform)||t.distinctPlatform.push(n.platform),n})),this.distinctPlatform.sort((function(a,b){var n=t.milestone.filter((function(t){return t.platform===a})).length;return t.milestone.filter((function(t){return t.platform===b})).length-n})),this.milestone.sort((function(a,b){return new Date(a)-new Date(b)}))},methods:{maskedContent:function(content){return null==content?this.$t("introduction.secret"):content}}},c=(o(1593),o(147)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("a-page-header",{staticStyle:{border:"1px solid rgb(235, 237, 240)"},attrs:{title:t.introduction.nick_name,"sub-title":t.introduction.motto}},[o("div",{staticClass:"content"},[o("div",{staticClass:"main"},[o("a-descriptions",{attrs:{size:"small",column:3}},[o("a-descriptions-item",{attrs:{label:t.$t("introduction.true_name")}},[t._v("\n            "+t._s(t.maskedContent(t.introduction.true_name))+"\n          ")]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.nick_name")}},[t._v("\n            "+t._s(t.maskedContent(t.introduction.nick_name))+"\n          ")]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.english_name")}},[t._v("\n            "+t._s(t.maskedContent(t.introduction.english_name))+"\n          ")]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.birthday")}},[t._v("\n            "+t._s(t.maskedContent(t.introduction.birthday))+"\n          ")]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.location")}},[t._v("\n            "+t._s(t.maskedContent(t.introduction.location))+"\n          ")]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.role")}},[t._v("\n            "+t._s(t.maskedContent(t.introduction.role))+"\n          ")]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.email")}},[t._v("\n            "+t._s(t.maskedContent(t.introduction.email))+"\n          ")]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.qq")}},[o("a-popover",{attrs:{title:t.$t("introduction.qq")}},[t.introduction.qq_qr?o("template",{slot:"content"},[o("img",{staticStyle:{"max-width":"400px"},attrs:{src:t.introduction.qq_qr}})]):t._e(),t._v("\n              "+t._s(t.maskedContent(t.introduction.qq))+"\n            ")],2)],1),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.wechat")}},[o("a-popover",{attrs:{title:t.$t("introduction.wechat")}},[t.introduction.wechat_qr?o("template",{slot:"content"},[o("img",{staticStyle:{"max-width":"400px"},attrs:{src:t.introduction.wechat_qr}})]):t._e(),t._v("\n              "+t._s(t.maskedContent(t.introduction.wechat))+"\n            ")],2)],1),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.github")}},[t.introduction.github?o("a",{attrs:{href:"https://github.com/"+t.introduction.github}},[t._v("\n              "+t._s(t.introduction.github)+"\n            ")]):o("span",[t._v("\n              "+t._s(t.$t("introduction.secret"))+"\n            ")])]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.gitlab")}},[t.introduction.gitlab?o("a",{attrs:{href:t.introduction.gitlab}},[t._v("\n              "+t._s(t.introduction.gitlab)+"\n            ")]):o("span",[t._v("\n              "+t._s(t.$t("introduction.secret"))+"\n            ")])]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.zhihu")}},[t.introduction.zhihu_href?o("a",{attrs:{href:t.introduction.zhihu_href}},[t._v("\n              "+t._s(t.introduction.zhihu)+"\n            ")]):o("span",[t._v("\n              "+t._s(t.$t("introduction.secret"))+"\n            ")])]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.zhihu_zhuanlan")}},[t.introduction.zhihu_zhuanlan_href?o("a",{attrs:{href:t.introduction.zhihu_zhuanlan_href}},[t._v("\n              "+t._s(t.introduction.zhihu_zhuanlan)+"\n            ")]):o("span",[t._v("\n              "+t._s(t.$t("introduction.secret"))+"\n            ")])]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.bilibili")}},[t.introduction.bilibili_href?o("a",{attrs:{href:t.introduction.bilibili_href}},[t._v("\n              "+t._s(t.introduction.bilibili)+"\n            ")]):o("span",[t._v("\n              "+t._s(t.$t("introduction.secret"))+"\n            ")])]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.bilibili_live")}},[t.introduction.bilibili_live?o("a",{attrs:{href:"https://live.bilibili.com/"+t.introduction.bilibili_live}},[t._v("\n              "+t._s(t.introduction.bilibili_live)+"\n            ")]):o("span",[t._v("\n              "+t._s(t.$t("introduction.secret"))+"\n            ")])]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.wechat_mp")}},[o("a-popover",{attrs:{title:t.$t("introduction.wechat_mp")}},[t.introduction.wechat_mp_qr?o("template",{slot:"content"},[o("img",{staticStyle:{"max-width":"800px"},attrs:{src:t.introduction.wechat_mp_qr}})]):t._e(),t._v("\n              "+t._s(t.maskedContent(t.introduction.wechat_mp))+"\n            ")],2)],1),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.wechat_video")}},[o("a-popover",{attrs:{title:t.$t("introduction.wechat_video")}},[t.introduction.wechat_video_qr?o("template",{slot:"content"},[o("img",{staticStyle:{"max-width":"800px"},attrs:{src:t.introduction.wechat_video_qr}})]):t._e(),t._v("\n              "+t._s(t.maskedContent(t.introduction.wechat_video))+"\n            ")],2)],1),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.youtube")}},[t._v("\n            "+t._s(t.maskedContent(t.introduction.youtube))+"\n          ")]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.facebook")}},[t._v("\n            "+t._s(t.maskedContent(t.introduction.facebook))+"\n          ")]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.twitter")}},[t._v("\n            "+t._s(t.maskedContent(t.introduction.twitter))+"\n          ")]),t._v(" "),o("a-descriptions-item",{attrs:{label:t.$t("introduction.linkedin")}},[t.introduction.linkedin?o("a",{attrs:{href:"https://www.linkedin.com/in/"+t.introduction.linkedin}},[t._v("\n              "+t._s(t.introduction.linkedin)+"\n            ")]):o("span",[t._v("\n              "+t._s(t.$t("introduction.secret"))+"\n            ")])])],1)],1)])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);