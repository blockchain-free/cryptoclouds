(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+oT+":function(e,t,n){var r=n("eVuF");function a(e,t,n,a,o,u,i){try{var c=e[u](i),l=c.value}catch(f){return void n(f)}c.done?t(l):r.resolve(l).then(a,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new r(function(r,o){var u=e.apply(t,n);function i(e){a(u,r,o,i,c,"next",e)}function c(e){a(u,r,o,i,c,"throw",e)}i(void 0)})}}},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),o=n("O40h"),u=n("Cg2A"),i=n.n(u),c=n("0iUn"),l=n("sLSF"),f=n("MI3g"),s=n("a7VT"),p=n("Tit0"),d=n("pLtp"),h=n.n(d),w=n("8Bbg"),m=n.n(w),v=n("q1tI"),b=n.n(v),g=n("JRPe"),y=n("tNGn"),x=n("L8iz"),k=Object(x.a)(y.a),_=n("9ObM").c.iframe.withConfig({displayName:"Matomo__IFrame",componentId:"sc-7hpmow-0"})(["position:absolute;left:-1000px;top:-1000px;opacity:0;height:0;width:0;"]),O=["www.blockchain.com","pit.blockchain.com","exchange.blockchain.com"],P=function(){var e=function(){return"undefined"!=typeof window&&k(window.location.host,O)},t=e()?5:4,n=e()?"https://wallet-helper.blockchain.com/wallet-helper":"https://wallet-helper.staging.blockchain.info/wallet-helper";return b.a.createElement(_,{id:"matomo-iframe",src:"".concat(n,"/matomo/#/?siteId=").concat(t)})};"undefined"!=typeof window&&window.ReactIntlLocaleData&&h()(window.ReactIntlLocaleData).forEach(function(e){Object(g.d)(window.ReactIntlLocaleData[e])});var T=function(e){function t(){return Object(c.default)(this,t),Object(f.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(p.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,r=e.locale,a=e.messages,o=i()();return b.a.createElement(w.Container,null,b.a.createElement(g.c,{initialNow:o,locale:r,messages:a,textComponent:b.a.Fragment},b.a.createElement(t,n)),"undefined"!=typeof window&&b.a.createElement(P,null))}}],[{key:"getInitialProps",value:function(){var e=Object(o.default)(a.a.mark(function e(t){var n,r,o,u,i,c,l;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,t.router,r=t.ctx,o={},!n.getInitialProps){e.next=6;break}return e.next=5,n.getInitialProps(r);case 5:o=e.sent;case 6:return u=r.req,r.res,i=u||window.__NEXT_DATA__.props.pageProps,c=i.locale,l=i.messages,e.abrupt("return",{locale:c,messages:l,pageProps:o});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(m.a);t.default=T},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("ln6h")),o=r(n("+oT+")),u=r(n("UXZV")),i=r(n("/HRN")),c=r(n("WaGi")),l=r(n("ZDA2")),f=r(n("/+P4")),s=r(n("N9n2")),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var h=p(n("q1tI")),w=d(n("17x9")),m=n("Bu4q"),v=n("20a2"),b=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,f.default)(t).apply(this,arguments))}var n;return(0,s.default)(t,e),(0,c.default)(t,[{key:"getChildContext",value:function(){return{router:v.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=x(t);return h.default.createElement(g,null,h.default.createElement(n,(0,u.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:(n=(0,o.default)(a.default.mark(function e(t){var n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,m.loadGetInitialProps(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(h.Component);b.childContextTypes={router:w.default.object},t.default=b;var g=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(0,f.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(h.Component);t.Container=g;var y=m.execOnce(function(){0});function x(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return y(),r},get pathname(){return y(),t},get asPath(){return y(),n},back:function(){y(),e.back()},push:function(t,n){return y(),e.push(t,n)},pushTo:function(t,n){y();var r=n?t:null,a=n||t;return e.push(r,a)},replace:function(t,n){return y(),e.replace(t,n)},replaceTo:function(t,n){y();var r=n?t:null,a=n||t;return e.replace(r,a)}}}t.createUrl=x},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},tNGn:function(e,t,n){"use strict";var r=n("diBh");function a(e,t){return function(e,t,n){var a,o;if("function"==typeof e.indexOf)switch(typeof t){case"number":if(0===t){for(a=1/t;n<e.length;){if(0===(o=e[n])&&1/o===a)return n;n+=1}return-1}if(t!=t){for(;n<e.length;){if("number"==typeof(o=e[n])&&o!=o)return n;n+=1}return-1}return e.indexOf(t,n);case"string":case"boolean":case"function":case"undefined":return e.indexOf(t,n);case"object":if(null===t)return e.indexOf(t,n)}for(;n<e.length;){if(Object(r.a)(e[n],t))return n;n+=1}return-1}(t,e,0)>=0}n.d(t,"a",function(){return a})}},[["GcxT",1,0]]]);