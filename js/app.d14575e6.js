(function(t){function e(e){for(var n,i,l=e[0],s=e[1],c=e[2],u=0,f=[];u<l.length;u++)i=l[u],a[i]&&f.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"1f43":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Main")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"calendar-container"},[r("div",{staticClass:"calendar-title"},[r("div",{staticClass:"calendar-title_text"},[t._v("365存钱计划")]),r("div",{staticClass:"calendar-title_status"},[r("div",[t._v("已存："+t._s(t.savedDay)+"/365天")]),r("div",[t._v("已存："+t._s(t.savedMoney)+"/"+t._s(t.totalMoney)+"元")])])]),r("div",{staticClass:"calendar"},t._l(t.dateArr,function(e){return r("div",{key:e.key,staticClass:"date-container",on:{click:function(r){return t.onClickHeart(e)}}},[r("div",{staticClass:"date"},[r("div",{staticClass:"date-left-heart",style:e.saved?t.redHeartStyle:t.normalHeartStyle}),r("div",{staticClass:"date-top-heart",style:e.saved?t.redHeartStyle:t.normalHeartStyle}),r("div",{staticClass:"date-square",style:e.saved?t.redHeartStyle:t.normalHeartStyle},[r("div",{staticClass:"save-heart_text"},[t._v(t._s(e.index))])])])])}),0)])},l=[],s=r("f499"),c=r.n(s),d=(r("ac6a"),{name:"Main",mounted:function(){window.localStorage.getItem("dateArr")?(this.dateArr=JSON.parse(window.localStorage.getItem("dateArr")),this.totalMoney=window.localStorage.getItem("totalMoney")?window.localStorage.getItem("totalMoney"):this.calculateTotalMoney()):this.initDateArr()},data:function(){return{dateArr:[],normalHeartStyle:{backgroundColor:"white"},redHeartStyle:{backgroundColor:"#7a171c",color:"white"},borderWidth:"2px",totalMoney:0}},computed:{savedDay:function(){return this.dateArr?this.dateArr.filter(function(t){return!0===t.saved}).length:0},savedMoney:function(){var t=0;return this.dateArr&&this.dateArr.filter(function(t){return!0===t.saved}).forEach(function(e){t+=e.index}),t}},methods:{initDateArr:function(){for(var t=1;t<=365;t++)this.dateArr.push({index:t,key:"day-".concat(t),saved:!1}),this.totalMoney=this.totalMoney+t;window.localStorage.setItem("totalMoney",this.totalMoney)},onClickHeart:function(t){t.saved=!t.saved,window.localStorage.setItem("dateArr",c()(this.dateArr))},calculateTotalMoney:function(){for(var t=0,e=1;e<=365;e++)t+=e;return t}}}),u=d,f=(r("737c"),r("2877")),v=Object(f["a"])(u,i,l,!1,null,"dee06c9e",null),p=v.exports,y={name:"app",components:{Main:p}},h=y,g=(r("034f"),Object(f["a"])(h,a,o,!1,null,null,null)),m=g.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,e,r){},"737c":function(t,e,r){"use strict";var n=r("1f43"),a=r.n(n);a.a}});
//# sourceMappingURL=app.d14575e6.js.map