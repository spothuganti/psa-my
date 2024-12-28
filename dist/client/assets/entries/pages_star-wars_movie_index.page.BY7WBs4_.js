import{e as J,c as Z,a as R,t as A,b as U,F as K,o as Q}from"../chunks/chunk-BHVpcwqr.js";var B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function W(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var _={exports:{}},C;function Y(){return C||(C=1,function(a,d){var l=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof B<"u"&&B,p=function(){function w(){this.fetch=!1,this.DOMException=l.DOMException}return w.prototype=l,new w}();(function(w){(function(h){var f=typeof w<"u"&&w||typeof self<"u"&&self||typeof B<"u"&&B||{},c={searchParams:"URLSearchParams"in f,iterable:"Symbol"in f&&"iterator"in Symbol,blob:"FileReader"in f&&"Blob"in f&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in f,arrayBuffer:"ArrayBuffer"in f};function I(e){return e&&DataView.prototype.isPrototypeOf(e)}if(c.arrayBuffer)var M=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],q=ArrayBuffer.isView||function(e){return e&&M.indexOf(Object.prototype.toString.call(e))>-1};function g(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function T(e){return typeof e!="string"&&(e=String(e)),e}function O(e){var t={next:function(){var r=e.shift();return{done:r===void 0,value:r}}};return c.iterable&&(t[Symbol.iterator]=function(){return t}),t}function i(e){this.map={},e instanceof i?e.forEach(function(t,r){this.append(r,t)},this):Array.isArray(e)?e.forEach(function(t){if(t.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+t.length);this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}i.prototype.append=function(e,t){e=g(e),t=T(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},i.prototype.delete=function(e){delete this.map[g(e)]},i.prototype.get=function(e){return e=g(e),this.has(e)?this.map[e]:null},i.prototype.has=function(e){return this.map.hasOwnProperty(g(e))},i.prototype.set=function(e,t){this.map[g(e)]=T(t)},i.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},i.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),O(e)},i.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),O(e)},i.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),O(e)},c.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);function P(e){if(!e._noBody){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}}function j(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function L(e){var t=new FileReader,r=j(t);return t.readAsArrayBuffer(e),r}function N(e){var t=new FileReader,r=j(t),n=/charset=([A-Za-z0-9_-]+)/.exec(e.type),s=n?n[1]:"utf-8";return t.readAsText(e,s),r}function k(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function F(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function H(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:c.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:c.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():c.arrayBuffer&&c.blob&&I(e)?(this._bodyArrayBuffer=F(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||q(e))?this._bodyArrayBuffer=F(e):this._bodyText=e=Object.prototype.toString.call(e):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var e=P(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=P(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(c.blob)return this.blob().then(L);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var e=P(this);if(e)return e;if(this._bodyBlob)return N(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(k(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(z)}),this.json=function(){return this.text().then(JSON.parse)},this}var V=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function G(e){var t=e.toUpperCase();return V.indexOf(t)>-1?t:e}function m(e,t){if(!(this instanceof m))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{};var r=t.body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new i(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&e._bodyInit!=null&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new i(t.headers)),this.method=G(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal||function(){if("AbortController"in f){var o=new AbortController;return o.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),(this.method==="GET"||this.method==="HEAD")&&(t.cache==="no-store"||t.cache==="no-cache")){var n=/([?&])_=[^&]*/;if(n.test(this.url))this.url=this.url.replace(n,"$1_="+new Date().getTime());else{var s=/\?/;this.url+=(s.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})};function z(e){var t=new FormData;return e.trim().split("&").forEach(function(r){if(r){var n=r.split("="),s=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(s),decodeURIComponent(o))}}),t}function X(e){var t=new i,r=e.replace(/\r?\n[\t ]+/g," ");return r.split("\r").map(function(n){return n.indexOf(`
`)===0?n.substr(1,n.length):n}).forEach(function(n){var s=n.split(":"),o=s.shift().trim();if(o){var E=s.join(":").trim();try{t.append(o,E)}catch(x){console.warn("Response "+x.message)}}}),t}H.call(m.prototype);function y(e,t){if(!(this instanceof y))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText===void 0?"":""+t.statusText,this.headers=new i(t.headers),this.url=t.url||"",this._initBody(e)}H.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},y.error=function(){var e=new y(null,{status:200,statusText:""});return e.ok=!1,e.status=0,e.type="error",e};var $=[301,302,303,307,308];y.redirect=function(e,t){if($.indexOf(t)===-1)throw new RangeError("Invalid status code");return new y(null,{status:t,headers:{location:e}})},h.DOMException=f.DOMException;try{new h.DOMException}catch{h.DOMException=function(t,r){this.message=t,this.name=r;var n=Error(t);this.stack=n.stack},h.DOMException.prototype=Object.create(Error.prototype),h.DOMException.prototype.constructor=h.DOMException}function D(e,t){return new Promise(function(r,n){var s=new m(e,t);if(s.signal&&s.signal.aborted)return n(new h.DOMException("Aborted","AbortError"));var o=new XMLHttpRequest;function E(){o.abort()}o.onload=function(){var u={statusText:o.statusText,headers:X(o.getAllResponseHeaders()||"")};s.url.indexOf("file://")===0&&(o.status<200||o.status>599)?u.status=200:u.status=o.status,u.url="responseURL"in o?o.responseURL:u.headers.get("X-Request-URL");var v="response"in o?o.response:o.responseText;setTimeout(function(){r(new y(v,u))},0)},o.onerror=function(){setTimeout(function(){n(new TypeError("Network request failed"))},0)},o.ontimeout=function(){setTimeout(function(){n(new TypeError("Network request timed out"))},0)},o.onabort=function(){setTimeout(function(){n(new h.DOMException("Aborted","AbortError"))},0)};function x(u){try{return u===""&&f.location.href?f.location.href:u}catch{return u}}if(o.open(s.method,x(s.url),!0),s.credentials==="include"?o.withCredentials=!0:s.credentials==="omit"&&(o.withCredentials=!1),"responseType"in o&&(c.blob?o.responseType="blob":c.arrayBuffer&&(o.responseType="arraybuffer")),t&&typeof t.headers=="object"&&!(t.headers instanceof i||f.Headers&&t.headers instanceof f.Headers)){var S=[];Object.getOwnPropertyNames(t.headers).forEach(function(u){S.push(g(u)),o.setRequestHeader(u,T(t.headers[u]))}),s.headers.forEach(function(u,v){S.indexOf(v)===-1&&o.setRequestHeader(v,u)})}else s.headers.forEach(function(u,v){o.setRequestHeader(v,u)});s.signal&&(s.signal.addEventListener("abort",E),o.onreadystatechange=function(){o.readyState===4&&s.signal.removeEventListener("abort",E)}),o.send(typeof s._bodyInit>"u"?null:s._bodyInit)})}return D.polyfill=!0,f.fetch||(f.fetch=D,f.Headers=i,f.Request=m,f.Response=y),h.Headers=i,h.Request=m,h.Response=y,h.fetch=D,h})({})})(p),p.fetch.ponyfill=!0,delete p.fetch.polyfill;var b=l.fetch?l:p;d=b.fetch,d.default=b.fetch,d.fetch=b.fetch,d.Headers=b.Headers,d.Request=b.Request,d.Response=b.Response,a.exports=d}(_,_.exports)),_.exports}var ee=Y();const te=W(ee);function re(a){const{id:d,title:l,release_date:p,director:b,producer:w}=a;return a={id:d,title:l,release_date:p,director:b,producer:w},a}async function ne(a){let l=await(await te(`https://star-wars.brillout.com/api/films/${a.routeParams.movieId}.json`)).json();l=re(l);const{title:p}=l;return{pageContext:{pageProps:{movie:l},documentProps:{title:p}}}}const se=J({__name:"index.page",props:["movie"],setup(a){return(d,l)=>(Q(),Z(K,null,[R("h1",null,A(a.movie.title),1),U(" Release Date: "+A(a.movie.release_date)+" ",1),l[0]||(l[0]=R("br",null,null,-1)),U(" Director: "+A(a.movie.director)+" ",1),l[1]||(l[1]=R("br",null,null,-1)),U(" Producer: "+A(a.movie.producer),1)],64))}});export{se as default,ne as onBeforeRender};
