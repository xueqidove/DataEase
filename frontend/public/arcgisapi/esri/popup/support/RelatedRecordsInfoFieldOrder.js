// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport".split(" "),function(h,c,a,m,n,f,p,k,q,r,t,l){var d;a=d=function(g){function e(b){b=g.call(this,b)||this;b.field=null;b.order=null;return b}h._inheritsLoose(e,
g);e.prototype.clone=function(){return new d({field:this.field,order:this.order})};return e}(l.JSONSupport);c.__decorate([f.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);c.__decorate([f.property({type:["asc","desc"],json:{write:!0}})],a.prototype,"order",void 0);return a=d=c.__decorate([k.subclass("esri.popup.support.RelatedRecordsInfoFieldOrder")],a)});