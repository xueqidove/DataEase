// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/Accessor ../core/Collection ../core/watchUtils".split(" "),function(a,f,c,p,q,r,d,t,l,u,v,w,m,g,n){a.BasemapView=function(h){function e(b){b=h.call(this,b)||this;b.view=null;b.baseLayerViews=
new g;b.referenceLayerViews=new g;b._loadingHandle=n.init(f._assertThisInitialized(b),"view.map.basemap",k=>{k&&k.load().catch(()=>{})});return b}f._inheritsLoose(e,h);e.prototype.destroy=function(){this._set("view",null);this._loadingHandle&&(this._loadingHandle.remove(),this._loadingHandle=null)};f._createClass(e,[{key:"suspended",get:function(){return this.view?this.view.suspended:!0}},{key:"updating",get:function(){return this.view&&this.view.suspended?!1:!(!(this.view&&this.view.map&&this.view.map.basemap)||
this.view.map.basemap.loaded)}}]);return e}(m);c.__decorate([d.property({constructOnly:!0})],a.BasemapView.prototype,"view",void 0);c.__decorate([d.property({readOnly:!0})],a.BasemapView.prototype,"baseLayerViews",void 0);c.__decorate([d.property({readOnly:!0})],a.BasemapView.prototype,"referenceLayerViews",void 0);c.__decorate([d.property({readOnly:!0,dependsOn:["view.suspended"]})],a.BasemapView.prototype,"suspended",null);c.__decorate([d.property({type:Boolean,readOnly:!0,dependsOn:["view.suspended",
"view.map.basemap.loaded"]})],a.BasemapView.prototype,"updating",null);a.BasemapView=c.__decorate([l.subclass("esri.views.BasemapView")],a.BasemapView);Object.defineProperty(a,"__esModule",{value:!0})});