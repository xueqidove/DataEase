// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("require ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/promiseUtils ../../../geometry/support/contains ../../../layers/support/fieldUtils ../../../Graphic ../../../chunks/vec3f64 ../../../chunks/vec3 ../../../core/watchUtils ../../../geometry/support/aaBoundingRect ../../../geometry/projection ../../support/Scheduler ../../../tasks/operations/zscale ../../../tasks/support/Query ../../../layers/graphics/dehydratedFeatures ../support/debugFlags ../../../layers/graphics/hydratedFeatures ../../../renderers/support/renderingInfoUtils ./LayerView3D ./support/layerViewUpdatingProperties ../support/orientedBoundingBox ../../layers/support/FeatureFilter ../../layers/SceneLayerView ./i3s/I3SUtil ../../../layers/graphics/controllers/I3SOnDemandController ../support/GraphicsMap ./i3s/I3SAttributeOverrides ./support/DefinitionExpressionSceneLayerView ./graphics/QueryEngine ./graphics/Graphics3DFeatureLikeLayerView ./I3SPointsWorkerHandle ./support/PopupSceneLayerView ./i3s/attributeEditing ./support/fieldProperties".split(" "),
function(Y,O,k,J,f,Z,wa,n,xa,aa,ya,za,Aa,E,ba,K,H,P,ca,da,ea,F,fa,ha,Q,L,M,ia,R,h,ja,ka,la,ma,I,na,oa,pa,qa,ra,sa,S,ta,T,ua){function U(z){const v=z.attributeInfo;for(let d=0;d<z.graphics.length;d++){const a=z.graphics[d];a.attributes||(a.attributes={});if(f.isSome(v)&&f.isSome(v.loadedAttributes))for(const {name:b}of v.loadedAttributes)v.attributeData[b]&&(a.attributes[b]=I.getCachedAttributeValue(v.attributeData[b],d))}}const G=Z.getLogger("esri.views.3d.layers.SceneLayerGraphicsView3D");J=ua.defineFieldProperties();
h=function(z){function v(){var a=z.apply(this,arguments)||this;a._nodesAddedToStage=new Map;a.drapeSourceType=1;a._queryEngine=null;a._memCache=null;a.loadedGraphics=new oa.GraphicsMap;a.holeFilling="always";a.progressiveLoadFactor=1;a.supportsHeightUnitConversion=!0;a._coordinatesOutsideExtentErrors=0;a._maxCoordinatesOutsideExtentErrors=20;return a}O._inheritsLoose(v,z);var d=v.prototype;d.initialize=function(){var a;const b=this.layer;this._attributeOverrides=new pa.I3SAttributeOverrides(this.layer,
null==(a=this.view.resourceController)?void 0:a.memoryController);I.checkSpatialReferences(b,this.view.spatialReference,this.view.viewingMode);for(const c of["layer.renderer","layer.labelingInfo","layer.labelsVisible","definitionExpressionFields","filter"])this.updatingHandles.add(this,c,()=>this._updateRequiredFields());this.updatingHandles.add(b,"rangeInfos",c=>this._rangeInfosChanged(c),2);this.updatingHandles.add(b,"renderer",(c,e)=>this._rendererChange(c,e));this.updatingHandles.add(this,"parsedDefinitionExpression",
()=>this._filterChange());this.handles.add(da.init(M,"I3S_TREE_SHOW_TILES",c=>{if(c&&!this._treeDebugger){const e=this._controller.crsIndex;(new Promise(function(l,m){Y(["./support/I3STreeDebugger"],l,m)})).then(({I3STreeDebugger:l})=>{!this._treeDebugger&&M.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new l({lv:this,view:this.view,nodeSR:e}))})}else c||!this._treeDebugger||M.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)}));this._updateRequiredFields();this._set("graphics3d",
new sa({owner:this,layer:b,preferredUpdatePolicy:1,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentVisibilityEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,suspendResumeExtentMode:"data",dataExtent:b.fullExtent,updateClippingExtent:c=>this._updateClippingExtent(c)}));if(this.graphics3d.elevationAlignment)this.graphics3d.elevationAlignment.events.on("invalidate-elevation",c=>this._invalidateElevation(c));this.supportsHeightUnitConversion&&
(this._verticalScale=ha.getGeometryZScaler("point",b.spatialReference,this.view.spatialReference));this.addResolvingPromise(this.graphics3d.setup());this._memCache=this.view.resourceController.memoryController.getMemCache(b.uid);this._controller=new na({layerView:this,scaleVisibilityEnabled:!1});I.containsDraco(this.layer.geometryDefinitions)&&(this._worker=new S.I3SPointsWorkerHandle(this.view.resourceController.scheduler));this.handles.add(this.layer.on("apply-edits",c=>this.updatingHandles.addPromise(c.result)));
this.handles.add(this.layer.on("edits",c=>this._handleEdits(c)));this.when(()=>{this._queryEngine=new ra["default"]({layerView:this,task:fa.Task.FEATURE_QUERY_ENGINE});this.updatingHandles.add(this,"maximumNumberOfFeatures",c=>this._controller.featureTarget=c,2);this.updatingHandles.add(this,"suspended",c=>{c&&this._removeAllNodeData()})})};d.destroy=function(){this._treeDebugger=f.destroyMaybe(this._treeDebugger);this._attributeOverrides=f.destroyMaybe(this._attributeOverrides);this._set("graphics3d",
f.destroyMaybe(this.graphics3d));this._controller=f.destroyMaybe(this._controller);this._queryEngine=f.destroyMaybe(this._queryEngine);this._worker=f.destroyMaybe(this._worker);this._memCache=f.destroyMaybe(this._memCache);this._nodesAddedToStage.clear()};d.notifyGraphicUpdate=function(a,b){this.graphics3d.graphicsCore.notifyGraphicUpdate(a,b)};d.whenGraphicAttributes=async function(a,b){return I.whenGraphicAttributes(this.layer,a,this._getObjectIdField(),b,()=>[...this._nodesAddedToStage.values()],
{populateObjectId:!0})};d.getGraphicFromGraphicUid=function(a){if(!this.loadedGraphics)return null;const b=ia.hydrateGraphic(this.loadedGraphics.find(e=>e.uid===a),this.layer),c=this._getObjectIdField();if(!b||!b.attributes||!b.attributes[c])return null;b.layer=this.layer;b.sourceLayer=this.layer;return b};d.whenGraphicBounds=function(a,b){return this.graphics3d.graphicsCore.whenGraphicBounds(a,b)};d.computeAttachmentOrigin=function(a,b){return this.graphics3d.graphicsCore.computeAttachmentOrigin(a,
b)};d.canResume=function(){return z.prototype.canResume.call(this)&&(!this._controller||this._controller.rootNodeVisible)};d.isUpdating=function(){return!!(this._controller&&this._controller.updating||this.graphics3d&&this.graphics3d.updating)};d.getRenderingInfo=function(a,b,c){(a=R.getRenderingInfo(a,{renderer:b,arcade:c}))&&a.color&&(b=a.color,b[0]/=255,b[1]/=255,b[2]/=255);return a};d.getRenderingInfoAsync=async function(a,b,c,e){return R.getRenderingInfoAsync(a,{renderer:b,arcade:c,...e})};d.highlight=
function(a){return this.graphics3d.highlight(a,this.layer.objectIdField)};d.createInteractiveEditSession=function(a){return T.createInteractiveEditSession(this.attributeEditingContext,a)};d.extractBinaryPointData=async function(a,b){a={geometryBuffer:a.geometryBuffer};f.isNone(this._worker)&&(this._worker=new S.I3SPointsWorkerHandle(this.view.resourceController.scheduler));return this._worker.invoke(a,b).then(c=>{if(f.isSome(c))return{positionData:c.positions,featureIds:c.featureIds};throw Error("Failed to decompress Draco point data");
})};d.checkExtent=function(a,b){a&&!ba.extentContainsCoords3D(a,b)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&G.error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&G.error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++)};d.addNode=async function(a,b,c){if(!("geometryBuffer"in b&&null!==b.geometryBuffer||"pointData"in
b))return E.reject();if(this._nodesAddedToStage.has(a.index))G.error("I3S node "+a.id+" already added");else{var e;if(e=this.layer.fullExtent)e=this.layer.fullExtent.clone(),e.xmin-=.5,e.ymin-=.5,e.xmax+=.5,e.ymax+=.5,e.hasZ&&(e.zmin-=.5,e.zmax+=.5),e.hasM&&(e.mmin-=.5,e.mmax+=.5);var l=this._controller.crsVertex,m=[],g={graphics:null,featureIds:null,attributeInfo:b.attributeDataInfo,node:a};"geometryBuffer"in b&&null!==b.geometryBuffer?await this._addNodeBinaryPointData(a,g,b,e,m,c):"pointData"in
b&&this._addNodeLegacyPointData(a,g,b,e,m);await this._attributeOverrides.apply(g.featureIds,b.attributeDataInfo,c);a.numFeatures=g.graphics.length;this._updateNodeMemory(a);U(g);0<m.length&&(this.computeObb(a,m,l),this._controller.updateVisibility(a.index));if(!this._controller.isGeometryVisible(a))return this._cacheNodeData(g),E.resolve();if(this._verticalScale)for(const w of g.graphics)this._verticalScale(w.geometry);this._nodesAddedToStage.set(a.index,g);this.loadedGraphics.addMany(g.graphics);
this._filterNode(g);this._treeDebugger&&this._treeDebugger.update();return E.resolve()}};d.computeObb=function(a,b,c){const e=this._controller.crsIndex,l=e.isGeographic?this.view.renderSpatialReference:e;F.projectBuffer(b,c,0,b,l,0,b.length/3);a.serviceObb=ka.compute({data:b,size:3,offsetIdx:0,strideIdx:3});e.isGeographic&&F.projectVectorToVector(a.serviceObb.center,l,a.serviceObb.center,e)};d.isNodeLoaded=function(a){return this._nodesAddedToStage.has(a)};d.isNodeReloading=function(){return!1};d.updateNodeState=
function(){};d._addNodeBinaryPointData=async function(a,b,c,e,l,m){var g=await this.extractBinaryPointData(c,m);if(null==g)return E.reject();c=this._getObjectIdField();m=this._controller.crsVertex;const w=this.view.spatialReference,A=this.graphics3d.graphicsCore,{positionData:B,featureIds:D}=g;g=B.length/3;const u=[];for(let C=0;C<g;C++){var r=f.isSome(a.serviceObb)?a.serviceObb.center:[0,0,0],p=3*C,q=P.fromValues(B[p+0],B[p+1],B[p+2]);ca.add(q,q,r);a.serviceObb||l.push(q[0],q[1],q[2]);e&&this.checkExtent(e,
q);p=D[C];r={};null!=p&&(r[c]=p);p=null==p?H.generateUID():p;F.projectBuffer(q,m,0,y,w,0,1);q=L.makeDehydratedPoint(y[0],y[1],y[2],w);var t=this.loadedGraphics.get(p);f.isSome(t)?(t.level<a.level&&(x.property="geometry",x.graphic=t,x.oldValue=f.unwrap(t.geometry),x.newValue=q,t.geometry=q,A.graphicUpdateHandler(x)),u.push(t)):(t=H.generateUID(),u.push({objectId:p,uid:t,geometry:q,attributes:r,visible:!0,level:a.level}))}b.graphics=u;b.featureIds=D};d._addNodeLegacyPointData=function(a,b,c,e,l){const m=
this._getObjectIdField(),g=this._controller.crsVertex,w=this.view.spatialReference,A=[0,0,0],B=[],D=[];for(const p of c.pointData){c=p.featureDataPosition;const q=c.length;var u=p.geometries&&p.geometries[0]||va[q];const t=p.featureIds[0];if("points"!==u.params.type)continue;e&&this.checkExtent(e,c);const C={};null!=t&&(C[m]=t);const V=null==t?H.generateUID():t;let N;"Embedded"===u.type&&(N=u.params.vertexAttributes.position);for(u=0;u<N.length;u+=q){for(var r=0;r<q;r++)A[r]=c[r]+N[u+r];r=3===q;a.serviceObb||
l.push(A[0],A[1],r?A[2]:0);F.projectBuffer(A,g,0,y,w,0,1);r=L.makeDehydratedPoint(y[0],y[1],r?y[2]:void 0,w);const W=this.loadedGraphics.get(V);f.isSome(W)?D.push(W):D.push({objectId:V,uid:H.generateUID(),geometry:r,attributes:C,visible:!0})}B.push(t)}b.graphics=D;b.featureIds=B};d._updateNodeMemory=function(a){a.memory=4096+(f.isSome(a.numFeatures)?a.numFeatures*this.graphics3d.graphicsCore.usedMemoryPerGraphic:0)};d._cacheNodeData=function(a){const b=a.graphics.reduce((c,e)=>L.estimateSize(e)+c,
8*a.featureIds.length+1536);this._memCache.put(this._getMemCacheKey(a.node),a,b)};d._getMemCacheKey=function(a){return`${a.index}`};d._removeAllNodeData=function(){this._nodesAddedToStage.forEach(a=>{a&&(this._updateNodeMemory(a.node),this._cacheNodeData(a))});this._nodesAddedToStage.clear();this._treeDebugger&&this._treeDebugger.update();this.loadedGraphics.clear()};d.removeNode=function(a){if(a=this._removeNodeStageData(a))this._updateNodeMemory(a.node),this._cacheNodeData(a)};d._removeNodeStageData=
function(a){const b=this._nodesAddedToStage.get(a);if(!b)return null;this.loadedGraphics.removeMany(b.graphics);this._nodesAddedToStage.delete(a);this._treeDebugger&&this._treeDebugger.update();return b};d.loadCachedNodeData=async function(a){return this._memCache.pop(this._getMemCacheKey(a))};d.addCachedNodeData=async function(a,b,c,e){if(this._nodesAddedToStage.has(a.index))G.error("I3S node "+a.id+" already added");else return this.loadedGraphics.addMany(b.graphics),this._nodesAddedToStage.set(a.index,
b),this._updateNodeMemory(a),await this.updateAttributes(a.index,c,e),this._filterNode(b),this._treeDebugger&&this._treeDebugger.update(),E.resolve()};d.getLoadedNodeIds=function(){const a=[];this._nodesAddedToStage.forEach(b=>a.push(b.node.id));return a.sort()};d.getVisibleNodes=function(){const a=[];this._nodesAddedToStage.forEach(b=>a.push(b.node));return a};d.getLoadedNodeIndices=function(a){this._nodesAddedToStage.forEach((b,c)=>a.push(c))};d.getLoadedAttributes=function(a){if((a=this._nodesAddedToStage.get(a))&&
f.isSome(a.attributeInfo))return a.attributeInfo.loadedAttributes};d.getAttributeData=function(a){if((a=this._nodesAddedToStage.get(a))&&f.isSome(a.attributeInfo))return a.attributeInfo.attributeData};d.setAttributeData=function(a,b){(a=this._nodesAddedToStage.get(a))&&!f.isNone(a.attributeInfo)&&(a.attributeInfo.attributeData=b,this._attributeValuesChanged(a))};d.updateAttributes=async function(a,b,c){if(a=this._nodesAddedToStage.get(a))await this._attributeOverrides.apply(a.featureIds,b,c),a.attributeInfo=
b,this._attributeValuesChanged(a)};d._attributeValuesChanged=function(a){U(a);this._filterNode(a);this.graphics3d.graphicsCore.labelsEnabled&&(a=a.graphics.map(b=>b.uid),this.graphics3d.graphicsCore.updateLabelingInfo(a))};d._updateClippingExtent=function(a){this._controller&&this._controller.updateClippingArea(a);return!1};d._getObjectIdField=function(){return this.layer.objectIdField||"OBJECTID"};d._rendererChange=async function(a,b){const {layer:{fields:c}}=this,e=new Set;let l;a?(await a.collectRequiredFields(e,
c),l=Array.from(e).sort()):l=[];e.clear();let m;b?(await b.collectRequiredFields(e,c),m=Array.from(e).sort()):m=[];l.length===m.length&&l.every((g,w)=>l[w]===m[w])||this._reloadAllNodes()};d._rangeInfosChanged=function(a){null!=a&&0<a.length&&G.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")};d._filterChange=function(){this._nodesAddedToStage.forEach(a=>this._filterNode(a))};d._reloadAllNodes=function(){this._removeAllNodeData();
this._controller&&this._controller.restartNodeLoading()};d._filterNode=function(a){const b=this.parsedDefinitionExpression;for(const c of a.graphics)a=c.visible,c.visible=b?this._evaluateClause(b,c):!0,a!==c.visible&&(x.graphic=c,x.property="visible",x.oldValue=a,x.newValue=c.visible,this.graphics3d.graphicsCore.graphicUpdateHandler(x))};d._updateRequiredFields=async function(){const {layer:a,layer:{fields:b,renderer:c,labelsVisible:e},filter:l,definitionExpressionFields:m}=this,g=new Set;c&&await c.collectRequiredFields(g,
b);e&&await K.collectLabelingFields(g,a);f.isSome(l)&&await K.collectFilterFields(g,a,l);K.collectFields(g,b,m);this._set("requiredFields",Array.from(g).sort())};d._invalidateElevation=function(a){const b=this._controller.crsIndex;F.projectBoundingRect(a.extent,a.spatialReference,X,b);this._controller.updateElevationChanged(X,b)};d.createQuery=function(){const a={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return f.isSome(this.filter)?this.filter.createQuery(a):
new Q(a)};d.queryFeatures=function(a,b){return this._queryEngine.executeQuery(this._ensureQuery(a),null==b?void 0:b.signal)};d.queryObjectIds=function(a,b){return this._queryEngine.executeQueryForIds(this._ensureQuery(a),null==b?void 0:b.signal)};d.queryFeatureCount=function(a,b){return this._queryEngine.executeQueryForCount(this._ensureQuery(a),null==b?void 0:b.signal)};d.queryExtent=function(a,b){return this._queryEngine.executeQueryForExtent(this._ensureQuery(a),null==b?void 0:b.signal)};d._ensureQuery=
function(a){return this._addDefinitionExpressionToQuery(f.isNone(a)?this.createQuery():Q.from(a))};d.getUsedMemory=function(){const a=this.graphics3d&&this.graphics3d.graphicsCore;return a?a.usedMemory:0};d.getUnloadedMemory=function(){const a=this.graphics3d&&this.graphics3d.graphicsCore;return.8*((this._controller?this._controller.unloadedMemoryEstimate:0)+(a?a.unprocessedMemoryEstimate:0))};d.ignoresMemoryFactor=function(){return this._controller&&this._controller.fixedFeatureTarget};d._handleEdits=
function(a){T.processAttributeEdits(this.attributeEditingContext,a)};O._createClass(v,[{key:"maximumNumberOfFeatures",get:function(){const a=this.graphics3d&&this.graphics3d.graphicsCore&&this.graphics3d.graphicsCore.displayFeatureLimit;return a?a.maximumNumberOfFeatures:0},set:function(a){null!=a?(this._override("maximumNumberOfFeatures",a),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}},{key:"maximumNumberOfFeaturesExceeded",
get:function(){return this.suspended?!1:!!this._controller&&!this._controller.leavesReached}},{key:"hasM",get:function(){return!1}},{key:"hasZ",get:function(){return!0}},{key:"symbolUpdateType",get:function(){return this.graphics3d.graphicsCore.symbolUpdateType}},{key:"attributeEditingContext",get:function(){const a=this._getObjectIdField();return{fieldsIndex:this.layer.fieldsIndex,objectIdField:a,forEachNode:b=>this._nodesAddedToStage.forEach(c=>b(c.node,c.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo,
attributeOverrides:this._attributeOverrides,getAttributeData:b=>this.getAttributeData(b),setAttributeData:(b,c,e)=>{this.setAttributeData(b,c);b=this._nodesAddedToStage.get(b);f.isSome(e)?(e=this.loadedGraphics.get(e.attributes[a]),f.isSome(e)&&this.graphics3d.graphicsCore.recreateGraphics([e])):f.isSome(b)&&this.graphics3d.graphicsCore.recreateGraphics(b.graphics)},clearMemCache:()=>{}}}},{key:"performanceInfo",get:function(){const a={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,
totalNumberOfFeatures:-1,nodes:this._nodesAddedToStage.size,core:this.graphics3d.graphicsCore.performanceInfo};this._controller&&this._controller.updateStats(a);return a}},{key:"test",get:function(){return{controller:this._controller,numNodes:this._nodesAddedToStage.size,numFeatures:this.loadedGraphics.length}}}]);return v}(qa.DefinitionExpressionSceneLayerView(ta.PopupSceneLayerView(h.LayerView3D(ma))));k.__decorate([n.property()],h.prototype,"graphics3d",void 0);k.__decorate([n.property({type:la})],
h.prototype,"filter",void 0);k.__decorate([n.property()],h.prototype,"loadedGraphics",void 0);k.__decorate([n.property()],h.prototype,"layer",void 0);k.__decorate([n.property({aliasOf:"layer"})],h.prototype,"i3slayer",void 0);k.__decorate([n.property()],h.prototype,"_controller",void 0);k.__decorate([n.property({dependsOn:["_controller.updating","graphics3d.updating"]})],h.prototype,"updating",void 0);k.__decorate([n.property({dependsOn:["_controller.rootNodeVisible"]})],h.prototype,"suspended",void 0);
k.__decorate([n.property()],h.prototype,"holeFilling",void 0);k.__decorate([n.property(ja.updatingProgress)],h.prototype,"updatingProgress",void 0);k.__decorate([n.property({aliasOf:"_controller.updatingProgress"})],h.prototype,"updatingProgressValue",void 0);k.__decorate([n.property(J.requiredFields)],h.prototype,"requiredFields",void 0);k.__decorate([n.property(J.availableFields)],h.prototype,"availableFields",void 0);k.__decorate([n.property({type:Number,dependsOn:["graphics3d.graphicsCore.displayFeatureLimit"]})],
h.prototype,"maximumNumberOfFeatures",null);k.__decorate([n.property({readOnly:!0,dependsOn:["suspended","_controller.leavesReached"]})],h.prototype,"maximumNumberOfFeaturesExceeded",null);k.__decorate([n.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.point.lodFactor"})],h.prototype,"lodFactor",void 0);k.__decorate([n.property({readOnly:!0})],h.prototype,"hasM",null);k.__decorate([n.property({readOnly:!0})],h.prototype,"hasZ",null);k=h=k.__decorate([aa.subclass("esri.views.3d.layers.SceneLayerGraphicsView3D")],
h);const va={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},y=P.create(),x={graphic:null,property:null,oldValue:null,newValue:null},X=ea.create();return k});