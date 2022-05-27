/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../chunks/object.js";import"../chunks/deprecate.js";import{clone as o}from"../core/lang.js";import"../config.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import{a as s}from"../chunks/JSONSupport.js";import"../core/urlUtils.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../webdoc/applicationProperties/Search.js";import"../chunks/fieldType.js";import"../webdoc/applicationProperties/SearchLayerField.js";import"../webdoc/applicationProperties/SearchLayer.js";import"../webdoc/applicationProperties/SearchTableField.js";import"../webdoc/applicationProperties/SearchTable.js";import t from"../webdoc/applicationProperties/Viewing.js";var p;let c=p=class extends s{constructor(r){super(r),this.editing=null,this.offline=null,this.viewing=null}clone(){return new p(o({editing:this.editing,offline:this.offline,viewing:this.viewing}))}};r([i({json:{write:!0}})],c.prototype,"editing",void 0),r([i({json:{write:!0}})],c.prototype,"offline",void 0),r([i({type:t,json:{write:!0}})],c.prototype,"viewing",void 0),c=p=r([e("esri.webmap.ApplicationProperties")],c);var n=c;export default n;
