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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 1');\r\n\r\nlet burger = document.querySelector(\".burger\");\r\nlet adaptivMenu = document.querySelector(\".adaptiv-menu\");\r\nlet adaptivNav = document.querySelector(\".adaptiv-menu__navigation\");\r\nlet menuActive = document.querySelector(\".adaptiv-menu--active\");\r\nlet links = document.querySelectorAll(\".nav__link\");\r\n\r\nvar count = 0;\r\n\r\nfor( let link of links) {\r\n    link.addEventListener(\"click\", () => {\r\n        adaptivMenu.style.height = 0;\r\n        adaptivNav.classList.remove(\"adaptiv-menu__navigation--active\");\r\n        burger.classList.remove(\"burger--active\");\r\n        count++;\r\n    })\r\n\r\n}\r\n\r\nburger.addEventListener(\"click\", () => {\r\n\r\n    height = adaptivMenu.scrollHeight;\r\n    count++;    \r\n    const even = count => !(count % 2);\r\n\r\n    if (even(count) == false) {\r\n        adaptivMenu.style.height = height + \"px\";\r\n        adaptivNav.classList.add(\"adaptiv-menu__navigation--active\");\r\n        burger.classList.add(\"burger--active\");\r\n    }\r\n    else{\r\n        adaptivMenu.style.height = 0;\r\n        adaptivNav.classList.remove(\"adaptiv-menu__navigation--active\");\r\n        burger.classList.remove(\"burger--active\");\r\n    }\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/scrolling.js":
/*!************************************!*\
  !*** ./src/assets/js/scrolling.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nconst anchors = document.querySelectorAll('a[href*=\"#\"]');\r\n\r\nfor( let anchor of anchors) {\r\n  anchor.addEventListener(\"click\", function(e){\r\n    e.preventDefault();\r\n    const blockID = anchor.getAttribute('href').substr(1)\r\n    const fixedHeaderHeight = 100;\r\n\t\tconst top = document.getElementById(blockID).offsetTop - fixedHeaderHeight;\r\n    window.scrollTo({\r\n    \ttop,\r\n      left: 0,\r\n      behavior: \"smooth\",\r\n    })\r\n\r\n    \r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/scrolling.js?");

/***/ }),

/***/ "./src/assets/js/swiper.js":
/*!*********************************!*\
  !*** ./src/assets/js/swiper.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let mySwiper = new Swiper('.swiper-container', {\r\n    direction: 'horizontal',\r\n    loop: true,\r\n    slidesPerView: 1,\r\n\r\n    autoplay: {\r\n        delay: 5000,\r\n        disableOnInteraction: false,\r\n    },\r\n\r\n    breakpoints: {\r\n\r\n        767: {\r\n            slidesPerView: 2,\r\n        },\r\n\r\n    },\r\n    \r\n    navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev',\r\n    },\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/swiper.js?");

/***/ }),

/***/ 0:
/*!********************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ./src/assets/js/scrolling.js ./src/assets/js/swiper.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\kadastr\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\kadastr\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n__webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\kadastr\\src\\assets\\js\\scrolling.js */\"./src/assets/js/scrolling.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\vgrom\\Desktop\\projects\\kadastr\\src\\assets\\js\\swiper.js */\"./src/assets/js/swiper.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js_./src/assets/js/scrolling.js_./src/assets/js/swiper.js?");

/***/ })

/******/ });