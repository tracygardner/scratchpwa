/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-vm/src/extension-support/extension-worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-vm/src/extension-support/extension-worker.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./node_modules/scratch-vm/src/extension-support/extension-worker.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-env worker */\nvar ArgumentType = __webpack_require__(/*! ../extension-support/argument-type */ \"./node_modules/scratch-vm/src/extension-support/argument-type.js\");\n\nvar BlockType = __webpack_require__(/*! ../extension-support/block-type */ \"./node_modules/scratch-vm/src/extension-support/block-type.js\");\n\nvar dispatch = __webpack_require__(/*! ../dispatch/worker-dispatch */ \"./node_modules/scratch-vm/src/dispatch/worker-dispatch.js\");\n\nvar TargetType = __webpack_require__(/*! ../extension-support/target-type */ \"./node_modules/scratch-vm/src/extension-support/target-type.js\");\n\nvar ExtensionWorker = /*#__PURE__*/function () {\n  function ExtensionWorker() {\n    var _this = this;\n\n    _classCallCheck(this, ExtensionWorker);\n\n    this.nextExtensionId = 0;\n    this.initialRegistrations = [];\n    dispatch.waitForConnection.then(function () {\n      dispatch.call('extensions', 'allocateWorker').then(function (x) {\n        var _x = _slicedToArray(x, 2),\n            id = _x[0],\n            extension = _x[1];\n\n        _this.workerId = id;\n\n        try {\n          importScripts(extension);\n          var initialRegistrations = _this.initialRegistrations;\n          _this.initialRegistrations = null;\n          Promise.all(initialRegistrations).then(function () {\n            return dispatch.call('extensions', 'onWorkerInit', id);\n          });\n        } catch (e) {\n          dispatch.call('extensions', 'onWorkerInit', id, e);\n        }\n      });\n    });\n    this.extensions = [];\n  }\n\n  _createClass(ExtensionWorker, [{\n    key: \"register\",\n    value: function register(extensionObject) {\n      var extensionId = this.nextExtensionId++;\n      this.extensions.push(extensionObject);\n      var serviceName = \"extension.\".concat(this.workerId, \".\").concat(extensionId);\n      var promise = dispatch.setService(serviceName, extensionObject).then(function () {\n        return dispatch.call('extensions', 'registerExtensionService', serviceName);\n      });\n\n      if (this.initialRegistrations) {\n        this.initialRegistrations.push(promise);\n      }\n\n      return promise;\n    }\n  }]);\n\n  return ExtensionWorker;\n}();\n\nglobal.Scratch = global.Scratch || {};\nglobal.Scratch.ArgumentType = ArgumentType;\nglobal.Scratch.BlockType = BlockType;\nglobal.Scratch.TargetType = TargetType;\n/**\n * Expose only specific parts of the worker to extensions.\n */\n\nvar extensionWorker = new ExtensionWorker();\nglobal.Scratch.extensions = {\n  register: extensionWorker.register.bind(extensionWorker)\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://GUI/./node_modules/scratch-vm/src/extension-support/extension-worker.js?./node_modules/babel-loader/lib??ref--4");

/***/ }),

/***/ "./node_modules/microee/index.js":
/*!***************************************!*\
  !*** ./node_modules/microee/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function M() { this._events = {}; }\nM.prototype = {\n  on: function(ev, cb) {\n    this._events || (this._events = {});\n    var e = this._events;\n    (e[ev] || (e[ev] = [])).push(cb);\n    return this;\n  },\n  removeListener: function(ev, cb) {\n    var e = this._events[ev] || [], i;\n    for(i = e.length-1; i >= 0 && e[i]; i--){\n      if(e[i] === cb || e[i].cb === cb) { e.splice(i, 1); }\n    }\n  },\n  removeAllListeners: function(ev) {\n    if(!ev) { this._events = {}; }\n    else { this._events[ev] && (this._events[ev] = []); }\n  },\n  listeners: function(ev) {\n    return (this._events ? this._events[ev] || [] : []);\n  },\n  emit: function(ev) {\n    this._events || (this._events = {});\n    var args = Array.prototype.slice.call(arguments, 1), i, e = this._events[ev] || [];\n    for(i = e.length-1; i >= 0 && e[i]; i--){\n      e[i].apply(this, args);\n    }\n    return this;\n  },\n  when: function(ev, cb) {\n    return this.once(ev, cb, true);\n  },\n  once: function(ev, cb, when) {\n    if(!cb) return this;\n    function c() {\n      if(!when) this.removeListener(ev, c);\n      if(cb.apply(this, arguments) && when) this.removeListener(ev, c);\n    }\n    c.cb = cb;\n    this.on(ev, c);\n    return this;\n  }\n};\nM.mixin = function(dest) {\n  var o = M.prototype, k;\n  for (k in o) {\n    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);\n  }\n};\nmodule.exports = M;\n\n\n//# sourceURL=webpack://GUI/./node_modules/microee/index.js?");

/***/ }),

/***/ "./node_modules/minilog/lib/common/filter.js":
/*!***************************************************!*\
  !*** ./node_modules/minilog/lib/common/filter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// default filter\nvar Transform = __webpack_require__(/*! ./transform.js */ \"./node_modules/minilog/lib/common/transform.js\");\n\nvar levelMap = { debug: 1, info: 2, warn: 3, error: 4 };\n\nfunction Filter() {\n  this.enabled = true;\n  this.defaultResult = true;\n  this.clear();\n}\n\nTransform.mixin(Filter);\n\n// allow all matching, with level >= given level\nFilter.prototype.allow = function(name, level) {\n  this._white.push({ n: name, l: levelMap[level] });\n  return this;\n};\n\n// deny all matching, with level <= given level\nFilter.prototype.deny = function(name, level) {\n  this._black.push({ n: name, l: levelMap[level] });\n  return this;\n};\n\nFilter.prototype.clear = function() {\n  this._white = [];\n  this._black = [];\n  return this;\n};\n\nfunction test(rule, name) {\n  // use .test for RegExps\n  return (rule.n.test ? rule.n.test(name) : rule.n == name);\n};\n\nFilter.prototype.test = function(name, level) {\n  var i, len = Math.max(this._white.length, this._black.length);\n  for(i = 0; i < len; i++) {\n    if(this._white[i] && test(this._white[i], name) && levelMap[level] >= this._white[i].l) {\n      return true;\n    }\n    if(this._black[i] && test(this._black[i], name) && levelMap[level] <= this._black[i].l) {\n      return false;\n    }\n  }\n  return this.defaultResult;\n};\n\nFilter.prototype.write = function(name, level, args) {\n  if(!this.enabled || this.test(name, level)) {\n    return this.emit('item', name, level, args);\n  }\n};\n\nmodule.exports = Filter;\n\n\n//# sourceURL=webpack://GUI/./node_modules/minilog/lib/common/filter.js?");

/***/ }),

/***/ "./node_modules/minilog/lib/common/minilog.js":
/*!****************************************************!*\
  !*** ./node_modules/minilog/lib/common/minilog.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Transform = __webpack_require__(/*! ./transform.js */ \"./node_modules/minilog/lib/common/transform.js\"),\n    Filter = __webpack_require__(/*! ./filter.js */ \"./node_modules/minilog/lib/common/filter.js\");\n\nvar log = new Transform(),\n    slice = Array.prototype.slice;\n\nexports = module.exports = function create(name) {\n  var o   = function() { log.write(name, undefined, slice.call(arguments)); return o; };\n  o.debug = function() { log.write(name, 'debug', slice.call(arguments)); return o; };\n  o.info  = function() { log.write(name, 'info',  slice.call(arguments)); return o; };\n  o.warn  = function() { log.write(name, 'warn',  slice.call(arguments)); return o; };\n  o.error = function() { log.write(name, 'error', slice.call(arguments)); return o; };\n  o.log   = o.debug; // for interface compliance with Node and browser consoles\n  o.suggest = exports.suggest;\n  o.format = log.format;\n  return o;\n};\n\n// filled in separately\nexports.defaultBackend = exports.defaultFormatter = null;\n\nexports.pipe = function(dest) {\n  return log.pipe(dest);\n};\n\nexports.end = exports.unpipe = exports.disable = function(from) {\n  return log.unpipe(from);\n};\n\nexports.Transform = Transform;\nexports.Filter = Filter;\n// this is the default filter that's applied when .enable() is called normally\n// you can bypass it completely and set up your own pipes\nexports.suggest = new Filter();\n\nexports.enable = function() {\n  if(exports.defaultFormatter) {\n    return log.pipe(exports.suggest) // filter\n              .pipe(exports.defaultFormatter) // formatter\n              .pipe(exports.defaultBackend); // backend\n  }\n  return log.pipe(exports.suggest) // filter\n            .pipe(exports.defaultBackend); // formatter\n};\n\n\n\n//# sourceURL=webpack://GUI/./node_modules/minilog/lib/common/minilog.js?");

/***/ }),

/***/ "./node_modules/minilog/lib/common/transform.js":
/*!******************************************************!*\
  !*** ./node_modules/minilog/lib/common/transform.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var microee = __webpack_require__(/*! microee */ \"./node_modules/microee/index.js\");\n\n// Implements a subset of Node's stream.Transform - in a cross-platform manner.\nfunction Transform() {}\n\nmicroee.mixin(Transform);\n\n// The write() signature is different from Node's\n// --> makes it much easier to work with objects in logs.\n// One of the lessons from v1 was that it's better to target\n// a good browser rather than the lowest common denominator\n// internally.\n// If you want to use external streams, pipe() to ./stringify.js first.\nTransform.prototype.write = function(name, level, args) {\n  this.emit('item', name, level, args);\n};\n\nTransform.prototype.end = function() {\n  this.emit('end');\n  this.removeAllListeners();\n};\n\nTransform.prototype.pipe = function(dest) {\n  var s = this;\n  // prevent double piping\n  s.emit('unpipe', dest);\n  // tell the dest that it's being piped to\n  dest.emit('pipe', s);\n\n  function onItem() {\n    dest.write.apply(dest, Array.prototype.slice.call(arguments));\n  }\n  function onEnd() { !dest._isStdio && dest.end(); }\n\n  s.on('item', onItem);\n  s.on('end', onEnd);\n\n  s.when('unpipe', function(from) {\n    var match = (from === dest) || typeof from == 'undefined';\n    if(match) {\n      s.removeListener('item', onItem);\n      s.removeListener('end', onEnd);\n      dest.emit('unpipe');\n    }\n    return match;\n  });\n\n  return dest;\n};\n\nTransform.prototype.unpipe = function(from) {\n  this.emit('unpipe', from);\n  return this;\n};\n\nTransform.prototype.format = function(dest) {\n  throw new Error([\n    'Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:',\n    'var Minilog = require(\\'minilog\\');',\n    'Minilog',\n    '  .pipe(Minilog.backends.console.formatClean)',\n    '  .pipe(Minilog.backends.console);'].join('\\n'));\n};\n\nTransform.mixin = function(dest) {\n  var o = Transform.prototype, k;\n  for (k in o) {\n    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);\n  }\n};\n\nmodule.exports = Transform;\n\n\n//# sourceURL=webpack://GUI/./node_modules/minilog/lib/common/transform.js?");

/***/ }),

/***/ "./node_modules/minilog/lib/web/array.js":
/*!***********************************************!*\
  !*** ./node_modules/minilog/lib/web/array.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Transform = __webpack_require__(/*! ../common/transform.js */ \"./node_modules/minilog/lib/common/transform.js\"),\n    cache = [ ];\n\nvar logger = new Transform();\n\nlogger.write = function(name, level, args) {\n  cache.push([ name, level, args ]);\n};\n\n// utility functions\nlogger.get = function() { return cache; };\nlogger.empty = function() { cache = []; };\n\nmodule.exports = logger;\n\n\n//# sourceURL=webpack://GUI/./node_modules/minilog/lib/web/array.js?");

/***/ }),

/***/ "./node_modules/minilog/lib/web/console.js":
/*!*************************************************!*\
  !*** ./node_modules/minilog/lib/web/console.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Transform = __webpack_require__(/*! ../common/transform.js */ \"./node_modules/minilog/lib/common/transform.js\");\n\nvar newlines = /\\n+$/,\n    logger = new Transform();\n\nlogger.write = function(name, level, args) {\n  var i = args.length-1;\n  if (typeof console === 'undefined' || !console.log) {\n    return;\n  }\n  if(console.log.apply) {\n    return console.log.apply(console, [name, level].concat(args));\n  } else if(JSON && JSON.stringify) {\n    // console.log.apply is undefined in IE8 and IE9\n    // for IE8/9: make console.log at least a bit less awful\n    if(args[i] && typeof args[i] == 'string') {\n      args[i] = args[i].replace(newlines, '');\n    }\n    try {\n      for(i = 0; i < args.length; i++) {\n        args[i] = JSON.stringify(args[i]);\n      }\n    } catch(e) {}\n    console.log(args.join(' '));\n  }\n};\n\nlogger.formatters = ['color', 'minilog'];\nlogger.color = __webpack_require__(/*! ./formatters/color.js */ \"./node_modules/minilog/lib/web/formatters/color.js\");\nlogger.minilog = __webpack_require__(/*! ./formatters/minilog.js */ \"./node_modules/minilog/lib/web/formatters/minilog.js\");\n\nmodule.exports = logger;\n\n\n//# sourceURL=webpack://GUI/./node_modules/minilog/lib/web/console.js?");

/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/color.js":
/*!**********************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/color.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Transform = __webpack_require__(/*! ../../common/transform.js */ \"./node_modules/minilog/lib/common/transform.js\"),\n    color = __webpack_require__(/*! ./util.js */ \"./node_modules/minilog/lib/web/formatters/util.js\");\n\nvar colors = { debug: ['cyan'], info: ['purple' ], warn: [ 'yellow', true ], error: [ 'red', true ] },\n    logger = new Transform();\n\nlogger.write = function(name, level, args) {\n  var fn = console.log;\n  if(console[level] && console[level].apply) {\n    fn = console[level];\n    fn.apply(console, [ '%c'+name+' %c'+level, color('gray'), color.apply(color, colors[level])].concat(args));\n  }\n};\n\n// NOP, because piping the formatted logs can only cause trouble.\nlogger.pipe = function() { };\n\nmodule.exports = logger;\n\n\n//# sourceURL=webpack://GUI/./node_modules/minilog/lib/web/formatters/color.js?");

/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/minilog.js":
/*!************************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/minilog.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Transform = __webpack_require__(/*! ../../common/transform.js */ \"./node_modules/minilog/lib/common/transform.js\"),\n    color = __webpack_require__(/*! ./util.js */ \"./node_modules/minilog/lib/web/formatters/util.js\"),\n    colors = { debug: ['gray'], info: ['purple' ], warn: [ 'yellow', true ], error: [ 'red', true ] },\n    logger = new Transform();\n\nlogger.write = function(name, level, args) {\n  var fn = console.log;\n  if(level != 'debug' && console[level]) {\n    fn = console[level];\n  }\n\n  var subset = [], i = 0;\n  if(level != 'info') {\n    for(; i < args.length; i++) {\n      if(typeof args[i] != 'string') break;\n    }\n    fn.apply(console, [ '%c'+name +' '+ args.slice(0, i).join(' '), color.apply(color, colors[level]) ].concat(args.slice(i)));\n  } else {\n    fn.apply(console, [ '%c'+name, color.apply(color, colors[level]) ].concat(args));\n  }\n};\n\n// NOP, because piping the formatted logs can only cause trouble.\nlogger.pipe = function() { };\n\nmodule.exports = logger;\n\n\n//# sourceURL=webpack://GUI/./node_modules/minilog/lib/web/formatters/minilog.js?");

/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/util.js":
/*!*********************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/util.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hex = {\n  black: '#000',\n  red: '#c23621',\n  green: '#25bc26',\n  yellow: '#bbbb00',\n  blue:  '#492ee1',\n  magenta: '#d338d3',\n  cyan: '#33bbc8',\n  gray: '#808080',\n  purple: '#708'\n};\nfunction color(fg, isInverse) {\n  if(isInverse) {\n    return 'color: #fff; background: '+hex[fg]+';';\n  } else {\n    return 'color: '+hex[fg]+';';\n  }\n}\n\nmodule.exports = color;\n\n\n//# sourceURL=webpack://GUI/./node_modules/minilog/lib/web/formatters/util.js?");

/***/ }),

/***/ "./node_modules/minilog/lib/web/index.js":
/*!***********************************************!*\
  !*** ./node_modules/minilog/lib/web/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Minilog = __webpack_require__(/*! ../common/minilog.js */ \"./node_modules/minilog/lib/common/minilog.js\");\n\nvar oldEnable = Minilog.enable,\n    oldDisable = Minilog.disable,\n    isChrome = (typeof navigator != 'undefined' && /chrome/i.test(navigator.userAgent)),\n    console = __webpack_require__(/*! ./console.js */ \"./node_modules/minilog/lib/web/console.js\");\n\n// Use a more capable logging backend if on Chrome\nMinilog.defaultBackend = (isChrome ? console.minilog : console);\n\n// apply enable inputs from localStorage and from the URL\nif(typeof window != 'undefined') {\n  try {\n    Minilog.enable(JSON.parse(window.localStorage['minilogSettings']));\n  } catch(e) {}\n  if(window.location && window.location.search) {\n    var match = RegExp('[?&]minilog=([^&]*)').exec(window.location.search);\n    match && Minilog.enable(decodeURIComponent(match[1]));\n  }\n}\n\n// Make enable also add to localStorage\nMinilog.enable = function() {\n  oldEnable.call(Minilog, true);\n  try { window.localStorage['minilogSettings'] = JSON.stringify(true); } catch(e) {}\n  return this;\n};\n\nMinilog.disable = function() {\n  oldDisable.call(Minilog);\n  try { delete window.localStorage.minilogSettings; } catch(e) {}\n  return this;\n};\n\nexports = module.exports = Minilog;\n\nexports.backends = {\n  array: __webpack_require__(/*! ./array.js */ \"./node_modules/minilog/lib/web/array.js\"),\n  browser: Minilog.defaultBackend,\n  localStorage: __webpack_require__(/*! ./localstorage.js */ \"./node_modules/minilog/lib/web/localstorage.js\"),\n  jQuery: __webpack_require__(/*! ./jquery_simple.js */ \"./node_modules/minilog/lib/web/jquery_simple.js\")\n};\n\n\n//# sourceURL=webpack://GUI/./node_modules/minilog/lib/web/index.js?");

/***/ }),

/***/ "./node_modules/minilog/lib/web/jquery_simple.js":
/*!*******************************************************!*\
  !*** ./node_modules/minilog/lib/web/jquery_simple.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Transform = __webpack_require__(/*! ../common/transform.js */ \"./node_modules/minilog/lib/common/transform.js\");\n\nvar cid = new Date().valueOf().toString(36);\n\nfunction AjaxLogger(options) {\n  this.url = options.url || '';\n  this.cache = [];\n  this.timer = null;\n  this.interval = options.interval || 30*1000;\n  this.enabled = true;\n  this.jQuery = window.jQuery;\n  this.extras = {};\n}\n\nTransform.mixin(AjaxLogger);\n\nAjaxLogger.prototype.write = function(name, level, args) {\n  if(!this.timer) { this.init(); }\n  this.cache.push([name, level].concat(args));\n};\n\nAjaxLogger.prototype.init = function() {\n  if(!this.enabled || !this.jQuery) return;\n  var self = this;\n  this.timer = setTimeout(function() {\n    var i, logs = [], ajaxData, url = self.url;\n    if(self.cache.length == 0) return self.init();\n    // Test each log line and only log the ones that are valid (e.g. don't have circular references).\n    // Slight performance hit but benefit is we log all valid lines.\n    for(i = 0; i < self.cache.length; i++) {\n      try {\n        JSON.stringify(self.cache[i]);\n        logs.push(self.cache[i]);\n      } catch(e) { }\n    }\n    if(self.jQuery.isEmptyObject(self.extras)) {\n        ajaxData = JSON.stringify({ logs: logs });\n        url = self.url + '?client_id=' + cid;\n    } else {\n        ajaxData = JSON.stringify(self.jQuery.extend({logs: logs}, self.extras));\n    }\n\n    self.jQuery.ajax(url, {\n      type: 'POST',\n      cache: false,\n      processData: false,\n      data: ajaxData,\n      contentType: 'application/json',\n      timeout: 10000\n    }).success(function(data, status, jqxhr) {\n      if(data.interval) {\n        self.interval = Math.max(1000, data.interval);\n      }\n    }).error(function() {\n      self.interval = 30000;\n    }).always(function() {\n      self.init();\n    });\n    self.cache = [];\n  }, this.interval);\n};\n\nAjaxLogger.prototype.end = function() {};\n\n// wait until jQuery is defined. Useful if you don't control the load order.\nAjaxLogger.jQueryWait = function(onDone) {\n  if(typeof window !== 'undefined' && (window.jQuery || window.$)) {\n    return onDone(window.jQuery || window.$);\n  } else if (typeof window !== 'undefined') {\n    setTimeout(function() { AjaxLogger.jQueryWait(onDone); }, 200);\n  }\n};\n\nmodule.exports = AjaxLogger;\n\n\n//# sourceURL=webpack://GUI/./node_modules/minilog/lib/web/jquery_simple.js?");

/***/ }),

/***/ "./node_modules/minilog/lib/web/localstorage.js":
/*!******************************************************!*\
  !*** ./node_modules/minilog/lib/web/localstorage.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Transform = __webpack_require__(/*! ../common/transform.js */ \"./node_modules/minilog/lib/common/transform.js\"),\n    cache = false;\n\nvar logger = new Transform();\n\nlogger.write = function(name, level, args) {\n  if(typeof window == 'undefined' || typeof JSON == 'undefined' || !JSON.stringify || !JSON.parse) return;\n  try {\n    if(!cache) { cache = (window.localStorage.minilog ? JSON.parse(window.localStorage.minilog) : []); }\n    cache.push([ new Date().toString(), name, level, args ]);\n    window.localStorage.minilog = JSON.stringify(cache);\n  } catch(e) {}\n};\n\nmodule.exports = logger;\n\n//# sourceURL=webpack://GUI/./node_modules/minilog/lib/web/localstorage.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/dispatch/shared-dispatch.js":
/*!*****************************************************************!*\
  !*** ./node_modules/scratch-vm/src/dispatch/shared-dispatch.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar log = __webpack_require__(/*! ../util/log */ \"./node_modules/scratch-vm/src/util/log.js\");\n/**\n * @typedef {object} DispatchCallMessage - a message to the dispatch system representing a service method call\n * @property {*} responseId - send a response message with this response ID. See {@link DispatchResponseMessage}\n * @property {string} service - the name of the service to be called\n * @property {string} method - the name of the method to be called\n * @property {Array|undefined} args - the arguments to be passed to the method\n */\n\n/**\n * @typedef {object} DispatchResponseMessage - a message to the dispatch system representing the results of a call\n * @property {*} responseId - a copy of the response ID from the call which generated this response\n * @property {*|undefined} error - if this is truthy, then it contains results from a failed call (such as an exception)\n * @property {*|undefined} result - if error is not truthy, then this contains the return value of the call (if any)\n */\n\n/**\n * @typedef {DispatchCallMessage|DispatchResponseMessage} DispatchMessage\n * Any message to the dispatch system.\n */\n\n/**\n * The SharedDispatch class is responsible for dispatch features shared by\n * {@link CentralDispatch} and {@link WorkerDispatch}.\n */\n\n\nvar SharedDispatch = /*#__PURE__*/function () {\n  function SharedDispatch() {\n    _classCallCheck(this, SharedDispatch);\n\n    /**\n     * List of callback registrations for promises waiting for a response from a call to a service on another\n     * worker. A callback registration is an array of [resolve,reject] Promise functions.\n     * Calls to local services don't enter this list.\n     * @type {Array.<Function[]>}\n     */\n    this.callbacks = [];\n    /**\n     * The next response ID to be used.\n     * @type {int}\n     */\n\n    this.nextResponseId = 0;\n  }\n  /**\n   * Call a particular method on a particular service, regardless of whether that service is provided locally or on\n   * a worker. If the service is provided by a worker, the `args` will be copied using the Structured Clone\n   * algorithm, except for any items which are also in the `transfer` list. Ownership of those items will be\n   * transferred to the worker, and they should not be used after this call.\n   * @example\n   *      dispatcher.call('vm', 'setData', 'cat', 42);\n   *      // this finds the worker for the 'vm' service, then on that worker calls:\n   *      vm.setData('cat', 42);\n   * @param {string} service - the name of the service.\n   * @param {string} method - the name of the method.\n   * @param {*} [args] - the arguments to be copied to the method, if any.\n   * @returns {Promise} - a promise for the return value of the service method.\n   */\n\n\n  _createClass(SharedDispatch, [{\n    key: \"call\",\n    value: function call(service, method) {\n      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n        args[_key - 2] = arguments[_key];\n      }\n\n      return this.transferCall.apply(this, [service, method, null].concat(args));\n    }\n    /**\n     * Call a particular method on a particular service, regardless of whether that service is provided locally or on\n     * a worker. If the service is provided by a worker, the `args` will be copied using the Structured Clone\n     * algorithm, except for any items which are also in the `transfer` list. Ownership of those items will be\n     * transferred to the worker, and they should not be used after this call.\n     * @example\n     *      dispatcher.transferCall('vm', 'setData', [myArrayBuffer], 'cat', myArrayBuffer);\n     *      // this finds the worker for the 'vm' service, transfers `myArrayBuffer` to it, then on that worker calls:\n     *      vm.setData('cat', myArrayBuffer);\n     * @param {string} service - the name of the service.\n     * @param {string} method - the name of the method.\n     * @param {Array} [transfer] - objects to be transferred instead of copied. Must be present in `args` to be useful.\n     * @param {*} [args] - the arguments to be copied to the method, if any.\n     * @returns {Promise} - a promise for the return value of the service method.\n     */\n\n  }, {\n    key: \"transferCall\",\n    value: function transferCall(service, method, transfer) {\n      try {\n        var _this$_getServiceProv = this._getServiceProvider(service),\n            provider = _this$_getServiceProv.provider,\n            isRemote = _this$_getServiceProv.isRemote;\n\n        if (provider) {\n          for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {\n            args[_key2 - 3] = arguments[_key2];\n          }\n\n          if (isRemote) {\n            return this._remoteTransferCall.apply(this, [provider, service, method, transfer].concat(args));\n          }\n\n          var result = provider[method].apply(provider, args);\n          return Promise.resolve(result);\n        }\n\n        return Promise.reject(new Error(\"Service not found: \".concat(service)));\n      } catch (e) {\n        return Promise.reject(e);\n      }\n    }\n    /**\n     * Check if a particular service lives on another worker.\n     * @param {string} service - the service to check.\n     * @returns {boolean} - true if the service is remote (calls must cross a Worker boundary), false otherwise.\n     * @private\n     */\n\n  }, {\n    key: \"_isRemoteService\",\n    value: function _isRemoteService(service) {\n      return this._getServiceProvider(service).isRemote;\n    }\n    /**\n     * Like {@link call}, but force the call to be posted through a particular communication channel.\n     * @param {object} provider - send the call through this object's `postMessage` function.\n     * @param {string} service - the name of the service.\n     * @param {string} method - the name of the method.\n     * @param {*} [args] - the arguments to be copied to the method, if any.\n     * @returns {Promise} - a promise for the return value of the service method.\n     */\n\n  }, {\n    key: \"_remoteCall\",\n    value: function _remoteCall(provider, service, method) {\n      for (var _len3 = arguments.length, args = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {\n        args[_key3 - 3] = arguments[_key3];\n      }\n\n      return this._remoteTransferCall.apply(this, [provider, service, method, null].concat(args));\n    }\n    /**\n     * Like {@link transferCall}, but force the call to be posted through a particular communication channel.\n     * @param {object} provider - send the call through this object's `postMessage` function.\n     * @param {string} service - the name of the service.\n     * @param {string} method - the name of the method.\n     * @param {Array} [transfer] - objects to be transferred instead of copied. Must be present in `args` to be useful.\n     * @param {*} [args] - the arguments to be copied to the method, if any.\n     * @returns {Promise} - a promise for the return value of the service method.\n     */\n\n  }, {\n    key: \"_remoteTransferCall\",\n    value: function _remoteTransferCall(provider, service, method, transfer) {\n      var _this = this;\n\n      for (var _len4 = arguments.length, args = new Array(_len4 > 4 ? _len4 - 4 : 0), _key4 = 4; _key4 < _len4; _key4++) {\n        args[_key4 - 4] = arguments[_key4];\n      }\n\n      return new Promise(function (resolve, reject) {\n        var responseId = _this._storeCallbacks(resolve, reject);\n        /** @TODO: remove this hack! this is just here so we don't try to send `util` to a worker */\n\n\n        if (args.length > 0 && typeof args[args.length - 1].yield === 'function') {\n          args.pop();\n        }\n\n        if (transfer) {\n          provider.postMessage({\n            service: service,\n            method: method,\n            responseId: responseId,\n            args: args\n          }, transfer);\n        } else {\n          provider.postMessage({\n            service: service,\n            method: method,\n            responseId: responseId,\n            args: args\n          });\n        }\n      });\n    }\n    /**\n     * Store callback functions pending a response message.\n     * @param {Function} resolve - function to call if the service method returns.\n     * @param {Function} reject - function to call if the service method throws.\n     * @returns {*} - a unique response ID for this set of callbacks. See {@link _deliverResponse}.\n     * @protected\n     */\n\n  }, {\n    key: \"_storeCallbacks\",\n    value: function _storeCallbacks(resolve, reject) {\n      var responseId = this.nextResponseId++;\n      this.callbacks[responseId] = [resolve, reject];\n      return responseId;\n    }\n    /**\n     * Deliver call response from a worker. This should only be called as the result of a message from a worker.\n     * @param {int} responseId - the response ID of the callback set to call.\n     * @param {DispatchResponseMessage} message - the message containing the response value(s).\n     * @protected\n     */\n\n  }, {\n    key: \"_deliverResponse\",\n    value: function _deliverResponse(responseId, message) {\n      try {\n        var _this$callbacks$respo = _slicedToArray(this.callbacks[responseId], 2),\n            resolve = _this$callbacks$respo[0],\n            reject = _this$callbacks$respo[1];\n\n        delete this.callbacks[responseId];\n\n        if (message.error) {\n          reject(message.error);\n        } else {\n          resolve(message.result);\n        }\n      } catch (e) {\n        log.error(\"Dispatch callback failed: \".concat(JSON.stringify(e)));\n      }\n    }\n    /**\n     * Handle a message event received from a connected worker.\n     * @param {Worker} worker - the worker which sent the message, or the global object if running in a worker.\n     * @param {MessageEvent} event - the message event to be handled.\n     * @protected\n     */\n\n  }, {\n    key: \"_onMessage\",\n    value: function _onMessage(worker, event) {\n      /** @type {DispatchMessage} */\n      var message = event.data;\n      message.args = message.args || [];\n      var promise;\n\n      if (message.service) {\n        if (message.service === 'dispatch') {\n          promise = this._onDispatchMessage(worker, message);\n        } else {\n          promise = this.call.apply(this, [message.service, message.method].concat(_toConsumableArray(message.args)));\n        }\n      } else if (typeof message.responseId === 'undefined') {\n        log.error(\"Dispatch caught malformed message from a worker: \".concat(JSON.stringify(event)));\n      } else {\n        this._deliverResponse(message.responseId, message);\n      }\n\n      if (promise) {\n        if (typeof message.responseId === 'undefined') {\n          log.error(\"Dispatch message missing required response ID: \".concat(JSON.stringify(event)));\n        } else {\n          promise.then(function (result) {\n            return worker.postMessage({\n              responseId: message.responseId,\n              result: result\n            });\n          }, function (error) {\n            return worker.postMessage({\n              responseId: message.responseId,\n              error: error\n            });\n          });\n        }\n      }\n    }\n    /**\n     * Fetch the service provider object for a particular service name.\n     * @abstract\n     * @param {string} service - the name of the service to look up\n     * @returns {{provider:(object|Worker), isRemote:boolean}} - the means to contact the service, if found\n     * @protected\n     */\n\n  }, {\n    key: \"_getServiceProvider\",\n    value: function _getServiceProvider(service) {\n      throw new Error(\"Could not get provider for \".concat(service, \": _getServiceProvider not implemented\"));\n    }\n    /**\n     * Handle a call message sent to the dispatch service itself\n     * @abstract\n     * @param {Worker} worker - the worker which sent the message.\n     * @param {DispatchCallMessage} message - the message to be handled.\n     * @returns {Promise|undefined} - a promise for the results of this operation, if appropriate\n     * @private\n     */\n\n  }, {\n    key: \"_onDispatchMessage\",\n    value: function _onDispatchMessage(worker, message) {\n      throw new Error(\"Unimplemented dispatch message handler cannot handle \".concat(message.method, \" method\"));\n    }\n  }]);\n\n  return SharedDispatch;\n}();\n\nmodule.exports = SharedDispatch;\n\n//# sourceURL=webpack://GUI/./node_modules/scratch-vm/src/dispatch/shared-dispatch.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/dispatch/worker-dispatch.js":
/*!*****************************************************************!*\
  !*** ./node_modules/scratch-vm/src/dispatch/worker-dispatch.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar SharedDispatch = __webpack_require__(/*! ./shared-dispatch */ \"./node_modules/scratch-vm/src/dispatch/shared-dispatch.js\");\n\nvar log = __webpack_require__(/*! ../util/log */ \"./node_modules/scratch-vm/src/util/log.js\");\n/**\n * This class provides a Worker with the means to participate in the message dispatch system managed by CentralDispatch.\n * From any context in the messaging system, the dispatcher's \"call\" method can call any method on any \"service\"\n * provided in any participating context. The dispatch system will forward function arguments and return values across\n * worker boundaries as needed.\n * @see {CentralDispatch}\n */\n\n\nvar WorkerDispatch = /*#__PURE__*/function (_SharedDispatch) {\n  _inherits(WorkerDispatch, _SharedDispatch);\n\n  var _super = _createSuper(WorkerDispatch);\n\n  function WorkerDispatch() {\n    var _this;\n\n    _classCallCheck(this, WorkerDispatch);\n\n    _this = _super.call(this);\n    /**\n     * This promise will be resolved when we have successfully connected to central dispatch.\n     * @type {Promise}\n     * @see {waitForConnection}\n     * @private\n     */\n\n    _this._connectionPromise = new Promise(function (resolve) {\n      _this._onConnect = resolve;\n    });\n    /**\n     * Map of service name to local service provider.\n     * If a service is not listed here, it is assumed to be provided by another context (another Worker or the main\n     * thread).\n     * @see {setService}\n     * @type {object}\n     */\n\n    _this.services = {};\n    _this._onMessage = _this._onMessage.bind(_assertThisInitialized(_this), self);\n\n    if (typeof self !== 'undefined') {\n      self.onmessage = _this._onMessage;\n    }\n\n    return _this;\n  }\n  /**\n   * @returns {Promise} a promise which will resolve upon connection to central dispatch. If you need to make a call\n   * immediately on \"startup\" you can attach a 'then' to this promise.\n   * @example\n   *      dispatch.waitForConnection.then(() => {\n   *          dispatch.call('myService', 'hello');\n   *      })\n   */\n\n\n  _createClass(WorkerDispatch, [{\n    key: \"waitForConnection\",\n    get: function get() {\n      return this._connectionPromise;\n    }\n    /**\n     * Set a local object as the global provider of the specified service.\n     * WARNING: Any method on the provider can be called from any worker within the dispatch system.\n     * @param {string} service - a globally unique string identifying this service. Examples: 'vm', 'gui', 'extension9'.\n     * @param {object} provider - a local object which provides this service.\n     * @returns {Promise} - a promise which will resolve once the service is registered.\n     */\n\n  }, {\n    key: \"setService\",\n    value: function setService(service, provider) {\n      var _this2 = this;\n\n      if (this.services.hasOwnProperty(service)) {\n        log.warn(\"Worker dispatch replacing existing service provider for \".concat(service));\n      }\n\n      this.services[service] = provider;\n      return this.waitForConnection.then(function () {\n        return _this2._remoteCall(self, 'dispatch', 'setService', service);\n      });\n    }\n    /**\n     * Fetch the service provider object for a particular service name.\n     * @override\n     * @param {string} service - the name of the service to look up\n     * @returns {{provider:(object|Worker), isRemote:boolean}} - the means to contact the service, if found\n     * @protected\n     */\n\n  }, {\n    key: \"_getServiceProvider\",\n    value: function _getServiceProvider(service) {\n      // if we don't have a local service by this name, contact central dispatch by calling `postMessage` on self\n      var provider = this.services[service];\n      return {\n        provider: provider || self,\n        isRemote: !provider\n      };\n    }\n    /**\n     * Handle a call message sent to the dispatch service itself\n     * @override\n     * @param {Worker} worker - the worker which sent the message.\n     * @param {DispatchCallMessage} message - the message to be handled.\n     * @returns {Promise|undefined} - a promise for the results of this operation, if appropriate\n     * @protected\n     */\n\n  }, {\n    key: \"_onDispatchMessage\",\n    value: function _onDispatchMessage(worker, message) {\n      var promise;\n\n      switch (message.method) {\n        case 'handshake':\n          promise = this._onConnect();\n          break;\n\n        case 'terminate':\n          // Don't close until next tick, after sending confirmation back\n          setTimeout(function () {\n            return self.close();\n          }, 0);\n          promise = Promise.resolve();\n          break;\n\n        default:\n          log.error(\"Worker dispatch received message for unknown method: \".concat(message.method));\n      }\n\n      return promise;\n    }\n  }]);\n\n  return WorkerDispatch;\n}(SharedDispatch);\n\nmodule.exports = new WorkerDispatch();\n\n//# sourceURL=webpack://GUI/./node_modules/scratch-vm/src/dispatch/worker-dispatch.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/argument-type.js":
/*!************************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/argument-type.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Block argument types\n * @enum {string}\n */\nvar ArgumentType = {\n  /**\n   * Numeric value with angle picker\n   */\n  ANGLE: 'angle',\n\n  /**\n   * Boolean value with hexagonal placeholder\n   */\n  BOOLEAN: 'Boolean',\n\n  /**\n   * Numeric value with color picker\n   */\n  COLOR: 'color',\n\n  /**\n   * Numeric value with text field\n   */\n  NUMBER: 'number',\n\n  /**\n   * String value with text field\n   */\n  STRING: 'string',\n\n  /**\n   * String value with matrix field\n   */\n  MATRIX: 'matrix',\n\n  /**\n   * MIDI note number with note picker (piano) field\n   */\n  NOTE: 'note',\n\n  /**\n   * Inline image on block (as part of the label)\n   */\n  IMAGE: 'image'\n};\nmodule.exports = ArgumentType;\n\n//# sourceURL=webpack://GUI/./node_modules/scratch-vm/src/extension-support/argument-type.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/block-type.js":
/*!*********************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/block-type.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Types of block\n * @enum {string}\n */\nvar BlockType = {\n  /**\n   * Boolean reporter with hexagonal shape\n   */\n  BOOLEAN: 'Boolean',\n\n  /**\n   * A button (not an actual block) for some special action, like making a variable\n   */\n  BUTTON: 'button',\n\n  /**\n   * Command block\n   */\n  COMMAND: 'command',\n\n  /**\n   * Specialized command block which may or may not run a child branch\n   * The thread continues with the next block whether or not a child branch ran.\n   */\n  CONDITIONAL: 'conditional',\n\n  /**\n   * Specialized hat block with no implementation function\n   * This stack only runs if the corresponding event is emitted by other code.\n   */\n  EVENT: 'event',\n\n  /**\n   * Hat block which conditionally starts a block stack\n   */\n  HAT: 'hat',\n\n  /**\n   * Specialized command block which may or may not run a child branch\n   * If a child branch runs, the thread evaluates the loop block again.\n   */\n  LOOP: 'loop',\n\n  /**\n   * General reporter with numeric or string value\n   */\n  REPORTER: 'reporter'\n};\nmodule.exports = BlockType;\n\n//# sourceURL=webpack://GUI/./node_modules/scratch-vm/src/extension-support/block-type.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/extension-support/target-type.js":
/*!**********************************************************************!*\
  !*** ./node_modules/scratch-vm/src/extension-support/target-type.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Default types of Target supported by the VM\n * @enum {string}\n */\nvar TargetType = {\n  /**\n   * Rendered target which can move, change costumes, etc.\n   */\n  SPRITE: 'sprite',\n\n  /**\n   * Rendered target which cannot move but can change backdrops\n   */\n  STAGE: 'stage'\n};\nmodule.exports = TargetType;\n\n//# sourceURL=webpack://GUI/./node_modules/scratch-vm/src/extension-support/target-type.js?");

/***/ }),

/***/ "./node_modules/scratch-vm/src/util/log.js":
/*!*************************************************!*\
  !*** ./node_modules/scratch-vm/src/util/log.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var minilog = __webpack_require__(/*! minilog */ \"./node_modules/minilog/lib/web/index.js\");\n\nminilog.enable();\nmodule.exports = minilog('vm');\n\n//# sourceURL=webpack://GUI/./node_modules/scratch-vm/src/util/log.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://GUI/(webpack)/buildin/global.js?");

/***/ })

/******/ });