// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/property ../../../../core/jsonMap ../../../../core/accessorSupport/decorators/subclass ../../../../core/urlUtils ../../../../core/uuid ../../../../portal/support/resourceExtension ../../../../core/Accessor ../../../../core/Evented ../../../../core/Handles ../../../support/Scheduler ../../../../core/SetUtils ./ExtentSet".split(" "),
function(k,l,g,z,A,q,B,r,C,D,E,t,u,v,w,x,y){g=function(m){function h(){var a=m.apply(this,arguments)||this;a.dirtyExtents=new y.ExtentSet;a.globalDirty=!1;a.dirtyGraphicsSet=new Set;a.handles=new v;a.updateElevation=!1;a.layerView=null;a.graphicsCore=null;a.events=new u;return a}k._inheritsLoose(h,m);var c=h.prototype;c.setup=function(a,b,d,e){this.layerView=a;this.queryGraphicUIDsInExtent=b;this.graphicsCore=d;this.elevationProvider=e;a=this.layerView.view.resourceController.scheduler;this.handles.add([e.on("elevation-change",
f=>this._elevationChanged(f)),this.layerView.watch("suspended",()=>this.suspendedChange()),a.registerTask(w.Task.ELEVATION_ALIGNMENT,f=>this.update(f),()=>this.needsUpdate())])};c.destroy=function(){this.dirtyGraphicsSet=null;this.handles.destroy();this.queryGraphicUIDsInExtent=this.graphicsCore=this.layerView=this.handles=null};c.clear=function(){this.dirtyGraphicsSet.clear();this.notifyChange("updating")};c.suspendedChange=function(){!0===this.layerView.suspended?this.updateElevation=!1:!1===this.layerView.suspended&&
this.updateElevation&&(this.globalDirty=!0,this.notifyChange("updating"))};c.elevationInfoChange=function(){this.globalDirty=!0;this.notifyChange("updating")};c.needsUpdate=function(){return this.dirtyGraphicsSet&&0<this.dirtyGraphicsSet.size||this.dirtyExtents&&!this.dirtyExtents.empty||this.globalDirty};c.update=function(a){this.globalDirty&&(this.markAllGraphicsElevationDirty(),this.globalDirty=!1,a.madeProgress());for(a.run(()=>this.dirtyExtents.merge(a));this.needsUpdate()&&!a.done;)this._updateDirtyGraphics(a),
this._updateDirtyExtents(a);this.layerView.view.deconflictor.setDirty();this.notifyChange("updating")};c._updateDirtyGraphics=function(a){const b=this.layerView.view,d=this.graphicsCore.stageLayer.id,e=this.layerView.labeling;for(;0<this.dirtyGraphicsSet.size&&!a.done;){let f=Math.min(this.dirtyGraphicsSet.size,100);x.someSet(this.dirtyGraphicsSet,n=>{const p=this.graphicsCore.getGraphics3DGraphicById(n);this.dirtyGraphicsSet.delete(n);p&&p.alignWithElevation(this.elevationProvider,b.renderCoordsHelper,
this.graphicsCore.asyncUpdates);a.madeProgress();return 0>=--f||a.done});b._stage.processDirtyLayer(d);e&&e.processStageDirty()}};c._updateDirtyExtents=function(a){for(;!this.dirtyExtents.empty&&100>this.dirtyGraphicsSet.size&&!a.done;){const b=this.dirtyExtents.pop(),d=this.elevationProvider.spatialReference;this.events.emit("invalidate-elevation",{extent:b,spatialReference:d});this.queryGraphicUIDsInExtent(b,d,e=>{const f=this.graphicsCore.getGraphics3DGraphicById(e);f&&f.needsElevationUpdates()&&
this.dirtyGraphicsSet.add(e)});a.madeProgress()}};c.markAllGraphicsElevationDirty=function(){this.dirtyExtents.clear();this.dirtyGraphicsSet.clear();this.graphicsCore.graphics3DGraphics.forEach((a,b)=>this.dirtyGraphicsSet.add(b))};c._elevationChanged=function(a){if("scene"!==a.context||this.graphicsCore.layer.elevationInfo&&"relative-to-scene"===this.graphicsCore.layer.elevationInfo.mode){var {extent:b,spatialReference:d}=a;this.layerView.suspended?(this.updateElevation||(a=this.graphicsCore.computedExtent)&&
b[2]>a.xmin&&b[0]<a.xmax&&b[3]>a.ymin&&b[1]<a.ymax&&(this.updateElevation=!0),this.events.emit("invalidate-elevation",{extent:b,spatialReference:d})):(-Infinity===b[0]?this.globalDirty=!0:this.dirtyExtents.add(b),this.notifyChange("updating"))}};k._createClass(h,[{key:"updating",get:function(){return this.needsUpdate()}}]);return h}(t);l.__decorate([q.property({readOnly:!0})],g.prototype,"updating",null);return g=l.__decorate([r.subclass("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],
g)});