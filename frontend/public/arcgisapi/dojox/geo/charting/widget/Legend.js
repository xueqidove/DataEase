//>>built
define("dojo/_base/kernel dojo/_base/lang dojo/_base/array dojo/_base/declare dojo/_base/html dojo/dom dojo/dom-construct dojo/dom-class dojo/_base/window dijit/_Widget".split(" "),function(q,r,l,m,t,n,g,h,a,p){return m("dojox.geo.charting.widget.Legend",p,{horizontal:!0,legendBody:null,swatchSize:18,map:null,postCreate:function(){this.map&&(this.series=this.map.series,this.domNode.parentNode||n.byId(this.map.container).appendChild(this.domNode),this.refresh())},buildRendering:function(){this.domNode=
g.create("table",{role:"group","class":"dojoxLegendNode"});this.legendBody=g.create("tbody",null,this.domNode);this.inherited(arguments)},refresh:function(){for(;this.legendBody.lastChild;)g.destroy(this.legendBody.lastChild);this.horizontal&&(h.add(this.domNode,"dojoxLegendHorizontal"),this._tr=a.doc.createElement("tr"),this.legendBody.appendChild(this._tr));var b=this.series;0!=b.length&&l.forEach(b,function(c){this._addLabel(c.color,c.name)},this)},_addLabel:function(b,c){var d=a.doc.createElement("td"),
e=a.doc.createElement("td"),f=a.doc.createElement("div");h.add(d,"dojoxLegendIcon");h.add(e,"dojoxLegendText");f.style.width=this.swatchSize+"px";f.style.height=this.swatchSize+"px";d.appendChild(f);if(this.horizontal)this._tr.appendChild(d),this._tr.appendChild(e);else{var k=a.doc.createElement("tr");this.legendBody.appendChild(k);k.appendChild(d);k.appendChild(e)}f.style.background=b;e.innerHTML=String(c)}})});