// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/maybe ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/Accessor".split(" "),function(a,e,d,m,h,n,p,f,q,k,r,t,u,l){a.AreaMeasurement3D=
function(g){function c(){var b=g.apply(this,arguments)||this;b.result=null;return b}e._inheritsLoose(c,g);c.prototype.destroy=function(){this.result=null};e._createClass(c,[{key:"geometry",set:function(b){this.result=null;this._set("geometry",h.isSome(b)?b.clone():null)}}]);return c}(l);d.__decorate([f.property({value:null})],a.AreaMeasurement3D.prototype,"geometry",null);d.__decorate([f.property()],a.AreaMeasurement3D.prototype,"result",void 0);a.AreaMeasurement3D=d.__decorate([k.subclass("esri.views.3d.interactive.graphics.AreaMeasurement3D")],
a.AreaMeasurement3D);Object.defineProperty(a,"__esModule",{value:!0})});