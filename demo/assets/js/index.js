define("js/index",["jquery"],function(require,exports,module){
	var $=require("jquery");																				  
	var index=function(opt){
		var self=this;
		self.opt=$.extend({},{},opt);
	};
	index.prototype={
		init:function(){
			var self=this;
			self.indexDom();
			self.indexEvent();
		},
		indexDom:function(){
			var template='';
			template+=''+
			'<div id="index_box" class="index_box">'+
				'<div class="jTop">'+
					'<div class="jCenter">演示首页</div>'+
				'</div>'+
				'<div class="jTopHeight" data-rules="1"></div>'+
				'<div class="jMargin3" data-rules="1">jasonload.js模块化开发</div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="template">1、模块化页面演示</li>'+
					'<li><a href="#tab">模块化页面演示</a></li>'+
				'</ul>'+
				'<div class="jMargin3"><a name="test">插件库</a></div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="jasonwap">1、jasonwap手机端插件库</li>'+
					'<li class="jasonweb">2、jasonweb电脑端插件库</li>'+
				'</ul>'+
			'</div>';
			jl.show(template);
		},
		indexEvent:function(){
			var self=this;
			//模块化页面
			$("#index_box .template").bind("click",function(){
				jl.gotoMod("js/template",{id:111,test:"222"});
			});
			//jasonwap手机端插件库
			$("#index_box .jasonwap").bind("click",function(){
				jl.gotoMod("js/jasonwap/index");
			});
			//jasonweb电脑端插件库
			$("#index_box .jasonweb").bind("click",function(){
				jl.gotoMod("js/jasonweb/index");
			});
		}
	};

	module.exports=index;

});