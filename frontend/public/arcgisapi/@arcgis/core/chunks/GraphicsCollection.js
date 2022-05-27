/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./object.js";import"./Logger.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import t from"../core/Collection.js";import{c as s,r as n}from"./collectionUtils.js";import"../core/urlUtils.js";import"./resourceExtension.js";import i from"../Graphic.js";const l=t.ofType(i);let a=class extends l{constructor(e){super(e),this.on("before-add",(e=>{e.item||e.preventDefault()})),this.on("after-add",(e=>this._own(e.item))),this.on("after-remove",(({item:e})=>{e.layer=null}))}destroy(){this._unownAll()}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._unownAll(),this._set("owner",e),this._ownAll())}_createNewInstance(e){return new l(e)}_ownAll(){this.items.forEach((e=>this._own(e)))}_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_unownAll(){this.items.forEach((e=>this._unown(e)))}_unown(e){e.layer===this.owner&&(e.layer=null)}};e([r()],a.prototype,"owner",null),a=e([o("esri.support.GraphicsCollection")],a);const c=(e="graphics")=>({type:a,cast:s,set(r){const o=n(r,this._get(e),a);o.owner=this,this._set(e,o)}});var p=a;export{p as G,a,c as g};
