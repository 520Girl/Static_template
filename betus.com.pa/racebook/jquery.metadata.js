(function($){$.extend({metadata:{defaults:{type:'class',name:'metadata',cre:/(\{.*\})/,single:'metadata'},setType:function(type,name){this.defaults.type=type;this.defaults.name=name;},get:function(elem,opts){var data,m,e,attr,settings=$.extend({},this.defaults,opts);if(!settings.single.length){settings.single='metadata';}
data=$.data(elem,settings.single);if(data){return data;}
data="{}";if(settings.type==="class"){m=settings.cre.exec(elem.className);if(m){data=m[1];}}else if(settings.type==="elem"){if(!elem.getElementsByTagName){return undefined;}
e=elem.getElementsByTagName(settings.name);if(e.length){data=$.trim(e[0].innerHTML);}}else if(elem.getAttribute!==undefined){attr=elem.getAttribute(settings.name);if(attr){data=attr;}}
if(data.indexOf('{')<0){data="{"+data+"}";}
data=eval("("+data+")");$.data(elem,settings.single,data);return data;}}});$.fn.metadata=function(opts){return $.metadata.get(this[0],opts);};})(jQuery);