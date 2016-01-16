"use strict";define("ember-cli-jquery-coverflow-site/app",["exports","ember","ember-resolver","ember/load-initializers","ember-cli-jquery-coverflow-site/config/environment"],function(e,t,r,n,a){var l=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:r["default"]}),(0,n["default"])(l,a["default"].modulePrefix),e["default"]=l}),define("ember-cli-jquery-coverflow-site/components/app-version",["exports","ember-cli-app-version/components/app-version","ember-cli-jquery-coverflow-site/config/environment"],function(e,t,r){var n=r["default"].APP.name,a=r["default"].APP.version;e["default"]=t["default"].extend({version:a,name:n})}),define("ember-cli-jquery-coverflow-site/components/jquery-coverflow-cover",["exports","ember-cli-jquery-coverflow/components/jquery-coverflow-cover"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("ember-cli-jquery-coverflow-site/components/jquery-coverflow",["exports","ember-cli-jquery-coverflow/components/jquery-coverflow"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("ember-cli-jquery-coverflow-site/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("ember-cli-jquery-coverflow-site/controllers/demo",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({numberOfCovers:25,covers:t["default"].computed("numberOfCovers",function(){for(var e=t["default"].A([]),r=1;r<=this.get("numberOfCovers");r++)e.push("#"+r);return e}),enableWheel:!0,innerAngle:0,innerScale:.95,outerAngle:-30,outerScale:.1,observeForRefresh:t["default"].computed("numberOfCovers",function(){return Date.now()})})}),define("ember-cli-jquery-coverflow-site/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("ember-cli-jquery-coverflow-site/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("ember-cli-jquery-coverflow-site/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("ember-cli-jquery-coverflow-site/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-cli-jquery-coverflow-site/config/environment"],function(e,t,r){e["default"]={name:"App Version",initialize:(0,t["default"])(r["default"].APP.name,r["default"].APP.version)}}),define("ember-cli-jquery-coverflow-site/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-cli-jquery-coverflow-site/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,r){e["default"]={name:"ember-data",initialize:t["default"]}}),define("ember-cli-jquery-coverflow-site/initializers/export-application-global",["exports","ember","ember-cli-jquery-coverflow-site/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0];if(r["default"].exportApplicationGlobal!==!1){var n,a=r["default"].exportApplicationGlobal;n="string"==typeof a?a:t["default"].String.classify(r["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("ember-cli-jquery-coverflow-site/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("ember-cli-jquery-coverflow-site/router",["exports","ember","ember-cli-jquery-coverflow-site/config/environment"],function(e,t,r){var n=t["default"].Router.extend({location:r["default"].locationType});n.map(function(){this.route("demo",{path:"/"})}),e["default"]=n}),define("ember-cli-jquery-coverflow-site/routes/demo",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("ember-cli-jquery-coverflow-site/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("ember-cli-jquery-coverflow-site/templates/components/jquery-coverflow-cover",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"ember-cli-jquery-coverflow-site/templates/components/jquery-coverflow-cover.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),n},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]]],locals:[],templates:[]}}())}),define("ember-cli-jquery-coverflow-site/templates/components/jquery-coverflow",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"ember-cli-jquery-coverflow-site/templates/components/jquery-coverflow.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),n},statements:[["content","yield",["loc",[null,[1,0],[1,9]]]]],locals:[],templates:[]}}())}),define("ember-cli-jquery-coverflow-site/templates/demo",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:39,column:8},end:{line:43,column:8}},moduleName:"ember-cli-jquery-coverflow-site/templates/demo.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("          ");e.appendChild(t,r);var r=e.createElement("h2"),n=e.createTextNode("\n            ");e.appendChild(r,n);var n=e.createElement("span"),a=e.createComment("");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n          ");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[1,1]),0,0),n},statements:[["content","cover",["loc",[null,[41,18],[41,27]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:38,column:6},end:{line:44,column:6}},moduleName:"ember-cli-jquery-coverflow-site/templates/demo.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","jquery-coverflow-cover",[],["classNames","mdl-shadow--4dp"],0,null,["loc",[null,[39,8],[43,35]]]]],locals:["cover"],templates:[e]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.2.0",loc:{source:null,start:{line:32,column:4},end:{line:45,column:4}},moduleName:"ember-cli-jquery-coverflow-site/templates/demo.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","each",[["get","covers",["loc",[null,[38,14],[38,20]]]]],[],0,null,["loc",[null,[38,6],[44,15]]]]],locals:[],templates:[e]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.2.0",loc:{source:null,start:{line:1,column:0},end:{line:48,column:0}},moduleName:"ember-cli-jquery-coverflow-site/templates/demo.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("div");e.setAttribute(r,"class","mdl-layout\n            mdl-js-layout\n            mdl-layout--fixed-header");var n=e.createTextNode("\n\n  ");e.appendChild(r,n);var n=e.createElement("header");e.setAttribute(n,"class","mdl-layout__header");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","mdl-layout__header-row");var l=e.createTextNode("\n      ");e.appendChild(a,l);var l=e.createElement("span");e.setAttribute(l,"class","mdl-layout-title");var o=e.createTextNode("ember-cli-jquery-coverflow");e.appendChild(l,o),e.appendChild(a,l);var l=e.createTextNode("\n      ");e.appendChild(a,l);var l=e.createElement("div");e.setAttribute(l,"class","mdl-layout-spacer"),e.appendChild(a,l);var l=e.createTextNode("\n\n      ");e.appendChild(a,l);var l=e.createElement("form"),o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createElement("div");e.setAttribute(o,"class","mdl-textfield mdl-js-textfield");var i=e.createTextNode("\n          ");e.appendChild(o,i);var i=e.createComment("");e.appendChild(o,i);var i=e.createTextNode("\n          ");e.appendChild(o,i);var i=e.createElement("label");e.setAttribute(i,"class","mdl-textfield__label");var c=e.createTextNode("Number of covers");e.appendChild(i,c),e.appendChild(o,i);var i=e.createTextNode("\n        ");e.appendChild(o,i),e.appendChild(l,o);var o=e.createTextNode("\n      ");e.appendChild(l,o),e.appendChild(a,l);var l=e.createTextNode("\n\n      ");e.appendChild(a,l);var l=e.createElement("div");e.setAttribute(l,"class","mdl-layout-spacer"),e.appendChild(a,l);var l=e.createTextNode("\n\n      ");e.appendChild(a,l);var l=e.createElement("a");e.setAttribute(l,"href","https://www.npmjs.com/package/ember-cli-jquery-coverflow"),e.setAttribute(l,"target","_blank"),e.setAttribute(l,"class","header-link npm");var o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createElement("img");e.setAttribute(o,"src","assets/images/npm.svg"),e.setAttribute(o,"alt","GitHub logo"),e.appendChild(l,o);var o=e.createTextNode("\n      ");e.appendChild(l,o),e.appendChild(a,l);var l=e.createTextNode("\n\n      ");e.appendChild(a,l);var l=e.createElement("a");e.setAttribute(l,"href","https://github.com/jessepinho/ember-cli-jquery-coverflow"),e.setAttribute(l,"target","_blank"),e.setAttribute(l,"class","header-link github");var o=e.createTextNode("\n        ");e.appendChild(l,o);var o=e.createElement("img");e.setAttribute(o,"src","assets/images/github.svg"),e.setAttribute(o,"alt","GitHub logo"),e.appendChild(l,o);var o=e.createTextNode("\n      ");e.appendChild(l,o),e.appendChild(a,l);var l=e.createTextNode("\n    ");e.appendChild(a,l),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n\n  ");e.appendChild(r,n);var n=e.createElement("main");e.setAttribute(n,"class","mdl-layout__content");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("  ");e.appendChild(n,a),e.appendChild(r,n);var n=e.createTextNode("\n");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=e.childAt(t,[0]),a=new Array(2);return a[0]=e.createMorphAt(e.childAt(n,[1,1,5,1]),1,1),a[1]=e.createMorphAt(e.childAt(n,[3]),1,1),a},statements:[["inline","input",[],["type","text","value",["subexpr","@mut",[["get","numberOfCovers",["loc",[null,[13,24],[13,38]]]]],[],[]],"classNames","mdl-textfield__input mdl-textfield--floating-label"],["loc",[null,[12,10],[14,83]]]],["block","jquery-coverflow",[],["enableWheel",["subexpr","@mut",[["get","enableWheel",["loc",[null,[32,36],[32,47]]]]],[],[]],"innerAngle",["subexpr","@mut",[["get","innerAngle",["loc",[null,[33,35],[33,45]]]]],[],[]],"innerScale",["subexpr","@mut",[["get","innerScale",["loc",[null,[34,35],[34,45]]]]],[],[]],"observeForRefresh",["subexpr","@mut",[["get","observeForRefresh",["loc",[null,[35,42],[35,59]]]]],[],[]],"outerAngle",["subexpr","@mut",[["get","outerAngle",["loc",[null,[36,35],[36,45]]]]],[],[]],"outerScale",["subexpr","@mut",[["get","outerScale",["loc",[null,[37,35],[37,45]]]]],[],[]]],0,null,["loc",[null,[32,4],[45,25]]]]],locals:[],templates:[e]}}())}),define("ember-cli-jquery-coverflow-site/config/environment",["ember"],function(e){var t="ember-cli-jquery-coverflow-site";try{var r=t+"/config/environment",n=e["default"].$('meta[name="'+r+'"]').attr("content"),a=JSON.parse(unescape(n));return{"default":a}}catch(l){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("ember-cli-jquery-coverflow-site/app")["default"].create({name:"ember-cli-jquery-coverflow-site",version:"0.0.0+14a3b47b"});