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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!function (a) {
    "use strict";
    var b = a.HTMLCanvasElement && a.HTMLCanvasElement.prototype, c = a.Blob && function () {
                try {
                    return Boolean(new Blob)
                } catch (a) {
                    return !1
                }
            }(), d = c && a.Uint8Array && function () {
                try {
                    return 100 === new Blob([new Uint8Array(100)]).size
                } catch (a) {
                    return !1
                }
            }(), e = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || a.MSBlobBuilder,
        f = (c || e) && a.atob && a.ArrayBuffer && a.Uint8Array && function (a) {
                var b, f, g, h, i, j;
                for (b = a.split(",")[0].indexOf("base64") >= 0 ? atob(a.split(",")[1]) : decodeURIComponent(a.split(",")[1]), f = new ArrayBuffer(b.length), g = new Uint8Array(f), h = 0; h < b.length; h += 1)g[h] = b.charCodeAt(h);
                return i = a.split(",")[0].split(":")[1].split(";")[0], c ? new Blob([d ? g : f], {type: i}) : (j = new e, j.append(f), j.getBlob(i))
            };
    a.HTMLCanvasElement && !b.toBlob && (b.mozGetAsFile ? b.toBlob = function (a, c, d) {
        d && b.toDataURL && f ? a(f(this.toDataURL(c, d))) : a(this.mozGetAsFile("blob", c))
    } : b.toDataURL && f && (b.toBlob = function (a, b, c) {
            a(f(this.toDataURL(b, c)))
        })),  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return f
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a.dataURLtoBlob = f
}(this);

/***/ })

/******/ });