!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return e&&e.constructor===Symbol?"symbol":typeof e}function o(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?a(e):t}function l(e){if(Array.isArray(e))return e}function c(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function f(e,t){return l(e)||c(e)||d(e,t)||u()}function v(e){if(Array.isArray(e))return h(e)}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(e){return v(e)||c(e)||d(e)||p()}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function _(e){return y(e)}function b(e){var t=m();return function(){var n,r=_(e);if(t){var i=_(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)}}var q,A=window,$=A.trustedTypes,k=$?$.createPolicy("lit-html",{createHTML:function(e){return e}}):void 0,w="lit$".concat((Math.random()+"").slice(9),"$"),S="?"+w,x="<".concat(S,">"),I=document,P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return I.createComment(e)},E=function(e){return null===e||"object"!=typeof e&&"function"!=typeof e},C=Array.isArray,B=function(e){return C(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator])},H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,N=/>/g,T=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),j=/'/g,O=/"/g,M=/^(?:script|style|textarea|title)$/i,L=function(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return{_$litType$:e,strings:t,values:r}}},U=L(1),D=(L(2),Symbol.for("lit-noChange")),z=Symbol.for("lit-nothing"),W=new WeakMap,F=I.createTreeWalker(I,129,null,!1),Z=function(e,t){for(var n,r=e.length-1,i=[],a=2===t?"<svg>":"",s=H,o=0;o<r;o++){for(var l=e[o],c=void 0,u=void 0,h=-1,d=0;d<l.length&&(s.lastIndex=d,null!==(u=s.exec(l)));)d=s.lastIndex,s===H?"!--"===u[1]?s=R:void 0!==u[1]?s=N:void 0!==u[2]?(M.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=T):void 0!==u[3]&&(s=T):s===T?">"===u[0]?(s=null!=n?n:H,h=-1):void 0===u[1]?h=-2:(h=s.lastIndex-u[2].length,c=u[1],s=void 0===u[3]?T:'"'===u[3]?O:j):s===O||s===j?s=T:s===R||s===N?s=H:(s=T,n=void 0);var f=s===T&&e[o+1].startsWith("/>")?" ":"";a+=s===H?l+x:h>=0?(i.push(c),l.slice(0,h)+"$lit$"+l.slice(h)+w+f):l+w+(-2===h?(i.push(void 0),o):f)}var v=a+(e[r]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==k?k.createHTML(v):v,i]},G=function(){"use strict";function t(n,r){var i,a=n.strings,s=n._$litType$;e(this,t),this.parts=[];var o=0,l=0,c=a.length-1,u=this.parts,h=f(Z(a,s),2),d=h[0],v=h[1];if(this.el=t.createElement(d,r),F.currentNode=this.el.content,2===s){var p,m=this.el.content,y=m.firstChild;y.remove(),(p=m).append.apply(p,g(y.childNodes))}for(;null!==(i=F.nextNode())&&u.length<c;){if(1===i.nodeType){if(i.hasAttributes()){var _=[],b=!0,q=!1,A=void 0;try{for(var k,x=i.getAttributeNames()[Symbol.iterator]();!(b=(k=x.next()).done);b=!0){var I=k.value;if(I.endsWith("$lit$")||I.startsWith(w)){var E=v[l++];if(_.push(I),void 0!==E){var C=i.getAttribute(E.toLowerCase()+"$lit$").split(w),B=/([.?@])?(.*)/.exec(E);u.push({type:1,index:o,name:B[2],strings:C,ctor:"."===B[1]?K:"?"===B[1]?ee:"@"===B[1]?te:J})}else u.push({type:6,index:o})}}}catch(e){q=!0,A=e}finally{try{b||null==x.return||x.return()}finally{if(q)throw A}}var H=!0,R=!1,N=void 0;try{for(var T,j=_[Symbol.iterator]();!(H=(T=j.next()).done);H=!0){var O=T.value;i.removeAttribute(O)}}catch(e){R=!0,N=e}finally{try{H||null==j.return||j.return()}finally{if(R)throw N}}}if(M.test(i.tagName)){var L=i.textContent.split(w),U=L.length-1;if(U>0){i.textContent=$?$.emptyScript:"";for(var D=0;D<U;D++)i.append(L[D],P()),F.nextNode(),u.push({type:2,index:++o});i.append(L[U],P())}}}else if(8===i.nodeType)if(i.data===S)u.push({type:2,index:o});else for(var z=-1;-1!==(z=i.data.indexOf(w,z+1));)u.push({type:7,index:o}),z+=w.length-1;o++}}return n(t,null,[{key:"createElement",value:function(e,t){var n=I.createElement("template");return n.innerHTML=e,n}}]),t}();function Q(e,t){var n,r,i,a,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=arguments.length>3?arguments[3]:void 0;if(t===D)return t;var l=void 0!==o?null===(n=s._$Co)||void 0===n?void 0:n[o]:s._$Cl,c=E(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(e))._$AT(e,s,o),void 0!==o?(null!==(i=(a=s)._$Co)&&void 0!==i?i:a._$Co=[])[o]=l:s._$Cl=l),void 0!==l&&(t=Q(e,l._$AS(e,t.values),l,o)),t}var V=function(){"use strict";function t(n,r){e(this,t),this.u=[],this._$AN=void 0,this._$AD=n,this._$AM=r}return n(t,[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"v",value:function(e){var t,n=this._$AD,r=n.el.content,i=n.parts,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:I).importNode(r,!0);F.currentNode=a;for(var s=F.nextNode(),o=0,l=0,c=i[0];void 0!==c;){if(o===c.index){var u=void 0;2===c.type?u=new Y(s,s.nextSibling,this,e):1===c.type?u=new c.ctor(s,c.name,c.strings,this,e):6===c.type&&(u=new ne(s,this,e)),this.u.push(u),c=i[++l]}o!==(null==c?void 0:c.index)&&(s=F.nextNode(),o++)}return a}},{key:"p",value:function(e){var t=0,n=!0,r=!1,i=void 0;try{for(var a,s=this.u[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=a.value;void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}}}]),t}(),Y=function(){"use strict";function t(n,r,i,a){var s;e(this,t),this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=n,this._$AB=r,this._$AM=i,this.options=a,this._$Cm=null===(s=null==a?void 0:a.isConnected)||void 0===s||s}return n(t,[{key:"_$AU",get:function(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}},{key:"parentNode",get:function(){var e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(e){e=Q(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),E(e)?e===z||null==e||""===e?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==D&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):B(e)?this.k(e):this.g(e)}},{key:"O",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._$AB;return this._$AA.parentNode.insertBefore(e,t)}},{key:"T",value:function(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}},{key:"g",value:function(e){this._$AH!==z&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}},{key:"$",value:function(e){var t,n=e.values,r=e._$litType$,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=G.createElement(r.h,this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.p(n);else{var a=new V(i,this),s=a.v(this.options);a.p(n),this.T(s),this._$AH=a}}},{key:"_$AC",value:function(e){var t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new G(e)),t}},{key:"k",value:function(e){C(this._$AH)||(this._$AH=[],this._$AR());var n,r=this._$AH,i=0,a=!0,s=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var u=l.value;i===r.length?r.push(n=new t(this.O(P()),this.O(P()),this,this.options)):n=r[i],n._$AI(u),i++}}catch(e){s=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(s)throw o}}i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}},{key:"_$AR",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,n=arguments.length>1?arguments[1]:void 0;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,n);t&&t!==this._$AB;){var r=t.nextSibling;t.remove(),t=r}}},{key:"setConnected",value:function(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}]),t}(),J=function(){"use strict";function t(n,r,i,a,s){e(this,t),this.type=1,this._$AH=z,this._$AN=void 0,this.element=n,this.name=r,this._$AM=a,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}return n(t,[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=this.strings,a=!1;if(void 0===i)e=Q(this,e,t,0),(a=!E(e)||e!==this._$AH&&e!==D)&&(this._$AH=e);else{var s,o,l=e;for(e=i[0],s=0;s<i.length-1;s++)(o=Q(this,l[n+s],t,s))===D&&(o=this._$AH[s]),a||(a=!E(o)||o!==this._$AH[s]),o===z?e=z:e!==z&&(e+=(null!=o?o:"")+i[s+1]),this._$AH[s]=o}a&&!r&&this.j(e)}},{key:"j",value:function(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}]),t}(),K=function(t){"use strict";i(a,t);var r=b(a);function a(){var t;return e(this,a),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).type=3,o(t)}return n(a,[{key:"j",value:function(e){this.element[this.name]=e===z?void 0:e}}]),a}(J),X=$?$.emptyScript:"",ee=function(t){"use strict";i(a,t);var r=b(a);function a(){var t;return e(this,a),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).type=4,o(t)}return n(a,[{key:"j",value:function(e){e&&e!==z?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}]),a}(J),te=function(t){"use strict";i(a,t);var r=b(a);function a(t,n,i,s,l){var c;return e(this,a),(c=r.call(this,t,n,i,s,l)).type=5,o(c)}return n(a,[{key:"_$AI",value:function(e){var t;if((e=null!==(t=Q(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:z)!==D){var n=this._$AH,r=e===z&&n!==z||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==z&&(n===z||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}}},{key:"handleEvent",value:function(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}]),a}(J),ne=function(){"use strict";function t(n,r,i){e(this,t),this.element=n,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}return n(t,[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(e){Q(this,e)}}]),t}(),re=A.litHtmlPolyfillSupport;null==re||re(G,Y),(null!==(q=A.litHtmlVersions)&&void 0!==q?q:A.litHtmlVersions=[]).push("2.6.1");var ie=function(e,t,n){var r,i,a=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:t,s=a._$litPart$;if(void 0===s){var o=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:null;a._$litPart$=s=new Y(t.insertBefore(P(),o),o,void 0,null!=n?n:{})}return s._$AI(e),s};function ae(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function se(){var e=ae(['\n                    <article class="qg-card qg-card__light-theme qg-card__clickable">\n                        <div class="content">\n                            <div class="details">\n                                <h2 class="qg-card__title">\n                                    <a href="https://find.search.qld.gov.au','" class="stretched-link">','</a>\n                                </h2>\n                                <div class="qg-search-results__results-list">\n                                    <p class="description">','</p>\n                                    <p class="qg-search-results__url">',"</p>\n                                </div>\n                            </div>\n                        </div>\n                    </article>"]);return se=function(){return e},e}function oe(){var e=ae(['<h2 class="search-results-summary">Featured results</h2>\n    ',"\n  "]);return oe=function(){return e},e}function le(e){return U(oe(),e.map((function(e,t){return U(se(),e.linkUrl,e.titleHtml,e.descriptionHtml,e.displayUrl)})))}var ce=function(){var e=new URL(window.location.href),t=new URLSearchParams(e.search),n=function(e){return null==e?void 0:e.replace(/[\\#+()$~%*?<>{}]/g,"")};return{query:n((t.get("query")||"").replace(/\%2F/g,"/")),profile:n(t.get("profile"))||"",label:n(t.get("label"))||"",filter:n(t.get("filter"))||"",numRanks:parseInt(t.get("num_ranks"))||0,startRank:parseInt(t.get("start_rank"))||1,collection:n(t.get("collection"))||"",scope:"disaster.qld.gov.au",activePage:parseInt(t.get("page"))||1}};function ue(e,t,n,r,i,a,s){try{var o=e[a](s),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(r,i)}function he(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){ue(a,r,i,s,o,"next",e)}function o(e){ue(a,r,i,s,o,"throw",e)}s(void 0)}))}}function de(e,t){var n,r,i,a,s=function(e){return function(t){return o([e,t])}},o=function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(l=0)),l;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return l.label++,{value:s[1],done:!1};case 5:l.label++,r=s[1],s=[0];continue;case 7:s=l.ops.pop(),l.trys.pop();continue;default:if(!(i=l.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){l=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){l.label=s[1];break}if(6===s[0]&&l.label<i[1]){l.label=i[1],i=s;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(s);break}i[2]&&l.ops.pop(),l.trys.pop();continue}s=t.call(e,l)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}},l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a}Object.create;Object.create;var fe,ve="https://find.search.qld.gov.au/s/search.json",pe=(fe=he((function(e){return de(this,(function(t){switch(t.label){case 0:return[4,fetch("".concat(ve+"?"+e))];case 1:return[4,t.sent().json()];case 2:return[2,t.sent()]}}))})),function(e){return fe.apply(this,arguments)});function ge(){var e=ae(['<a class="page-link"  @click="','" href="',"&page=","&start_rank=",'"><span aria-hidden="true">«</span> Previous</a>']);return ge=function(){return e},e}function me(){var e=ae(['<li class="page-item ','"><a class="page-link" @click="','"  href=',">","</a></li>"]);return me=function(){return e},e}function ye(){var e=ae(['<a class="page-link" @click="','" href="',"&page=","&start_rank=",'">Next<span aria-hidden="true">&nbsp;»</span></a>']);return ye=function(){return e},e}function _e(){var e=ae(['\n  <div class="pagination-container">\n        <ul class="pagination">\n            <li class="page-item">\n                ',"\n            </li>\n            ",'\n            <li class="page-item">\n                ',"\n            </li>\n            \n        </ul>\n    </div>\n  "]);return _e=function(){return e},e}function be(e,t){var n,r,i,a,s=e.resultPacket.resultsSummary.totalMatching,o=ce(),l=Math.ceil(s/10),c=Math.floor(parseInt(String(o.startRank/10))/10),u="?query=".concat(o.query,"&num_ranks=").concat(o.numRanks||10,"&tiers=10&collection=").concat(o.collection,"&profile=").concat(o.profile,"&second_profile=&scope=").concat(o.scope,"&label="),h=function(e){var t,r;e.preventDefault(),clearTimeout(n),null===(t=document.querySelector(".qg-site-search__component"))||void 0===t||t.scrollIntoView({behavior:"smooth"}),(null===(r=e.target)||void 0===r?void 0:r.href)&&(n=setTimeout((function(){var t,n;history.pushState({},"",e.target.href),pe(null===(t=e.target)||void 0===t||null===(n=t.href)||void 0===n?void 0:n.split("?")[1]).then((function(e){ie(Ee(null==e?void 0:e.response,o),document.getElementById("qg-search-results__container"))}))})))};if(l>1)return U(_e(),o.startRank>1?U(ge(),h,u,o.activePage-1,o.startRank-10):"",(r=10*c+1,a=10*c+10,i=l>a?a:Math.ceil(l),Array(i-r+1).fill(r).map((function(e,t){return r+t}))).map((function(e){var t=u+"&page=".concat(e,"&start_rank=").concat((o.numRanks||10)*(e-1)+1),n=o.activePage===e?"active":"";return U(me(),n,h,t,e)})),l>o.activePage?U(ye(),h,u,o.activePage+1,o.startRank+10):"")}var qe=function(e){var t=e.toString().split("."),n=t[0],r=t[1];return n.replace(/\B(?=(\d{3})+(?!\d))/g,",")+(r?"."+r:"")},Ae=function(e){var t=new Date(e),n=t.toLocaleString("en-AU",{month:"long"}),r=t.getFullYear();return t.getDate()+" "+n+" "+r},$e=function(e){return Math.floor(e/1024)+"k"};function ke(){var e=ae(["<span>&nbsp;-&nbsp;","</span>"]);return ke=function(){return e},e}function we(){var e=ae(["<span>&nbsp;-&nbsp;","</span>"]);return we=function(){return e},e}function Se(){var e=ae(['\n                <li class="qg-search-results__results-list-item">\n                    <h3>\n                        <a href="https://find.search.qld.gov.au','">','</a>\n                    </h3>\n                    <ul class="qg-search-results__results-list">\n                        <li class="description"> ','</li>\n                        <li class="meta">\n                            <span class="qg-search-results__url">',"</span>\n                            ","\n                            ","\n                        </li>\n                    </ul>\n                </li>"]);return Se=function(){return e},e}function xe(){var e=ae(['<div id="qg-search-results">\n        <h2 class="qg-search-results__summary">Search results for \'','\'</h2>\n        <span class="qg-search-results__results-count">Showing results '," - ",' of <span class="qg-search-results__results-total">','</span></span>\n        <ul class="qg-search-results__results-list">\n            ',"\n        </ul>\n    </div>\n  "]);return xe=function(){return e},e}function Ie(e){var t=null==e?void 0:e.resultsSummary,n=t.currStart,r=t.currEnd,i=t.totalMatching,a=null==e?void 0:e.query;return U(xe(),a,n,r,qe(i),e.results.map((function(e){return U(Se(),e.clickTrackingUrl,e.title.replace("| Queensland Government",""),e.metaData.C,e.indexUrl,e.fileSize?U(ke(),$e(e.fileSize)):"",e.date?U(we(),Ae(e.date)):"")})))}function Pe(){var e=ae(["\n        ","\n        ","\n        ","\n    "]);return Pe=function(){return e},e}function Ee(e,t){var n=e.resultPacket,r=e.curator.exhibits;return U(Pe(),r.length>0?le(r):"",Ie(n),be(e))}function Ce(){var e=ae(["Results from <strong>","</strong>"]);return Ce=function(){return e},e}function Be(){var e=ae(['<div class="qg-filter-by-results">\n              <p class="qg-filter-by-results__title">Filter results by</p>\n              <form class="form qg-forms-v2 qg-filter-by-results__form">\n              <ol class="questions pt-2">\n                <li>\n                  <fieldset>\n                    <legend>\n                      <span class="label">Content type</span>\n                    </legend>\n                    <ol class="choices qg-forms-v2__radio">\n                      <li>\n                        <input checked name="filterBy" id="customOption" type="radio" value="custom"\n                               data-scope="','" \n                               data-profile="','"\n                               data-label="','" @click="','" />\n                        <label for="customOption">','</label>\n                      </li>\n                      <li>\n                        <input name="filterBy" id="qld" type="radio" value="qld" data-profile=\'qld\' data-scope=\'\' @click="','" ?checked=','/>\n                        <label for="qld">all Queensland Government</label>\n                      </li>\n                    </ol>\n                  </fieldset>\n                </li>\n              </ol>\n            </form>\n            <button type="button" class="qg-btn qg-btn__filter btn-primary mb-2" @click="','">Apply filters</button>\n           </div>']);return Be=function(){return e},e}var He=function(){"use strict";function t(){e(this,t),this.urlParameter=ce(),this.setSessionStorage()}return n(t,[{key:"setSessionStorage",value:function(){var e=this.urlParameter.profile,t=this.urlParameter.scope,n=this.urlParameter.label;e&&("qld"!==e||t)&&(sessionStorage.setItem("fcProfile",e),sessionStorage.setItem("fcScope",t)),n&&sessionStorage.setItem("fcLabel",n)}},{key:"filterResultsTemplate",value:function(){var e,t,n,r,i,a,s=this.urlParameter.profile;(this.urlParameter.filter||s&&"qld"!==s||this.urlParameter.scope)&&ie((e="",ce(),t=sessionStorage.getItem("fcLabel"),n=sessionStorage.getItem("fcProfile"),r=sessionStorage.getItem("fcScope"),i=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},a=function(e){var t=e.target.value;switch(t){case"qld":case"custom":sessionStorage.setItem("rcSelectedRadiobutton",t)}},t?e=i(t):r?e=U(Ce(),r):n&&(e=i(n)),window.addEventListener("load",(function(e){var t=document.querySelector(".qg-btn__filter");null==t||t.addEventListener("click",(function(e){})),null==t||t.dispatchEvent(new Event("click"))})),U(Be(),r,n,t,a,e,a,"qld"===sessionStorage.getItem("rcSelectedRadiobutton"),(function(e){e.preventDefault();var t=new URLSearchParams(location.search),n=document.querySelector('input[name="filterBy"]:checked');t.set("scope",(null==n?void 0:n.getAttribute("data-scope"))||""),t.set("profile",(null==n?void 0:n.getAttribute("data-profile"))||""),t.set("page","1"),t.set("start_rank","1"),history.pushState({},"","?".concat(t.toString())),pe(t.toString()).then((function(e){ie(Ee(null==e?void 0:e.response),document.getElementById("qg-search-results__container"))}))}))),document.getElementById("qg-filter-by-results"))}}]),t}();function Re(){var e=ae(['\n        <div class="alert alert-warning" role="alert">\n            <h2><i class="fa fa-exclamation-triangle"></i>',"</h2>\n        </div>"]);return Re=function(){return e},e}function Ne(e){return U(Re(),e)}function Te(){var e=ae(['<a @click="','" href="','&start_rank=1" class="qg-btn btn-outline-dark m-1">',"</a>"]);return Te=function(){return e},e}function je(){var e=ae([' <p class="related-search__title">Related search</p>\n        <section class="related-search__tags test">\n            ',"\n        </section>"]);return je=function(){return e},e}function Oe(e){if(e){var t,n,r=e.categories;if("topic"===(null===(t=r[0])||void 0===t?void 0:t.name))return U(je(),null===(n=r[0])||void 0===n?void 0:n.clusters.map((function(e){return U(Te(),(function(e){return function(e){e.preventDefault();var t=e.target.href,n=e.target.textContent;ce(),document.querySelector(".qg-site-search__component .qg-search-site__input").value=n,history.pushState({},"","".concat(t)),pe(t).then((function(e){var t,n=null==e||null===(t=e.response)||void 0===t?void 0:t.resultPacket,r=n.contextualNavigation,i=n.results;(null==i?void 0:i.length)?(ie(Ee(null==e?void 0:e.response),document.getElementById("qg-search-results__container")),ie(Oe(r),document.getElementById("related-search__tags"))):(ie(Ne("No results found"),document.getElementById("qg-search-results__container")),ie("",document.getElementById("related-search__tags")))}))}(e)}),e.href,e.query)})))}}function Me(){var e=ae(['\n        <form action="#" role="search" class="qg-site-search__form qg-site-search__component qg-search-form qg-site-search__multiple-forms" data-suggestions="https://find.search.qld.gov.au/s/suggest.json?collection=qld-gov&fmt=json%2B%2B&alpha=0.5&profile=qld&scope=disaster.qld.gov.au" data-results-url="https://find.search.qld.gov.au/s/search.json?collection=qld-gov&profile=qld&scope=disaster.qld.gov.au&smeta_sfinder_sand=yes">\n                    <div class="input-group">\n                        <label for="qg-search-query-sm" class="qg-visually-hidden">Search Queensland Government</label>\n                        <input type="text" name="query" id="qg-search-query-sm"  class="form-control qg-search-site__input" autocomplete="off" placeholder="Search website" tabindex="0" aria-required="true" aria-expanded="false" value="','" @keydown="','" @click="','"/>\n                        <svg class="qg-search__icon d-none d-md-block d-lg-block" width="512px" height="512px" viewBox="0 0 512 512">\n                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                                <g transform="translate(67.298684, 71.201316)">\n                                    <path d="M108.7791,227.405285 L11.3079182,324.876467 C5.45005384,330.734332 5.45005384,340.231806 11.3079182,346.089671 L27.4103294,362.192082 C33.2681938,368.049946 42.7656685,368.049946 48.6235328,362.192082 L146.094715,264.7209 C151.952579,258.863035 151.952579,249.365561 146.094715,243.507696 L129.992304,227.405285 C124.134439,221.547421 114.636965,221.547421 108.7791,227.405285 Z"></path>\n                                    <path d="M221.701316,0.798683501 C305.096314,0.798683501 372.701316,68.6275439 372.701316,152.298684 C372.701316,235.969823 305.096314,303.798684 221.701316,303.798684 C138.306319,303.798684 70.7013165,235.969823 70.7013165,152.298684 C70.7013165,68.6275439 138.306319,0.798683501 221.701316,0.798683501 Z M221.310125,54.0389936 C167.081772,54.0389936 123.121006,98.2066236 123.121006,152.690156 C123.121006,207.173689 167.081772,251.341319 221.310125,251.341319 C275.538478,251.341319 319.499244,207.173689 319.499244,152.690156 C319.499244,98.2066236 275.538478,54.0389936 221.310125,54.0389936 Z" fill-rule="nonzero" transform="translate(221.701316, 152.298684) scale(-1, 1) translate(-221.701316, -152.298684) "></path>\n                                </g>\n                            </g>\n                        </svg>\n                        <button class="qg-search-close-concierge hide" type="button" aria-label="Close Search Concierge">\n                            <svg width="512px" height="512px" viewBox="0 0 512 512">\n                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                                    <rect transform="translate(256.500000, 256.000000) scale(1, -1) rotate(45.000000) translate(-256.500000, -256.000000) " x="32" y="220" width="449" height="72" rx="15"></rect>\n                                    <rect transform="translate(256.500000, 256.000000) rotate(45.000000) translate(-256.500000, -256.000000) " x="32" y="220" width="449" height="72" rx="15"></rect>\n                                </g>\n                            </svg>\n                        </button>\n                        <button type="submit" id="qg-site-search__submit" @click="','" class="asif btn btn-global-primary" title="Search site" data-analytics-link-group="qg-search-page-submit">\n                            <span class="d-none d-md-block d-lg-block">Search</span>\n                            <i class="fa fa-search fa-rotate-90 d-md-none d-lg-none"></i>\n                        </button>\n                        <div class="qg-search-concierge qg-search-concierge-initial">\n                            <div class="qg-search-concierge-group helper">\n                                <div class="qg-search-concierge-content">\n                                    <h4>Popular services</h4>\n                                    <ul class="list-group">\n                                        <li class="list-group-item"><a href="https://www.service.transport.qld.gov.au/renewregistration/public/Welcome.xhtml" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Renew vehicle or boat rego</a></li>\n                                        <li class="list-group-item"><a href="https://www.service.transport.qld.gov.au/checkmydemeritpoints/public/Welcome.xhtml" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Check my licence demerit points</a></li>\n                                        <li class="list-group-item"><a href="https://www.qld.gov.au/transport/licensing/driver-licensing/renew-replace/renew/online" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Renew my driving licence</a></li>\n                                        <li class="list-group-item"><a href="https://www.change-of-address.services.qld.gov.au/" tabindex="-1" data-analytics-link-group="qg-global-search-popular-services">Change my address</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class="qg-search-concierge-group helper">\n                                <div class="qg-search-concierge-content">\n                                    <h4>Browse by category</h4>\n                                    <ul class="list-group">\n                                        <li class="list-group-item"><a href="https://www.qld.gov.au/transport" tabindex="-1">Transport and motoring</a></li>\n                                        <li class="list-group-item"><a href="https://www.qld.gov.au/jobs" tabindex="-1">Employment and jobs</a></li>\n                                        <li class="list-group-item"><a href="https://www.qld.gov.au/education" tabindex="-1">Education and training</a></li>\n                                        <li class="list-group-item"><a href="https://www.qld.gov.au/about" tabindex="-1">Queensland and its government</a></li>\n                                    </ul>\n                                    <a href="https://www.qld.gov.au/queenslanders" tabindex="-1" class="all" data-analytics-link-group="qg-global-search-category">Browse all categories</a>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div class="qg-search-concierge qg-search-concierge-help">\n                            <div class="qg-search-concierge-group suggestions" @click="','"></div>\n                            <div class="qg-search-concierge-group highlight"></div>\n                            <div class="qg-search-concierge-group helper"></div>\n                        </div>\n                    </div>\n                    \x3c!--parameters to display results on search page--\x3e\n                </form>\n        <p class="mt-3">Enter your query in the box above to search.</p>']);return Me=function(){return e},e}var Le=function(){"use strict";function t(){e(this,t),this.urlParameter=ce(),this.spinnerEl=document.querySelector(".qg-search-results__spinner"),this.siteInput=document.querySelector(".qg-site-search__component .qg-search-site__input"),this.renderSearchForm();var n=this.urlParameter.query;n&&(this.processData(),this.siteInput&&(this.siteInput.value=n))}return n(t,[{key:"fetchData",value:function(){var e=this;return he((function(){var t;return de(this,(function(n){switch(n.label){case 0:return null===(t=e.spinnerEl)||void 0===t||t.removeAttribute("hidden"),[4,fetch("".concat(ve,"?query=").concat(e.urlParameter.query,"&num_ranks=").concat(e.urlParameter.numRanks,"&tiers=off&collection=").concat(e.urlParameter.collection,"&profile=").concat(e.urlParameter.profile,"&scope=").concat(e.urlParameter.scope,"&start_rank=").concat(e.urlParameter.startRank))];case 1:return[4,n.sent().json()];case 2:return[2,n.sent()]}}))}))()}},{key:"renderSearchForm",value:function(){var e,t,n,r;ie((e=ce(),t=function(e){if(e.preventDefault(),document.querySelector(".qg-site-search__component .qg-search-site__input").value){var t=new URLSearchParams(location.search),n=ce();t.set("scope","disaster.qld.gov.au"),t.set("profile",n.profile),t.set("page","1"),t.set("start_rank","1"),t.set("num_ranks","10"),t.set("tiers","off"),t.set("collection","qld-gov"),setTimeout((function(){var e=document.querySelector(".qg-site-search__component .qg-search-site__input").value;t.set("query",e),history.pushState({},"","?".concat(t.toString())),pe(t.toString()).then((function(e){var t,n=null==e||null===(t=e.response)||void 0===t?void 0:t.resultPacket,r=n.contextualNavigation,i=n.results;(null==i?void 0:i.length)?(ie(Ee(null==e?void 0:e.response),document.getElementById("qg-search-results__container")),ie(Oe(r),document.getElementById("related-search__tags"))):(ie(Ne("No results found"),document.getElementById("qg-search-results__container")),ie("",document.getElementById("related-search__tags")))}))}))}else ie("",document.getElementById("qg-search-results__container")),ie("",document.getElementById("related-search__tags"))},n=function(e){var t=document.querySelector(".qg-site-search__component .qg-search-concierge-help");null!=t&&(t.hidden=e)},r=function(e){"keydown"===e.type&&("Enter"===e.key?n(!0):n(!1))},U(Me(),e.query,r,r,t,t)),document.getElementById("qg-search-form"))}},{key:"processData",value:function(){var e=this;this.fetchData().then((function(t){var n,r,i=null==t||null===(n=t.response)||void 0===n?void 0:n.resultPacket,a=i.contextualNavigation;i.results.length>0?(null===(r=e.spinnerEl)||void 0===r||r.setAttribute("hidden",""),ie(Ee(null==t?void 0:t.response,e.urlParameter),document.getElementById("qg-search-results__container")),a&&ie(Oe(a),document.getElementById("related-search__tags"))):(document.querySelector(".qg-search-results__spinner").remove(),ie(Ne("No results found"),document.getElementById("qg-search-results__container")))}))}}]),t}(),Ue=function(){"use strict";function t(){e(this,t)}return n(t,null,[{key:"init",value:function(){new He,new Le}}]),t}();window.onpopstate=function(e){Ue.init()},Ue.init()}();
//# sourceMappingURL=app.js.map
