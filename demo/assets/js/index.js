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
				'<ul class="jList jMargin3 jPadding5" style="font-size:12px;line-height:26px;">'+
					'<li>jasonload框架是一个实现整站模块化开发的框架，每个页面是一个js模块，遵循CMD规范。模块页面通过jl.initMod()、jl.gotoMod()、jl.backtoMod()和jl.runMod()方法来初始、运行、跳转和回退模块页面。同时框架提供更多丰富的接口，如：前端缓存接口setData()、getData()等，具体请查看下载包里jasonload文件下的jasonload.doc说明文档。</li>'+
				'</ul>'+
				'<div class="jMargin3">部分接口演示</div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="template">跳转到template模板页</li>'+
					'<li class="setDataBtn">设置当前缓存数据</li>'+
					'<li class="setDataAllBtn">设置全局缓存数据</li>'+
					'<li class="getDataBtn">获取当前缓存数据</li>'+
					'<li class="getDataAllBtn">获取全局缓存数据</li>'+
					'<li class="removeDataBtn">清除当前缓存数据</li>'+
					'<li class="removeDataAllBtn">清除全部缓存数据</li>'+
				'</ul>'+
				'<div class="jMargin3"><a name="test">插件库</a></div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="common_plugin">1、common_plugin手机电脑通用插件库</li>'+
					'<li class="jasonwap">2、jasonwap手机端插件库</li>'+
					'<li class="jasonweb">3、jasonweb电脑端插件库</li>'+
				'</ul>'+
			'</div>';
			jl.show(template);
		},
		indexEvent:function(){
			var self=this;
			//跳转到template页
			$('#index_box .template').bind('click',function(){
				jl.gotoMod("js/template",{test:888});
			});
			//setData
			$("#index_box .setDataBtn").bind("click",function(){
				jl.setData("test","success");
				alert("保存成功");
			});
			//setData All
			$("#index_box .setDataAllBtn").bind("click",function(){
				jl.setData("test2","success_all","all");
				alert("全局保存成功");
			});
			//getData
			$("#index_box .getDataBtn").bind("click",function(){
				alert(jl.getData("test"))
			});
			//getData All
			$("#index_box .getDataAllBtn").bind("click",function(){
				alert(jl.getData("test2","all"))
			});
			//removeData
			$("#index_box .removeDataBtn").bind("click",function(){
				jl.removeData("all");
				alert("全局清除成功");
			});
			//removeData All
			$("#index_box .removeDataAllBtn").bind("click",function(){
				jl.removeData(true);
				alert("全部清除成功");
			});
			//common_plugin手机电脑通用插件库
			$("#index_box .common_plugin").bind("click",function(){
				jl.gotoMod("js/common_plugin/index");
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