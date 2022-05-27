/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../chunks/object.js";import"../chunks/deprecate.js";import{clone as r}from"../core/lang.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/JSONSupport.js";import"../core/urlUtils.js";import{J as i}from"../chunks/jsonMap.js";import{e}from"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/mathUtils2.js";import"../chunks/colorUtils.js";import l from"../Color.js";import"./Symbol.js";import"../chunks/screenUtils.js";import"./LineSymbol.js";import"./LineSymbolMarker.js";import n from"./SimpleLineSymbol.js";import p from"./FillSymbol.js";var c;const m=new i({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});let a=c=class extends p{constructor(...o){super(...o),this.color=new l([0,0,0,.25]),this.outline=new n,this.type="simple-fill",this.style="solid"}normalizeCtorArgs(o,r,s){if(o&&"string"!=typeof o)return o;const t={};return o&&(t.style=o),r&&(t.outline=r),s&&(t.color=s),t}clone(){return new c({color:r(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}hash(){return`${super.hash()}${this.style}.${this.color&&this.color.hash()}`}};o([s()],a.prototype,"color",void 0),o([s()],a.prototype,"outline",void 0),o([e({esriSFS:"simple-fill"},{readOnly:!0})],a.prototype,"type",void 0),o([s({type:m.apiValues,json:{read:m.read,write:m.write}})],a.prototype,"style",void 0),a=c=o([t("esri.symbols.SimpleFillSymbol")],a);var u=a;export default u;
