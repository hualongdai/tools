(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={"wechat-mini-program-sourcemap":0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/tools/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("34a7")},"07ab":function(e,t,r){},"0b62":function(e,t,r){"use strict";r("07ab")},"34a7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("5c96"),i=r.n(a),o=(r("0fae"),r("b429"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wechat-mini-program-sourcemap"},[r("section",{staticClass:"header"},[e._m(0),r("DocAndOtherParseLink")],1),r("div",{staticClass:"error-input-area"},[r("div",{staticClass:"file-input"},[r("el-upload",{staticClass:"upload-area",attrs:{drag:"","auto-upload":!1,limit:1,action:"./","on-change":e.handleFileChange,"on-remove":e.handleFileRemove}},[r("i",{staticClass:"el-icon-upload"}),r("div",{staticClass:"el-upload__text"},[e._v(" 请将微信小程序 Source Map 压缩包（.zip）拖到此处"),r("br"),r("br"),e._v(" 或"),r("em",[e._v("点击上传")])]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 若想上传新的 Source Map 压缩包，请先删除已有的压缩包。 ")])])],1),r("div",{staticClass:"error-content"},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:13,maxRows:13},placeholder:e.placeholder},model:{value:e.errorContent,callback:function(t){e.errorContent=t},expression:"errorContent"}})],1),r("el-button",{staticClass:"parse-btn",attrs:{type:"primary"},on:{click:e.parse}},[e._v(" 解析 ")])],1),r("div",{staticClass:"result-area"},[r("h1",{staticClass:"title"},[e._v(" 源码位置 ")]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isRequesting,expression:"isRequesting"}],staticStyle:{width:"100%","min-height":"300px"},attrs:{data:e.errorList,stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"错误列",width:"70"}}),r("el-table-column",{attrs:{prop:"errorString",label:"错误内容"}}),r("el-table-column",{attrs:{label:"source"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.getErrorSourcemapResultProperty(t.row,"source"))+" ")]}}])}),r("el-table-column",{attrs:{label:"line",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.getErrorSourcemapResultProperty(t.row,"line"))+" ")]}}])}),r("el-table-column",{attrs:{label:"column",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.getErrorSourcemapResultProperty(t.row,"column"))+" ")]}}])}),r("el-table-column",{attrs:{label:"name",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.getErrorSourcemapResultProperty(t.row,"name"))+" ")]}}])})],1)],1),r("comment-and-access-statistics")],1)}),s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"title"},[r("span",[e._v("微信小程序 Source Map 解析服务")])])}],c=(r("c975"),r("d81d"),r("fb6a"),r("d3b7"),r("3ca3"),r("498a"),r("ddb0"),r("96cf"),r("1da1")),l=r("dc74"),u=r.n(l),p=r("c4e3"),d=r.n(p),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"comment-count"},[r("div",{staticClass:"busuanzi-count-area"},[r("span",{attrs:{id:"busuanzi_container_page_pv"}},[e._v(" 本页面访问量 "),r("span",{attrs:{id:"busuanzi_value_page_pv"}}),e._v(" 次， ")]),r("span",{attrs:{id:"busuanzi_container_site_pv"}},[e._v(" 本站总访问量 "),r("span",{attrs:{id:"busuanzi_value_site_pv"}}),e._v(" 次 ")])]),r("div",{staticClass:"gitalk-container"},[r("div",{attrs:{id:"gitalk-container"}})])])}],v=r("7671"),h=r.n(v),b=(r("db28"),{name:"Comment",data:function(){return{}},mounted:function(){var e={clientID:"4c157770ee33d9d0779d",clientSecret:"14cca8b8e3183cb40972871e85a4d1dcd68c5d63",repo:"blog",owner:"wind-stone",admin:["wind-stone"],id:window.location.pathname,distractionFreeMode:!1},t=new h.a(e);t.render("gitalk-container")}}),_=b,g=(r("7fee"),r("2877")),w=Object(g["a"])(_,f,m,!1,null,null,null),y=w.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"doc-and-other-parse-link"},[r("el-link",{staticClass:"manual",attrs:{href:"https://blog.windstone.cc/articles/wechat-mini-program-sourcemap/",target:"_blank",underline:!1}},[r("span",[e._v("使用文档")]),r("i",{staticClass:"el-icon-link el-icon--right"})])],1)},S=[],x={props:{position:{type:String,default:""}}},k=x,O=(r("b56d"),Object(g["a"])(k,C,S,!1,null,"d012001e",null)),R=O.exports,P=(r("ac1f"),r("466d"),r("1276"),/\n+/),j=/https:\/\/usr(?:\/\/([^/]+))?\/app-service\.js:(\d+):(\d+)/;function M(e){var t=e.split(P);return t.map((function(e){var t=e.match(j);return t?{canMap:!0,errorString:e,file:"".concat(t[1]||"__APP__","/app-service.map.map"),fileFromCI:"/".concat(t[1]||"__APP__","/app-service.js.map"),line:+t[2],column:+t[3]}:{canMap:!1,errorString:e,file:"",fileFromCI:"",line:"",column:""}}))}u.a.SourceMapConsumer.initialize({"lib/mappings.wasm":"https://unpkg.com/source-map@0.7.3/lib/mappings.wasm"});var F={components:{DocAndOtherParseLink:R,CommentAndAccessStatistics:y},data:function(){return{zipFile:null,errorContent:"",isRequesting:!1,errorList:[],placeholder:"请将错误内容放在此处，注意分行，以便自动识别所需的 Source Map 文件"}},methods:{handleFileChange:function(e){this.zipFile=e},handleFileRemove:function(){this.zipFile=null,this.errorList=[]},parse:function(){var e=this;if(this.zipFile)if(this.errorContent.trim()){this.errorList=[],this.isRequesting=!0;var t=M(this.errorContent);d.a.loadAsync(this.zipFile.raw).then(function(){var r=Object(c["a"])(regeneratorRuntime.mark((function r(n){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Promise.all(t.map(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.canMap){e.next=5;break}if(r=n.files[t.file]||n.files[t.fileFromCI],r){e.next=4;break}return e.abrupt("return",t);case 4:return e.abrupt("return",r.async("text").then(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(r){var n,a,i,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=r,a=n.indexOf(',\n"sourcesContent"'),a>-1&&(n="".concat(n.slice(0,a),"}")),i=JSON.parse(n),e.next=6,new u.a.SourceMapConsumer(i);case 6:return o=e.sent,s=o.originalPositionFor({line:t.line,column:t.column}),o.destroy(),t.result=s,e.abrupt("return",t);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error("解析 ".concat(t.file||t.fileFromCI," 文件时出错"),e),t})));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).catch((function(e){console.error("解析 Source Map 文件时出错",e)})).finally((function(){e.isRequesting=!1}));case 2:a=r.sent,e.errorList=a;case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()).catch((function(t){e.isRequesting=!1,console.error("解压 Source Map 压缩包时出错",t)}))}else this.$message({message:"请输入错误内容",type:"warning"});else this.$message({message:"请上传 source map 压缩包",type:"warning"})},getErrorSourcemapResultProperty:function(e,t){return e.result&&e.result[t]||"-"}}},z=F,E=(r("0b62"),Object(g["a"])(z,o,s,!1,null,"00f7c1cb",null)),$=E.exports;n["default"].use(i.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e($)}}).$mount("#app")},"7fee":function(e,t,r){"use strict";r("f5eb")},b56d:function(e,t,r){"use strict";r("f157")},f157:function(e,t,r){},f5eb:function(e,t,r){}});
//# sourceMappingURL=wechat-mini-program-sourcemap.a55bfd6d.js.map