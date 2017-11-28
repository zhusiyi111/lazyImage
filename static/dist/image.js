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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_LazyLoad__ = __webpack_require__(1);



$(function(){


	new __WEBPACK_IMPORTED_MODULE_0__components_LazyLoad__["a" /* default */]($('img'),{

	});

})

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

function LazyLoad(node,args){

	this.param = $.extend({
		orgrinalAttr:'data-src',
		delayTime:100
	},args||{});

	this.$obj = node;

	// 缓存部分变量
	this.$window = $(window);
	this.windowHeight = this.$window.height();

	// 定时器
	this.scrollTimer;
	this.resizeTimer;

	this.init();

	window.LazyLoad = this;

}

LazyLoad.prototype = {
	init:function(){

		this.load();
		this.initTimer();
	},
	initTimer:function(){

		var self = this;

	    this.$window.scroll(function(){
	        clearTimeout(self.scrollTimer);
	        self.scrollTimer = setTimeout(function(){
	        	self.load.call(self);
	        }, self.param.delayTime);
	    });

	    this.$window.resize(function(){
	        clearTimeout(self.resizeTimer);
	        self.resizeTimer = setTimeout(function(){
	        	self.windowHeight = self.$window.height();
	        	self.load.call(self);
	        }, self.param.delayTime);
	    });

	},
	load:function(){
		var __scroll = this.$window.scrollTop(),
	        __winHeitht = this.windowHeight,
	        __min = __scroll ? __scroll - __winHeitht / 4 : 0,    //非首屏加载回退0.25屏
	        __top = __scroll ? __scroll + 1.5 * __winHeitht : __winHeitht, //首屏加载1屏，其他加载1.5屏 
	        _imgs = this.$obj.filter(function(){
	               var __thisTop = $(this).offset().top;
	               return __thisTop <= __top && __thisTop >= __min && $(this).is(':visible');
	            });
	    for(let i = 0, len = _imgs.length; i < len; ++i){
	        let __img = $(_imgs[i]);
	        if(__img.attr(this.param.orgrinalAttr)!==''){
	        	let img = new Image();
	        	let src = __img.attr(this.param.orgrinalAttr)
	        	img.src= src;
				img.onload = (data)=>{
					
					 __img.attr('src',src).removeAttr(this.param.orgrinalAttr);
				}

	           
	        }
	    }
	}
}

/* harmony default export */ __webpack_exports__["a"] = (LazyLoad);



/***/ })
/******/ ]);
//# sourceMappingURL=image.js.map