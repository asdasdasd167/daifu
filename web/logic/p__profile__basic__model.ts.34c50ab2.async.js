(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"5lzo":function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("p0pE")),u=a(r("d6i3")),i=r("91Sv"),s={namespace:"profileBasic",state:{basicGoods:[]},effects:{fetchBasic:u.default.mark(function e(t,r){var a,n,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,n=r.put,e.next=3,a(i.queryBasicProfile);case 3:return s=e.sent,e.next=6,n({type:"show",payload:s});case 6:case"end":return e.stop()}},e)})},reducers:{show:function(e,t){var r=t.payload;return(0,n.default)({},e,r)}}},c=s;t.default=c},"91Sv":function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.queryBasicProfile=s;var n=a(r("d6i3")),u=a(r("1l/V")),i=a(r("io9h"));function s(){return c.apply(this,arguments)}function c(){return c=(0,u.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/api/profile/basic"));case 1:case"end":return e.stop()}},e)})),c.apply(this,arguments)}}}]);