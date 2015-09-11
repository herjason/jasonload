define("js/common_plugin/index",["jquery"],function(require,exports,module){
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
			'<div id="common_plugin_index_box" class="common_plugin_index_box">'+
				'<div class="jTop">'+
					'<div class="jLeft">返回</div>'+
					'<div class="jCenter">手机电脑通用插件库</div>'+
				'</div>'+
				'<div class="jTopHeight" data-rules="1"></div>'+
				'<div class="jMargin3">手机电脑通用插件库</div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="jasonCacheDB">1、jasonCacheDB.js缓存数据库</li>'+
				'</ul>'+
			'</div>';
			jl.show(template);
		},
		indexEvent:function(){
			var self=this;
			//返回
			$('#common_plugin_index_box .jTop').bind('click',function(){
				jl.backtoMod("js/index");
			});
			//弹出框（默认中间弹出）
			$("#common_plugin_index_box .jasonCacheDB").bind("click",function(){
				jl.gotoMod("js/common_plugin/jasonCacheDB");
			});
		}
	};

	module.exports=index;

});