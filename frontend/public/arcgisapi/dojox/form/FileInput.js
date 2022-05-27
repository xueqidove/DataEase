//>>built
require({cache:{"url:dojox/form/resources/FileInput.html":'\x3cdiv class\x3d"dijitFileInput"\x3e\r\n\t\x3cinput id\x3d"${id}" class\x3d"dijitFileInputReal" type\x3d"file" dojoAttachPoint\x3d"fileInput" name\x3d"${name}" /\x3e\r\n\t\x3cdiv class\x3d"dijitFakeInput"\x3e\r\n\t\t\x3cinput class\x3d"dijitFileInputVisible" type\x3d"text" dojoAttachPoint\x3d"focusNode, inputNode" /\x3e\r\n\t\t\x3cdiv class\x3d"dijitInline dijitFileInputText" dojoAttachPoint\x3d"titleNode"\x3e${label}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"dijitInline dijitFileInputButton" dojoAttachPoint\x3d"cancelNode" \r\n\t\t\tdojoAttachEvent\x3d"onclick:reset"\x3e${cancelText}\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/kernel dojo/_base/fx dojo/dom-attr dojo/dom-class dojo/text!./resources/FileInput.html dijit/form/_FormWidget dijit/_Templated".split(" "),function(c,d,a,h,e,f,g,k){d.experimental("dojox.form.FileInput");return c("dojox.form.FileInput",g,{label:"Browse ...",cancelText:"Cancel",name:"uploadFile",templateString:f,startup:function(){this._listener=this.connect(this.fileInput,"onchange","_matchValue");this._keyListener=this.connect(this.fileInput,"onkeyup","_matchValue")},
postCreate:function(){},_matchValue:function(){this.inputNode.value=this.fileInput.value;this.inputNode.value&&(this.cancelNode.style.visibility="visible",a.fadeIn({node:this.cancelNode,duration:275}).play())},setLabel:function(b,l){this.titleNode.innerHTML=b},reset:function(b){this.disconnect(this._listener);this.disconnect(this._keyListener);this.fileInput&&this.domNode.removeChild(this.fileInput);a.fadeOut({node:this.cancelNode,duration:275}).play();this.fileInput=document.createElement("input");
this.fileInput.setAttribute("type","file");this.fileInput.setAttribute("id",this.id);this.fileInput.setAttribute("name",this.name);e.add(this.fileInput,"dijitFileInputReal");this.domNode.appendChild(this.fileInput);this._keyListener=this.connect(this.fileInput,"onkeyup","_matchValue");this._listener=this.connect(this.fileInput,"onchange","_matchValue");this.inputNode.value=""}})});