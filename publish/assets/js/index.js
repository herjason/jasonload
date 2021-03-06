define("js/index",["jquery"],function(require,exports,module){
	var $=require("jquery");																			  
	var index=function(opt){
		var self=this;
		self.opt=$.extend({},{},opt);
	};
	index.prototype={
		init:function(){
			var self=this;
			self.ajaxData();
		},
		ajaxData:function(){
			var self=this;
			self.showIndex();
		},
		showIndex:function(){
			var self=this;
			self.indexDom();
			self.indexEvent();
		},
		indexDom:function(){
			var self=this;
			var template='';
			template+=''+
			'<div id="index_content" class="index_content">'+
				'<div class="jTop">'+
					'<div class="jCenter">首页</div>'+
				'</div>'+
				'<div class="jTopHeight"></div>'+
				'<div class="jMargin3">介绍</div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li>jasonload框架是一个实现整站模块化开发的框架，每个页面是一个js，通过jl.gotoMod()和jl.backtoMod()方法来加载跳转。</li>'+
					'<li class="template">跳转到template页</li>'+
					'<li class="setDataBtn">setData("test",{retcode:0,retmsg:"success"})</li>'+
					'<li class="getDataBtn">getData("test")</li>'+
				'</ul>'+
			'</div>';
			jl.show(template);
		},
		indexEvent:function(){
			//跳转到template页
			$('#index_content .template').bind('click',function(){
				jl.gotoMod("js/template");
			});
			//setData
			$("#index_content .setDataBtn").bind("click",function(){
				jl.setData("test","success");
				alert("保存成功");
			});
			//getData
			$("#index_content .getDataBtn").bind("click",function(){
				console.log(jl.getData("test"));
				alert(jl.getData("test"))
			});
			var undefined;
			console.log(typeof(test));
		}
	};

	module.exports=index;

});