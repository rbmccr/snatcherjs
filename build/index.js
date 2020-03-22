"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/web.dom.iterable"),require("core-js/modules/es6.array.iterator"),require("core-js/modules/es6.object.keys"),require("core-js/modules/es7.array.includes"),require("core-js/modules/es6.string.includes"),require("core-js/modules/es6.promise"),require("core-js/modules/es6.object.to-string"),require("core-js/modules/es7.promise.finally");function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var Snatcher=/*#__PURE__*/function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,a),_defineProperty(this,"acceptedConfigKeys",["try","catch","finally","silence"]),_defineProperty(this,"acceptedConsoleMethods",["error","group","info","log","table","trace","warn"]),_defineProperty(this,"badLogTypeError","[Snatcher] The logType provided is not permitted."),_defineProperty(this,"configError","[Snatcher] Invalid config object."),_defineProperty(this,"supersedeError","[Snatcher] Function provided returns a truthy value but it is superseded by a value returned from the finally block."),this.config=b}return _createClass(a,[{key:"watch",value:function watch(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.config;if(!this._configIsValid(b))return this._disclose(b,"error",this.configError);var c,d=b.try,e=b.catch,f=b.finally;try{return c=d?this._try(b,a):a(),c}catch(a){if(e)return this._catch(b,a)}finally{if(f)return this._finally(b,c)}}},{key:"_catch",value:function _catch(a,b){var c=a.catch;c.logType&&this.acceptedConsoleMethods.includes(c.logType)?this._disclose(a,c.logType,b):c.logType&&this._disclose(a,"error",this.badLogTypeError);var d;return c.execute&&(d=c.execute()),d?d:c.provideErr?b:c.default}// check for misspelled or illegal keys OR for an improper argument type
},{key:"_configIsValid",value:function _configIsValid(a){var b=this;return this._isObject(a)&&!Object.keys(a).some(function(a){return!b.acceptedConfigKeys.includes(a)})}},{key:"_disclose",value:function _disclose(a,b,c){a.silence||console[b](c)}},{key:"_finally",value:function _finally(a,b){var c,d=a.finally;return d.execute&&(c=d.execute()),(c||d.default&&b)&&this._disclose(a,"warn",this.supersedeError),c?c:d.default}},{key:"_isObject",value:function _isObject(a){return!!a&&a===Object(a)&&a.constructor!==Array}},{key:"_try",value:function _try(a,b){var c,d=a.try;return(c=b(),c)?c:(d.execute&&(c=d.execute()),c?c:d.default)}}]),a}(),_default=Snatcher;exports.default=_default;

//# sourceMappingURL=index.js.map