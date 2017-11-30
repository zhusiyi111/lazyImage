
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
	        if(__img.attr(this.param.orgrinalAttr)){
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

export default LazyLoad;

