/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{clone as e}from"../core/lang.js";const o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0;var d,r;let a;var i,t;null!=(d=o.dojoConfig)&&d.has||null!=(r=o.esriConfig)&&r.has?a={...null==(i=o.dojoConfig)?void 0:i.has,...null==(t=o.esriConfig)?void 0:t.has}:a={};function n(e){return"function"==typeof a[e]?a[e]=a[e](o):a[e]}function s(e,o,d=!1){return f(e,o,d)}function l(e,o){if(null!=o)return o[e]||p(e.split("."),!1,o)}function c(e,o,d){const r=e.split("."),a=r.pop(),i=p(r,!0,d);i&&a&&(i[a]=o)}function p(e,o,d){let r=d;for(const d of e){if(null==r)return;if(!(d in r)){if(!o)return;r[d]={}}r=r[d]}return r}function f(o,d,r){return d?Object.keys(d).reduce((function(o,a){let i=o[a],t=d[a];return i===t?o:void 0===i?(o[a]=e(t),o):(Array.isArray(t)||Array.isArray(o)?(i=i?Array.isArray(i)?o[a]=i.concat():o[a]=[i]:o[a]=[],t&&(Array.isArray(t)||(t=[t]),r?t.forEach((e=>{-1===i.indexOf(e)&&i.push(e)})):o[a]=t.concat())):t&&"object"==typeof t?o[a]=f(i,t,r):o.hasOwnProperty(a)&&!d.hasOwnProperty(a)||(o[a]=t),o)}),o||{}):o}n.add=(e,o,d,r)=>((r||void 0===a[e])&&(a[e]=o),d&&n(e)),n.cache=a,n.add("esri-deprecation-warnings",!0),n.add("esri-featurelayer-webgl",!0),n.add("esri-featurelayer-webgl-labeling",!0),(()=>{n.add("host-webworker",void 0!==o.WorkerGlobalScope&&self instanceof o.WorkerGlobalScope);const e="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document;if(n.add("host-browser",e),n.add("host-node","object"==typeof o.process&&o.process.versions&&o.process.versions.node&&o.process.versions.v8),n.add("dom",e),n("host-browser")){const e=navigator,o=e.userAgent,d=e.appVersion,r=parseFloat(d);if(n.add("wp",parseFloat(o.split("Windows Phone")[1])||void 0),n.add("msapp",parseFloat(o.split("MSAppHost/")[1])||void 0),n.add("khtml",d.indexOf("Konqueror")>=0?r:void 0),n.add("edge",parseFloat(o.split("Edge/")[1])||void 0),n.add("opr",parseFloat(o.split("OPR/")[1])||void 0),n.add("webkit",!n("wp")&&!n("edge")&&parseFloat(o.split("WebKit/")[1])||void 0),n.add("chrome",!n("edge")&&!n("opr")&&parseFloat(o.split("Chrome/")[1])||void 0),n.add("android",!n("wp")&&parseFloat(o.split("Android ")[1])||void 0),n.add("safari",!(d.indexOf("Safari")>=0)||n("wp")||n("chrome")||n("android")||n("edge")||n("opr")?void 0:parseFloat(d.split("Version/")[1])),n.add("mac",d.indexOf("Macintosh")>=0),n.add("quirks","BackCompat"===document.compatMode),!n("wp")&&o.match(/(iPhone|iPod|iPad)/)){const e=RegExp.$1.replace(/P/,"p"),d=o.match(/OS ([\d_]+)/)?RegExp.$1:"1",r=parseFloat(d.replace(/_/,".").replace(/_/g,""));n.add(e,r),n.add("ios",r)}n.add("trident",parseFloat(d.split("Trident/")[1])||void 0),n.add("svg","undefined"!=typeof SVGAngle),n("webkit")||(o.indexOf("Opera")>=0&&n.add("opera",r>=9.8&&parseFloat(o.split("Version/")[1])||r),!(o.indexOf("Gecko")>=0)||n("wp")||n("khtml")||n("trident")||n("edge")||n.add("mozilla",r),n("mozilla")&&n.add("ff",parseFloat(o.split("Firefox/")[1]||o.split("Minefield/")[1])||void 0))}})(),(()=>{if(o.navigator){const e=navigator.userAgent,o=e.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i),d=e.match(/iPhone/i);o&&n.add("esri-mobile",o),d&&n.add("esri-iPhone",d),n.add("esri-geolocation",!!navigator.geolocation)}n.add("esri-canvas-svg-support",!n("trident")),n.add("esri-secure-context",(()=>"isSecureContext"in o?o.isSecureContext:o.location&&o.location.origin?0===o.location.origin.indexOf("https:"):void 0)),n.add("esri-wasm","WebAssembly"in o),n.add("esri-shared-array-buffer",(()=>{const e="SharedArrayBuffer"in o,d=!1===o.crossOriginIsolated;return e&&!d})),n.add("esri-atomics","Atomics"in o),n.add("esri-workers","Worker"in o),n.add("esri-text-decoder","TextDecoder"in o),n.add("esri-text-encoder","TextEncoder"in o),n.add("featurelayer-advanced-symbols",!1),n.add("featurelayer-pbf",!0),n.add("featurelayer-pbf-statistics",!1),n.add("feature-layers-workers",!0),n.add("mapview-transitions-duration",200),n("host-webworker")||n("host-browser")&&(n.add("csp-restrictions",(()=>{try{new Function}catch{return!0}return!1})),n.add("esri-image-decode",(()=>{if("decode"in new Image){const e=new Image;return e.src='data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>',void e.decode().then((()=>{n.add("esri-image-decode",!0,!0,!0)})).catch((()=>{n.add("esri-image-decode",!1,!0,!0)}))}return!1})),n.add("esri-url-encodes-apostrophe",(()=>{const e=o.document.createElement("a");return e.href="?'",e.href.indexOf("?%27")>-1})),n.add("vectortilelayer-max-buffers",(()=>n("ff")?160:Number.POSITIVE_INFINITY)))})();export{o as a,s as d,l as g,n as h,c as s};
