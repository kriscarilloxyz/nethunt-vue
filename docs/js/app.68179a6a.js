(function(e){function t(t){for(var r,o,l=t[0],u=t[1],c=t[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/nethunt-vue/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o=n("2877"),l={},u=Object(o["a"])(l,a,i,!1,null,null,null),c=u.exports,s=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[n("el-header",{staticStyle:{width:"100%","text-align":"center"}},[n("el-link",{attrs:{href:"https://github.com/kriscarilloxyz/nethunt-vue"}},[n("i",{staticClass:"el-icon-star-on"}),e._v(" Github ")]),n("el-link",{staticStyle:{"margin-left":"15px"},attrs:{href:"https://github.com/kriscarilloxyz"}},[e._v(" @kriscarilloxyz ")])],1),e.client?n("el-main",[n("el-row",[n("el-col",{attrs:{span:24,md:4}},[n("el-menu",e._l(e.readableFolder,(function(t){return n("el-menu-item",{key:t.id,on:{click:function(n){return e.readableFolderChange(t.id)}}},[n("i",{staticClass:"el-icon-menu"}),n("span",[e._v(e._s(t.name))])])})),1)],1),n("el-col",{attrs:{span:24,md:20}},[n("el-main",[n("el-pagination",{staticStyle:{"margin-bottom":"5px","text-align":"right"},attrs:{layout:"prev, pager, next",total:e.paginationTotal,"current-page":e.pagination},on:{"update:currentPage":function(t){e.pagination=t},"update:current-page":function(t){e.pagination=t}}}),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.tableData}},e._l(e.folderField,(function(e){return n("el-table-column",{key:e.name,attrs:{prop:e.name,label:e.name}})})),1)],1)],1)],1)],1):n("el-main",{staticStyle:{width:"520px","max-width":"100%",padding:"160px 35px 0",margin:"0 auto",overflow:"hidden"}},[n("h1",[e._v("Login")]),n("el-form",[n("el-form-item",{attrs:{label:"Username"}},[n("el-input",{model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),n("el-form-item",{attrs:{label:"API Key"}},[n("el-input",{model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("el-button",{attrs:{type:"primary"},on:{click:e.handleAuthenticate}},[e._v(" Authenticate ")])],1)],1)],1)},p=[],f=(n("d81d"),n("a434"),n("96cf"),n("1da1")),h=n("6d29"),m=n.n(h),g={name:"Home",data:function(){return{loading:!1,username:"",password:"",client:!1,readableFolder:[],folderField:[],records:[],checkList:[],tableLoading:!1,pagination:0,searchInput:""}},mounted:function(){this.handleAuthenticate()},computed:{paginationTotal:function(){return this.records.length},tableData:function(){var e=10*this.pagination||10,t=1!==this.pagination?e-10:0,n=this.records;return n.splice(t,10)}},methods:{handleAuthenticate:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,n=new m.a(e.username,e.password),t.next=5,n.authTest().then((function(t){var r=t[0].user;e.$message({message:"You are logged in as ".concat(r.personalName,"."),type:"success"}),e.client=n,e.handleUpdate()})).catch((function(t){return e.handle(t)}));case 5:e.loading=!1,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),e.handle(t.t0),e.loading=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},handleUpdate:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.readableFolderGet();case 1:case"end":return t.stop()}}),t)})))()},readableFolderGet:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.client.readableFolder().then((function(t){e.readableFolder=t})).catch((function(t){return e.handle(t)}));case 2:case"end":return t.stop()}}),t)})))()},readableFolderChange:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.folderFieldGet(e),t.findRecord(e);case 2:case"end":return n.stop()}}),n)})))()},folderFieldGet:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.client.folderField(e).then((function(e){t.folderField=e})).catch((function(e){return t.handle(e)}));case 2:case"end":return n.stop()}}),n)})))()},findRecord:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.tableLoading=!0,n.next=3,t.client.findRecord(e,{created:'"from 1 jan 2019 to today"',limit:9999}).then((function(e){t.records=e.map((function(e){return e.fields}))})).catch((function(e){return t.handle(e)}));case 3:t.tableLoading=!1;case 4:case"end":return n.stop()}}),n)})))()},handle:function(e){this.$message({message:e,type:"error"})}}},v=g,b=Object(o["a"])(v,d,p,!1,null,null,null),w=b.exports;r["default"].use(s["a"]);var x=[{path:"/",name:"Home",component:w}],y=new s["a"]({mode:"history",base:"/nethunt-vue/",routes:x}),k=y,O=n("2f62");r["default"].use(O["a"]);var _=new O["a"].Store({state:{client:!1},mutations:{UPDATE_CLIENT:function(e,t){e.client=t}},actions:{},modules:{}}),j=n("5c96"),R=n.n(j);n("0fae");r["default"].use(R.a),r["default"].config.productionTip=!1,new r["default"]({router:k,store:_,render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.68179a6a.js.map