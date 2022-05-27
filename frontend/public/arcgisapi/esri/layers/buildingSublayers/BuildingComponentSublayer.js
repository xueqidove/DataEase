// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/maybe ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/Error ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/promiseUtils ../../geometry/SpatialReference ../../geometry/Extent ../../PopupTemplate ../../request ../../core/Promise ../../core/Loadable ../../renderers/Renderer ../../renderers/ClassBreaksRenderer ../../renderers/UniqueValueRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/SimpleRenderer ../../renderers/support/types ../../renderers/support/jsonUtils ../../symbols/support/ElevationInfo ../support/commonProperties ../support/FieldsIndex ../support/fieldProperties ../../support/popupUtils ../../tasks/support/Query ../FeatureLayer ./BuildingSublayer ../support/capabilities ../support/I3SLayerDefinitions".split(" "),
function(p,c,n,h,O,P,d,v,w,x,y,q,Q,R,S,r,z,A,B,C,b,D,T,U,V,W,X,Y,Z,E,aa,F,G,H,I,J,K,t,L,M,k){n=I.defineFieldProperties();b=function(u){function l(a){a=u.call(this,a)||this;a.type="building-component";a.nodePages=null;a.materialDefinitions=null;a.textureSetDefinitions=null;a.geometryDefinitions=null;a.serviceUpdateTimeStamp=null;a.fields=null;a.associatedLayer=null;a.outFields=null;a.listMode="show";a.renderer=null;a.definitionExpression=null;a.popupEnabled=!0;a.popupTemplate=null;a.layerType="3d-object";
return a}p._inheritsLoose(l,u);var e=l.prototype;e.readAssociatedLayer=function(a,f){a=this.layer.associatedFeatureServiceItem;f=f.associatedLayerID;return h.isSome(a)&&"number"===typeof f?new t({portalItem:a,layerId:f}):null};e.load=function(a){a=h.isSome(a)?a.signal:null;this.addResolvingPromise(this._fetchService(a));return r.resolve(this)};e.createPopupTemplate=function(a){return J.createPopupTemplate(this,a)};e._fetchService=async function(a){a=(await C(this.parsedUrl.path,{query:{f:"json"},
responseType:"json",signal:a})).data;this.read(a,{origin:"service",url:this.parsedUrl})};e.getField=function(a){return this.fieldsIndex.get(a)};e.getFieldDomain=function(a){return(a=this.getField(a))&&a.domain?a.domain:null};e.createQuery=function(){const a=new K;"mesh"!==this.geometryType&&(a.returnGeometry=!0,a.returnZ=!0);a.where=this.definitionExpression||"1\x3d1";a.sqlFormat="standard";return a};e.queryExtent=function(a,f){return this._getAssociatedLayerForQuery().then(g=>g.queryExtent(a||this.createQuery(),
f))};e.queryFeatureCount=function(a,f){return this._getAssociatedLayerForQuery().then(g=>g.queryFeatureCount(a||this.createQuery(),f))};e.queryFeatures=function(a,f){return this._getAssociatedLayerForQuery().then(g=>g.queryFeatures(a||this.createQuery(),f)).then(g=>{if(g&&g.features)for(const m of g.features)m.layer=this.layer,m.sourceLayer=this;return g})};e.queryObjectIds=function(a,f){return this._getAssociatedLayerForQuery().then(g=>g.queryObjectIds(a||this.createQuery(),f))};e.getFieldUsageInfo=
function(a){return this.fieldsIndex.has(a)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:h.isSome(this.associatedLayer)}};e._getAssociatedLayerForQuery=function(){const a=this.associatedLayer;return h.isSome(a)&&a.loaded?r.resolve(a):this._loadAssociatedLayerForQuery()};e._loadAssociatedLayerForQuery=async function(){await this.load();if(h.isNone(this.associatedLayer))throw new q("buildingscenelayer:query-not-available",
"BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(a){throw new q("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:a});}return this.associatedLayer};p._createClass(l,[{key:"parsedUrl",get:function(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}},{key:"fieldsIndex",
get:function(){return new H(this.fields)}},{key:"objectIdField",get:function(){if(null!=this.fields)for(const a of this.fields)if("oid"===a.type)return a.name;return null}},{key:"displayField",get:function(){return h.isSome(this.associatedLayer)?this.associatedLayer.displayField:null}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"geometryType",get:function(){return"3d-object"===this.layerType?"mesh":"point"}},{key:"profile",get:function(){return"3d-object"===
this.layerType?"mesh-pyramids":"points"}},{key:"capabilities",get:function(){const a=h.isSome(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:M.zeroCapabilities,{query:f,data:{supportsZ:g,supportsM:m,isVersioned:N}}=a;return{query:f,data:{supportsZ:g,supportsM:m,isVersioned:N}}}}]);return l}(D.LoadableMixin(b.EsriPromiseMixin(L)));c.__decorate([d.property({readOnly:!0,dependsOn:["layer","id"]})],b.prototype,"parsedUrl",null);c.__decorate([d.property({type:k.I3SNodePageDefinition,
readOnly:!0})],b.prototype,"nodePages",void 0);c.__decorate([d.property({type:[k.I3SMaterialDefinition],readOnly:!0})],b.prototype,"materialDefinitions",void 0);c.__decorate([d.property({type:[k.I3STextureSetDefinition],readOnly:!0})],b.prototype,"textureSetDefinitions",void 0);c.__decorate([d.property({type:[k.I3SGeometryDefinition],readOnly:!0})],b.prototype,"geometryDefinitions",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"serviceUpdateTimeStamp",void 0);c.__decorate([d.property({readOnly:!0})],
b.prototype,"store",void 0);c.__decorate([d.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],b.prototype,"rootNode",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"attributeStorageInfo",void 0);c.__decorate([d.property(n.fields)],b.prototype,"fields",void 0);c.__decorate([d.property({readOnly:!0,dependsOn:["fields"]})],b.prototype,"fieldsIndex",null);c.__decorate([d.property({readOnly:!0,type:t})],b.prototype,"associatedLayer",void 0);c.__decorate([x.reader("service",
"associatedLayer",["associatedLayerID"])],b.prototype,"readAssociatedLayer",null);c.__decorate([d.property(n.outFields)],b.prototype,"outFields",void 0);c.__decorate([d.property({type:String,dependsOn:["fields"],readOnly:!0})],b.prototype,"objectIdField",null);c.__decorate([d.property({readOnly:!0,type:String,json:{read:!1},dependsOn:["associatedLayer.displayField"]})],b.prototype,"displayField",null);c.__decorate([d.property({readOnly:!0,type:A,aliasOf:"layer.fullExtent"})],b.prototype,"fullExtent",
void 0);c.__decorate([d.property({readOnly:!0,type:z,aliasOf:"layer.spatialReference"})],b.prototype,"spatialReference",void 0);c.__decorate([d.property({readOnly:!0,aliasOf:"layer.version"})],b.prototype,"version",void 0);c.__decorate([d.property({readOnly:!0,type:F,aliasOf:"layer.elevationInfo"})],b.prototype,"elevationInfo",void 0);c.__decorate([d.property({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],b.prototype,"minScale",void 0);c.__decorate([d.property({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],
b.prototype,"maxScale",void 0);c.__decorate([d.property({type:["hide","show"],json:{write:!0}})],b.prototype,"listMode",void 0);c.__decorate([d.property({types:E.webSceneRendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],b.prototype,"renderer",void 0);c.__decorate([d.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],
b.prototype,"definitionExpression",void 0);c.__decorate([d.property(G.popupEnabled)],b.prototype,"popupEnabled",void 0);c.__decorate([d.property({type:B,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],b.prototype,"popupTemplate",void 0);c.__decorate([d.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],b.prototype,"normalReferenceFrame",void 0);c.__decorate([d.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title"]})],
b.prototype,"defaultPopupTemplate",null);c.__decorate([d.property({json:{write:!1}}),w.enumeration(new v.JSONMap({"3DObject":"3d-object",Point:"point"}))],b.prototype,"layerType",void 0);c.__decorate([d.property({dependsOn:["layerType"]})],b.prototype,"geometryType",null);c.__decorate([d.property({dependsOn:["layerType"]})],b.prototype,"profile",null);c.__decorate([d.property({readOnly:!0,json:{read:!1},dependsOn:["associatedLayer.capabilities"]})],b.prototype,"capabilities",null);return b=c.__decorate([y.subclass("esri.layers.buildingSublayers.BuildingComponentSublayer")],
b)});