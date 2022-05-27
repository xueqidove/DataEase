//>>built
define("dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/_base/json ./Anchor ./_Plugin".split(" "),function(f){f.declare("dojox.sketch.AnnotationTool",dojox.sketch._Plugin,{onMouseDown:function(a){this._omd=!0},onMouseMove:function(a,b){this._omd&&(this._cshape?this._cshape.setShape(b):(this._cshape=this.figure.surface.createRect(b).setStroke({color:"#999",width:1,style:"ShortDot"}).setFill([255,255,255,.7]),this._cshape.getEventSource().setAttribute("shape-rendering","crispEdges")))},onMouseUp:function(a){if(this._omd){this._omd=
!1;var b=this.figure;this._cshape&&(b.surface.remove(this._cshape),delete this._cshape);(b._startPoint.x!=a.pageX||b._startPoint.y!=a.pageY)&&10<Math.max(10,Math.abs(b._absEnd.x-b._start.x),Math.abs(b._absEnd.y-b._start.y))&&this._create(b._start,b._end)}},_create:function(a,b){var c=this.figure,e=c.nextKey();e=new this.annotation(c,e);e.transform={dx:c._calCol(a.x/c.zoomFactor),dy:c._calCol(a.y/c.zoomFactor)};e.end={x:c._calCol(b.x/c.zoomFactor),y:c._calCol(b.y/c.zoomFactor)};e.control&&(e.control=
{x:c._calCol(b.x/2/c.zoomFactor),y:c._calCol(b.y/2/c.zoomFactor)});c.onBeforeCreateShape(e);e.initialize();c.select(e);c.onCreateShape(e);c.history.add(dojox.sketch.CommandTypes.Create,e)}});dojox.sketch.Annotation=function(a,b){this.id=this._key=b;this.figure=a;this.mode=dojox.sketch.Annotation.Modes.View;this.boundingBox=this.shape=null;this.hasAnchors=!0;this.anchors={};this._properties={stroke:{color:"blue",width:2},font:{family:"Arial",size:16,weight:"bold"},fill:"blue",label:""};this.figure&&
this.figure.add(this)};var d=dojox.sketch.Annotation.prototype;d.constructor=dojox.sketch.Annotation;d.type=function(){return""};d.getType=function(){return dojox.sketch.Annotation};d.onRemove=function(a){this.figure.history.add(dojox.sketch.CommandTypes.Delete,this,this.serialize())};d.property=function(a,b){var c;a=a.toLowerCase();void 0!==this._properties[a]&&(c=this._properties[a]);if(1<arguments.length&&(this._properties[a]=b,c!=b))this.onPropertyChange(a,c);return c};d.onPropertyChange=function(a,
b){};d.onCreate=function(){this.figure.history.add(dojox.sketch.CommandTypes.Create,this)};d.onDblClick=function(a){a=prompt("Set new text:",this.property("label"));!1!==a&&(this.beginEdit(dojox.sketch.CommandTypes.Modify),this.property("label",a),this.draw(),this.endEdit())};d.initialize=function(){};d.destroy=function(){};d.draw=function(){};d.apply=function(a){};d.serialize=function(){};d.getBBox=function(){};d.beginEdit=function(a){this._type||(this._type=a||dojox.sketch.CommandTypes.Move,this._prevState=
this.serialize())};d.endEdit=function(){this._prevState!=this.serialize()&&this.figure.history.add(this._type,this,this._prevState);this._type=this._prevState=""};d.calculate={slope:function(a,b){return a.x-b.x?(a.y-b.y)/(a.x-b.x):0},dx:function(a,b,c){a=this.slope(a,b);return 0==a?a:c/a},dy:function(a,b,c){return this.slope(a,b)*c}};d.drawBBox=function(){var a=this.getBBox();this.boundingBox?this.boundingBox.setShape(a):(this.boundingBox=this.shape.createRect(a).moveToBack().setStroke({color:"#999",
width:1,style:"Dash"}).setFill([238,238,238,.3]),this.boundingBox.getEventSource().setAttribute("id",this.id+"-boundingBox"),this.boundingBox.getEventSource().setAttribute("shape-rendering","crispEdges"),this.figure._add(this))};d.setBinding=function(a){this.transform.dx+=a.dx;this.transform.dy+=a.dy;this.draw()};d.getTextBox=function(a){var b=this.property("font");b={fontFamily:b.family,fontSize:b.size,fontWeight:b.weight};a&&(b.fontSize=Math.floor(b.fontSize/a));return dojox.gfx._base._getTextBox(this.property("label"),
b)};d.setMode=function(a){if(this.mode!=a){this.mode=a;var b="disable";a==dojox.sketch.Annotation.Modes.Edit&&(b="enable");"enable"==b?(this.drawBBox(),this.figure._add(this)):this.boundingBox&&(this.shape&&this.shape.remove(this.boundingBox),this.boundingBox=null);for(var c in this.anchors)this.anchors[c][b]()}};d.zoom=function(a){a=a||this.figure.zoomFactor;if(this.labelShape){var b=f.clone(this.property("font"));b.size=Math.ceil(b.size/a)+"px";this.labelShape.setFont(b)}for(var c in this.anchors)this.anchors[c].zoom(a);
"vml"==dojox.gfx.renderer&&(a=1);this.pathShape&&(b=f.clone(this.property("stroke")),b.width=1<a?b.width:Math.ceil(b.width/a)+"px",this.pathShape.setStroke(b))};d.writeCommonAttrs=function(){return'id\x3d"'+this.id+'" dojoxsketch:type\x3d"'+this.type()+'" transform\x3d"translate('+this.transform.dx+","+this.transform.dy+')"'+(this.data?" \x3e\x3c![CDATA[data:"+f.toJson(this.data)+"]]":"")};d.readCommonAttrs=function(a){for(var b=0,c=a.childNodes,e;e=c[b++];)4==e.nodeType&&("properties:"==e.nodeValue.substr(0,
11)?this._properties=f.fromJson(e.nodeValue.substr(11)):"data:"==e.nodeValue.substr(0,5)?this.data=f.fromJson(e.nodeValue.substr(5)):console.error("unknown CDATA node in node ",a));a.getAttribute("transform")&&(a=a.getAttribute("transform").replace("translate(","").split(","),this.transform.dx=parseFloat(a[0],10),this.transform.dy=parseFloat(a[1],10))};dojox.sketch.Annotation.Modes={View:0,Edit:1};dojox.sketch.Annotation.register=function(a,b){var c=dojox.sketch[a+"Annotation"];dojox.sketch.registerTool(a,
function(e){f.mixin(e,{shape:a,annotation:c});return new (b||dojox.sketch.AnnotationTool)(e)})};return dojox.sketch.Annotation});