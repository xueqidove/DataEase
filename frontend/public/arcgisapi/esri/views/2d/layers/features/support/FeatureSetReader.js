// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../geometry/support/jsonUtils ../../../../../geometry ../../../../../layers/graphics/OptimizedGeometry ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/centroid".split(" "),function(k,m,n,l,p,q,r){let f=0;l=function(){function g(a){this.type="FeatureSetReader";this.seen=!1;this._ty=this._tx=this.instance=0;this._xmin=-1;this._ymax=this._ymin=this._xmax=0;this._joined=[];this.instance=a}
g.createInstance=function(){f++;return f=65535<f?0:f};var b=g.prototype;b.getQuantizationTransform=function(){throw Error("Unable to find transform for featureSet");};b.getStorage=function(){return this._storage};b.getComputedNumeric=function(a){return this.getComputedNumericAtIndex(0)};b.setComputedNumeric=function(a,c){return this.setComputedNumericAtIndex(c,0)};b.getComputedString=function(a){return this.getComputedStringAtIndex(0)};b.setComputedString=function(a,c){return this.setComputedStringAtIndex(0,
c)};b.getComputedNumericAtIndex=function(a){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),a)};b.setComputedNumericAtIndex=function(a,c){this._storage.setComputedNumericAtIndex(this.getDisplayId(),a,c)};b.getComputedStringAtIndex=function(a){return this._storage.getComputedStringAtIndex(this.getDisplayId(),a)};b.setComputedStringAtIndex=function(a,c){return this._storage.setComputedStringAtIndex(this.getDisplayId(),a,c)};b.transform=function(a,c){const d=this.copy();d._tx=a;d._ty=
c;return d};b.extent=function(a,c,d,h){const e=this.copy();e._xmin=a;e._xmax=d;e._ymin=c;e._ymax=h;return e};b.hasFilter=function(){return this._hasFilter};b.readAttribute=function(a,c=!1){var d=this._readAttribute(a,c);if(void 0!==d)return d;for(const h of this._joined)if(h.setIndex(this.getIndex()),d=h._readAttribute(a,c),void 0!==d)return d};b.readAttributes=function(){return this._readAttributes()};b.joinAttributes=function(a){this._joined.push(a)};b.readArcadeFeature=function(){return this};
b.geometry=function(){var a=this.readHydratedGeometry();a=q.convertToGeometry(a,this.geometryType,this.hasZ,this.hasM);a=n.fromJSON(a);a.spatialReference=this._arcadeSpatialReference;return a};b.field=function(a){return this.readAttribute(a,!0)};b.hasField=function(a){return!0};b.setField=function(a,c){};b.keys=function(){return[]};b.castToText=function(){return""};b._computeCentroid=function(){if("esriGeometryPolygon"!==this.geometryType)return null;const a=this.readUnquantizedGeometry();if(!a||
a.hasIndeterminateRingOrder)return null;const c=this.getQuantizationTransform();return r.getCentroidOptimizedGeometry(new p,a,this.hasM,this.hasZ,c)};b.copyInto=function(a){a.seen=this.seen;a._storage=this._storage;a._arcadeSpatialReference=this._arcadeSpatialReference;a._joined=this._joined;a._tx=this._tx;a._ty=this._ty;a._xmin=this._xmin;a._xmax=this._xmax;a._ymin=this._ymin;a._ymax=this._ymax};m._createClass(g,[{key:"_hasFilter",get:function(){return-1!==this._xmin}}]);return g}();k.FeatureSetReader=
l;Object.defineProperty(k,"__esModule",{value:!0})});