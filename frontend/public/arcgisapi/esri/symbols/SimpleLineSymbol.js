// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/lang ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/screenUtils ./LineSymbol ./LineSymbolMarker".split(" "),function(u,d,l,v,A,B,g,w,x,y,C,D,E,n,b,z){var m;l=new w.JSONMap({esriSLSSolid:"solid",
esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});b=m=function(e){function h(...a){a=e.call(this,...a)||this;a.type="simple-line";a.style="solid";a.cap="round";a.join="round";a.marker=null;a.miterLimit=
2;return a}u._inheritsLoose(h,e);var c=h.prototype;c.normalizeCtorArgs=function(a,k,p,q,r,t){if(a&&"string"!==typeof a)return a;const f={};null!=a&&(f.style=a);null!=k&&(f.color=k);null!=p&&(f.width=n.toPt(p));null!=q&&(f.cap=q);null!=r&&(f.join=r);null!=t&&(f.miterLimit=n.toPt(t));return f};c.clone=function(){var a;return new m({color:v.clone(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:null==(a=this.marker)?void 0:a.clone()})};c.hash=
function(){var a,k;return`${e.prototype.hash.call(this)}.${null==(a=this.color)?void 0:a.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${null==(k=this.marker)?void 0:k.hash()}`};return h}(b);d.__decorate([x.enumeration({esriSLS:"simple-line"},{readOnly:!0})],b.prototype,"type",void 0);d.__decorate([g.property({type:l.apiValues,json:{read:l.read,write:l.write}})],b.prototype,"style",void 0);d.__decorate([g.property({type:["butt","round","square"],json:{write:{overridePolicy:(e,
h,c)=>({enabled:"round"!==e&&(null==c||null==c.origin)})}}})],b.prototype,"cap",void 0);d.__decorate([g.property({type:["miter","round","bevel"],json:{write:{overridePolicy:(e,h,c)=>({enabled:"round"!==e&&(null==c||null==c.origin)})}}})],b.prototype,"join",void 0);d.__decorate([g.property({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":z}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],b.prototype,"marker",void 0);d.__decorate([g.property({type:Number,json:{read:!1,
write:!1}})],b.prototype,"miterLimit",void 0);return b=m=d.__decorate([y.subclass("esri.symbols.SimpleLineSymbol")],b)});