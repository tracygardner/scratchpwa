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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-storage/src/FetchWorkerTool.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-storage/src/FetchWorkerTool.worker.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./node_modules/scratch-storage/src/FetchWorkerTool.worker.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-env worker */\nvar jobsActive = 0;\nvar complete = [];\nvar intervalId = null;\n/**\n * Register a step function.\n *\n * Step checks if there are completed jobs and if there are sends them to the\n * parent. Then it checks the jobs count. If there are no further jobs, clear\n * the step.\n */\n\nvar registerStep = function registerStep() {\n  intervalId = setInterval(function () {\n    if (complete.length) {\n      // Send our chunk of completed requests and instruct postMessage to\n      // transfer the buffers instead of copying them.\n      postMessage(complete.slice(), // Instruct postMessage that these buffers in the sent message\n      // should use their Transferable trait. After the postMessage\n      // call the \"buffers\" will still be in complete if you looked,\n      // but they will all be length 0 as the data they reference has\n      // been sent to the window. This lets us send a lot of data\n      // without the normal postMessage behaviour of making a copy of\n      // all of the data for the window.\n      complete.map(function (response) {\n        return response.buffer;\n      }).filter(Boolean));\n      complete.length = 0;\n    }\n\n    if (jobsActive === 0) {\n      clearInterval(intervalId);\n      intervalId = null;\n    }\n  }, 1);\n};\n/**\n * Receive a job from the parent and fetch the requested data.\n * @param {object} options.job A job id, url, and options descriptor to perform.\n */\n\n\nvar onMessage = function onMessage(_ref) {\n  var job = _ref.data;\n\n  if (jobsActive === 0 && !intervalId) {\n    registerStep();\n  }\n\n  jobsActive++;\n  fetch(job.url, job.options).then(function (result) {\n    if (result.ok) return result.arrayBuffer();\n    if (result.status === 404) return null;\n    return Promise.reject(result.status);\n  }).then(function (buffer) {\n    return complete.push({\n      id: job.id,\n      buffer: buffer\n    });\n  }).catch(function (error) {\n    return complete.push({\n      id: job.id,\n      error: error && error.message || \"Failed request: \".concat(job.url)\n    });\n  }).then(function () {\n    return jobsActive--;\n  });\n};\n\nif (self.fetch) {\n  postMessage({\n    support: {\n      fetch: true\n    }\n  });\n  self.addEventListener('message', onMessage);\n} else {\n  postMessage({\n    support: {\n      fetch: false\n    }\n  });\n  self.addEventListener('message', function (_ref2) {\n    var job = _ref2.data;\n    postMessage([{\n      id: job.id,\n      error: 'fetch is unavailable'\n    }]);\n  });\n}\n\n//# sourceURL=webpack://GUI/./node_modules/scratch-storage/src/FetchWorkerTool.worker.js?./node_modules/babel-loader/lib??ref--4");

/***/ })

/******/ });