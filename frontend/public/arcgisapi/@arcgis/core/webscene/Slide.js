/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../chunks/object.js";import"../chunks/deprecate.js";import{clone as e}from"../core/lang.js";import"../config.js";import{L as i,i as s}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{eachAlways as o,createAbortController as n,onAbortOrThrow as a,isAbortError as p}from"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/compilerUtils.js";import{I as l,e as m}from"../chunks/ensureType.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import u from"../core/Collection.js";import{r as h}from"../chunks/collectionUtils.js";import{a as d}from"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import{r as y}from"../chunks/asyncUtils.js";import"../chunks/loadAll.js";import"../core/urlUtils.js";import{cast as g}from"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../kernel.js";import"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import j from"../Basemap.js";import"../chunks/writeUtils.js";import"../chunks/mathUtils2.js";import{c as v}from"../chunks/vec3f64.js";import"../chunks/common.js";import{h as b}from"../chunks/vec3.js";import{m as w}from"../chunks/mathUtils.js";import"../Camera.js";import"../chunks/colorUtils.js";import"../Color.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../chunks/Identifiable.js";import{t as f,o as k}from"../chunks/opacityUtils.js";import L from"../Ground.js";import{e as T,a as _}from"../chunks/basemapUtils.js";import U from"../layers/Layer.js";import"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/timeUtils.js";import"../TimeExtent.js";import C from"../Viewpoint.js";import{T as x}from"../chunks/Thumbnail2.js";import S from"./Lighting.js";import{i as I}from"../chunks/OperationalLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/commonProperties2.js";var P;let E=P=class extends d{constructor(){super(...arguments),this.text=""}clone(){return new P({text:this.text})}};t([r({type:String,json:{write:!0}})],E.prototype,"text",void 0),E=P=t([c("esri.webscene.support.Description")],E);var R,V=E;let D=R=class extends d{constructor(){super(...arguments),this.lighting=new S}clone(){return new R({lighting:S.prototype.clone.call(this.lighting)})}};var A;t([r({type:S,json:{write:!0}})],D.prototype,"lighting",void 0),D=R=t([c("esri.webscene.Environment")],D);let M=A=class extends d{constructor(){super(...arguments),this.opacity=null}clone(){return new A({opacity:this.opacity})}cloneAndApplyTo(t){return null==this.opacity||((t=null!=t?t.clone():new L).opacity=this.opacity),t}static fromGround(t){return new A({opacity:t.opacity})}};t([r({type:Number,json:{type:l,read:{reader:f,source:"transparency"},write:{writer:(t,e)=>{e.transparency=k(t)},target:"transparency"}}})],M.prototype,"opacity",void 0),M=A=t([c("esri.webscene.support.SlideGround")],M);var q,G=M;let O=q=class extends d{constructor(t){super(t),this.id="",this.sublayerIds=null}clone(){return new q({id:this.id,sublayerIds:e(this.sublayerIds)})}};t([r({type:String,json:{write:!0}})],O.prototype,"id",void 0),t([r({type:[l],json:{read:{source:"subLayerIds"},write:{target:"subLayerIds"}}})],O.prototype,"sublayerIds",void 0),O=q=t([c("esri.webscene.support.SlideVisibleLayer")],O);var F,B=O;let H=F=class extends d{constructor(){super(...arguments),this.text=""}clone(){return new F({text:this.text})}};t([r({type:String,json:{write:{isRequired:!0}}})],H.prototype,"text",void 0),H=F=t([c("esri.webscene.support.Title")],H);var N=H;let Q=0;const W=u.ofType(B),z=i.getLogger("esri.webscene.Slide");let J=class extends d{constructor(t){super(t),this._applyToController=null,this.id=Date.now().toString(16)+"-slide-"+Q++,this.title=new N,this.description=new V,this.thumbnail=new x,this.viewpoint=null,this.basemap=null,this.ground=null,this.environment=new D,this.visibleLayers=new W}destroy(){this.visibleLayers.removeAll(),this.basemap=null,this.thumbnail&&this.thumbnail.destroy(),this.description=null,this.title=null,this.thumbnail=null}castTitle(t){return"string"==typeof t?new N({text:t}):m(N,t)}castDescription(t){return"string"==typeof t?new V({text:t}):m(V,t)}castThumbnail(t){return"string"==typeof t?new x({url:t}):m(x,t)}castBasemap(t){return T(t)}set visibleLayers(t){this._set("visibleLayers",h(t,this._get("visibleLayers"),W))}castVisibleLayers(t){return t&&"function"==typeof t.map?t.map((t=>{if("string"==typeof t)return{id:t};if(t instanceof U){const e=X(t);return{id:t.id,sublayerIds:e}}return t.id?{id:t.id,sublayerIds:t.sublayerIds}:(z.warn('Invalid visible layer, expected { id }, Layer or "id"'),t)})):null}clone(){return new(0,this.constructor)({id:this.id,title:this.title.clone(),thumbnail:this.thumbnail.clone(),description:this.description&&this.description.clone()||null,viewpoint:this.viewpoint&&this.viewpoint.clone()||null,basemap:this.basemap&&this.basemap.clone()||null,ground:this.ground&&this.ground.clone()||null,visibleLayers:this.visibleLayers.clone(),environment:this.environment&&this.environment.clone()||null})}_updateVisibleLayersFrom(t){const e=[];return o(this._allLayers(t.map).map((i=>t.whenLayerView(i).then((t=>{if(t.visible){const s=X(i);e.push(new B({id:t.layer.id,sublayerIds:s}))}})))).toArray()).then((()=>{this.visibleLayers.removeAll(),this.visibleLayers.addMany(e)}))}updateFrom(t,e){return e={screenshot:{format:"png",quality:80,width:120,height:75,disableDecorations:!0,...e&&e.screenshot}},t.when((()=>(this.viewpoint=t.viewpoint.clone(),this.environment.lighting=S.prototype.clone.apply(t.environment.lighting),this.basemap=t.map.basemap&&t.map.basemap.clone()||null,this.ground=t.map.ground?G.fromGround(t.map.ground):null,this._updateVisibleLayersFrom(t)))).then((()=>t.takeScreenshot(e.screenshot))).then((t=>(this.thumbnail=new x({url:t.dataUrl}),this)))}async applyTo(t,e){var i;this._applyToController&&this._applyToController.abort();let s=n();this._applyToController=s;let r=a(e,(()=>s.abort()));const o={animate:!0,...e,signal:this._applyToController.signal},p=await y((async()=>{await this._applyBasemap(t,o),this._applyLayerVisibility(t),this._applyGround(t),await this._applyViewpoint(t,o)})());if(this._applyToController===s&&(this._applyToController=null),null==(i=r)||i.remove(),r=null,s=null,!1===p.ok)throw p.error;return this}async _applyBasemap(t,e){if(this.basemap){try{await this.basemap.load(e)}catch(t){if(p(t))throw t}t.map.basemap=_(this.basemap,t.map.basemap)}}_applyGround(t){this.ground&&(t.map.ground=this.ground.cloneAndApplyTo(t.map.ground))}_allLayers(t){const e=new u;return this._collectLayers(t,e),this._collectLayers(t.ground,e),e}_collectLayers(t,e){t.layers.forEach((t=>{if(!I(t))return;e.add(t);const i=t;i.layers&&this._collectLayers(i,e)}))}_applyLayerVisibility(t){if(!this.visibleLayers)return;this._allLayers(t.map).forEach((t=>{const e=this.visibleLayers.find((e=>e.id===t.id));t.visible=null!=e;const i=e&&e.sublayerIds,s=K(t);i&&s&&s.forEach((t=>t.visible=i.indexOf(t.id)>=0))}))}async _applyViewpoint(t,e){if(this.viewpoint&&!e.ignoreViewpoint){if(s(this.viewpoint.camera)&&(this.viewpoint.camera.fov=t.camera.fov),e.animate&&this.get("environment.lighting.date"))return void await this._animateToLighting(t,e);e.animate&&(t.environment.updateLighting(this.environment.lighting.clone()),await t.goTo(this.viewpoint,e)),t.viewpoint=this.viewpoint}t.environment.updateLighting(this.environment.lighting.clone())}async _animateToLighting(t,e){let i=null;"global"===t.viewingMode&&(i=this._animateLightingWithCamera(t)),t.environment.lighting.cameraTrackingEnabled=!1,t.environment.lighting.directShadowsEnabled=this.environment.lighting.directShadowsEnabled,null!=this.environment.lighting.displayUTCOffset&&(t.environment.lighting.displayUTCOffset=this.environment.lighting.displayUTCOffset);const s=t.goTo(this.viewpoint,e),r=()=>{i&&i.remove(),t.environment.lighting.cameraTrackingEnabled=!0};return s.then((()=>{t.environment.updateLighting(this.environment.lighting.clone()),r()}),(t=>{throw r(),t}))}_getTime(t){return[t.getTime(),3600*t.getUTCHours()+60*t.getUTCMinutes()+t.getUTCSeconds()]}_setTime(t,e,i){return t.setTime(e),t.setUTCHours(i/3600),t.setUTCMinutes(i%3600/60),t.setUTCSeconds(i%3600%60),t}_animateLightingWithCamera(t){const e=new Date(t.environment.lighting.date.toString()),[i,r]=this._getTime(e),[o,n]=this._getTime(this.environment.lighting.date),a=function(t,e){let i=e-t;i>43200&&(i-=86400);i<-43200&&(i+=86400);return i}(r,n),p=t.renderCoordsHelper,l=v();p.toRenderCoords(t.camera.position,l);const m=v(),c=v();s(this.viewpoint.camera)&&p.toRenderCoords(this.viewpoint.camera.position,m);const u=new Date;return t.watch("camera",(e=>{p.toRenderCoords(e.position,c);const s=b(l,c),n=b(m,c);let h=0;s+n!==0&&(h=s/(s+n));const d=i+(o-i)*h,y=function(t,e){return w(t+e,86400)}(r,a*h);t.environment.lighting.date=this._setTime(u,d,y)}))}static createFrom(t,e){return(new this).updateFrom(t,e)}};function K(t){if("building-scene"===t.type||"map-image"===t.type)return t.allSublayers.toArray()}function X(t){const e=K(t);if(e)return e.filter((t=>t.visible)).map((t=>t.id))}t([r({type:String,json:{write:{isRequired:!0}}})],J.prototype,"id",void 0),t([r({type:N,json:{default:()=>new N({text:""}),write:{isRequired:!0}}})],J.prototype,"title",void 0),t([g("title")],J.prototype,"castTitle",null),t([r({type:V,json:{write:{overridePolicy:t=>({enabled:!(!t||!t.text)})}}})],J.prototype,"description",void 0),t([g("description")],J.prototype,"castDescription",null),t([r({type:x,json:{default:()=>new x({url:""}),write:{isRequired:!0}}})],J.prototype,"thumbnail",void 0),t([g("thumbnail")],J.prototype,"castThumbnail",null),t([r({type:C,nonNullable:!0,json:{write:{isRequired:!0}}})],J.prototype,"viewpoint",void 0),t([r({type:j,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],J.prototype,"basemap",void 0),t([g("basemap")],J.prototype,"castBasemap",null),t([r({type:G,json:{write:!0}})],J.prototype,"ground",void 0),t([r({type:W,json:{write:{isRequired:!0}}})],J.prototype,"visibleLayers",null),t([g("visibleLayers")],J.prototype,"castVisibleLayers",null),t([r({type:D,json:{write:!0}})],J.prototype,"environment",void 0),J=t([c("esri.webscene.Slide")],J);var Y=J;export default Y;
