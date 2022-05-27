//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojox/gfx/matrix ./Point ./LineString ./Collection ./Feature".split(" "),function(q,h,e,r,l,m,k,t){return q("dojox.geo.openlayers.GeometryFeature",t,{constructor:function(a){this._geometry=a;this._shapeProperties={};this._stroke=this._fill=null},_createCollection:function(a){var b=this.getLayer(),c=b.getSurface();a=this.createShape(c,a);b.getViewport().add(a);return a},_getCollectionShape:function(a){var b=a.shape;null==b&&(b=this._createCollection(a),
a.shape=b);return b},renderCollection:function(a){void 0==a&&(a=this._geometry);s=this._getCollectionShape(a);var b=this.getShapeProperties();s.setShape(b);h.forEach(a.coordinates,function(c){if(c instanceof l)this.renderPoint(c);else if(c instanceof m)this.renderLineString(c);else if(c instanceof k)this.renderCollection(c);else throw Error();},this);this._applyStyle(a)},render:function(a){void 0==a&&(a=this._geometry);if(a instanceof l)this.renderPoint(a);else if(a instanceof m)this.renderLineString(a);
else if(a instanceof k)this.renderCollection(a);else throw Error();},getShapeProperties:function(){return this._shapeProperties},setShapeProperties:function(a){this._shapeProperties=a;return this},createShape:function(a,b){b||(b=this._geometry);var c=null;if(b instanceof l)c=a.createCircle();else if(b instanceof m)c=a.createPolyline();else if(b instanceof k){var d=a.createGroup();h.forEach(b.coordinates,function(g){g=this.createShape(a,g);d.add(g)},this);c=d}else throw Error();return c},getShape:function(){var a=
this._geometry;if(!a)return null;if(a.shape)return a.shape;this.render();return a.shape},_createPoint:function(a){var b=this.getLayer(),c=b.getSurface();a=this.createShape(c,a);b.getViewport().add(a);return a},_getPointShape:function(a){var b=a.shape;null==b&&(b=this._createPoint(a),a.shape=b);return b},renderPoint:function(a){void 0==a&&(a=this._geometry);var b=this.getLayer(),c=b.getDojoMap();s=this._getPointShape(a);var d=e.mixin({},this._defaults.pointShape);d=e.mixin(d,this.getShapeProperties());
s.setShape(d);d=this.getCoordinateSystem();c=c.transform(a.coordinates,d);d=this._getLocalXY(c);c=d[0];d=d[1];(b=b.getViewport().getTransform())&&s.setTransform(r.translate(c-b.dx,d-b.dy));this._applyStyle(a)},_createLineString:function(a){var b=this.getLayer(),c=this.createShape(b._surface,a);b.getViewport().add(c);return a.shape=c},_getLineStringShape:function(a){var b=a.shape;null==b&&(b=this._createLineString(a),a.shape=b);return b},renderLineString:function(a){void 0==a&&(a=this._geometry);var b=
this.getLayer(),c=b.getDojoMap(),d=this._getLineStringShape(a),g=this.getCoordinateSystem(),p=Array(a.coordinates.length),n=b.getViewport().getTransform();h.forEach(a.coordinates,function(f,u,v){f=c.transform(f,g);f=this._getLocalXY(f);n&&(f[0]-=n.dx,f[1]-=n.dy);p[u]={x:f[0],y:f[1]}},this);b=e.mixin({},this._defaults.lineStringShape);b=e.mixin(b,this.getShapeProperties());b=e.mixin(b,{points:p});d.setShape(b);this._applyStyle(a)},_applyStyle:function(a){if(a&&a.shape){var b=this.getFill();if(!b||
e.isString(b)||e.isArray(b))var c=b;else c=e.mixin({},this._defaults.fill),c=e.mixin(c,b);b=this.getStroke();if(!b||e.isString(b)||e.isArray(b))var d=b;else d=e.mixin({},this._defaults.stroke),d=e.mixin(d,b);this._applyRecusiveStyle(a,d,c)}},_applyRecusiveStyle:function(a,b,c){var d=a.shape;d.setFill&&d.setFill(c);d.setStroke&&d.setStroke(b);a instanceof k&&h.forEach(a.coordinates,function(g){this._applyRecusiveStyle(g,b,c)},this)},setStroke:function(a){this._stroke=a;return this},getStroke:function(){return this._stroke},
setFill:function(a){this._fill=a;return this},getFill:function(){return this._fill},remove:function(){var a=this._geometry,b=a.shape;a.shape=null;b&&b.removeShape();a instanceof k&&h.forEach(a.coordinates,function(c){this.remove(c)},this)},_defaults:{fill:null,stroke:null,pointShape:{r:30},lineStringShape:null}})});