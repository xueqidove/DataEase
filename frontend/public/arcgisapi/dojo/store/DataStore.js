//>>built
define("../_base/lang ../_base/declare ../Deferred ../_base/array ./util/QueryResults ./util/SimpleQueryEngine".split(" "),function(p,q,m,r,t,u){return q("dojo.store.DataStore",null,{target:"",constructor:function(b){p.mixin(this,b);if(!("idProperty"in b)){try{var d=this.store.getIdentityAttributes()}catch(a){}this.idProperty=(p.isArray(d)?d[0]:d)||this.idProperty}b=this.store.getFeatures();b["dojo.data.api.Read"]||(this.get=null);b["dojo.data.api.Identity"]||(this.getIdentity=null);b["dojo.data.api.Write"]||
(this.put=this.add=null)},idProperty:"id",store:null,queryEngine:u,_objectConverter:function(b){function d(f){for(var c={},n=a.getAttributes(f),g=0;g<n.length;g++){var h=n[g],l=a.getValues(f,h);if(1<l.length){for(h=0;h<l.length;h++){var k=l[h];"object"==typeof k&&a.isItem(k)&&(l[h]=d(k))}k=l}else k=a.getValue(f,h),"object"==typeof k&&a.isItem(k)&&(k=d(k));c[n[g]]=k}e in c||!a.getIdentity||(c[e]=a.getIdentity(f));return c}var a=this.store,e=this.idProperty;return function(f){return b(f&&d(f))}},get:function(b,
d){var a,e,f=new m;this.store.fetchItemByIdentity({identity:b,onItem:this._objectConverter(function(c){f.resolve(a=c)}),onError:function(c){f.reject(e=c)}});if(void 0!==a)return null==a?void 0:a;if(e)throw e;return f.promise},put:function(b,d){d=d||{};var a="undefined"!=typeof d.id?d.id:this.getIdentity(b),e=this.store,f=this.idProperty,c=new m;if("undefined"==typeof a){var n=e.newItem(b);e.save({onComplete:function(){c.resolve(n)},onError:function(g){c.reject(g)}})}else e.fetchItemByIdentity({identity:a,
onItem:function(g){if(g){if(!1===d.overwrite)return c.reject(Error("Overwriting existing object not allowed"));for(var h in b)h!=f&&b.hasOwnProperty(h)&&e.getValue(g,h)!=b[h]&&e.setValue(g,h,b[h])}else{if(!0===d.overwrite)return c.reject(Error("Creating new object not allowed"));g=e.newItem(b)}e.save({onComplete:function(){c.resolve(g)},onError:function(l){c.reject(l)}})},onError:function(g){c.reject(g)}});return c.promise},add:function(b,d){(d=d||{}).overwrite=!1;return this.put(b,d)},remove:function(b){var d=
this.store,a=new m;this.store.fetchItemByIdentity({identity:b,onItem:function(e){try{null==e?a.resolve(!1):(d.deleteItem(e),d.save(),a.resolve(!0))}catch(f){a.reject(f)}},onError:function(e){a.reject(e)}});return a.promise},query:function(b,d){var a=new m(function(){f.abort&&f.abort()});a.total=new m;var e=this._objectConverter(function(c){return c});var f=this.store.fetch(p.mixin({query:b,onBegin:function(c){a.total.resolve(c)},onComplete:function(c){a.resolve(r.map(c,e))},onError:function(c){a.reject(c)}},
d));return t(a)},getIdentity:function(b){return b[this.idProperty]}})});