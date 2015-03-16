define("js/template",["appframework"],function(require,exports,module){
	var $=require("appframework");																				  
	var template=function(opt){
		var self=this;
		self.opt=$.extend({},{},opt);
	};
	template.prototype={
		init:function(){
			var self=this;
			self.ajaxData();
		},
		ajaxData:function(){
			var self=this;
			self.showTemplate();
		},
		showTemplate:function(){
			var self=this;
			self.templateDom();
			self.templateEvent();
		},
		templateDom:function(){
			var self=this;
			var template='';
			template+=''+
			'<div id="template_box" class="template_box">'+
				'<div class="jTop">'+
					'<div class="jLeft">返回</div>'+
					'<div class="jCenter">模块化页面模板</div>'+
				'</div>'+
				'<div class="jTopHeight"></div>'+
				'<div class="jMargin3">介绍</div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="template">这是页面是使用模块化开发方式实现的，整个页面是一个js，通过jasonload.js的gotoMod()和backtoMod()方法来加载跳转。</li>'+
				'</ul>'+
			'</div>';
			jl.html(template);
		},
		templateEvent:function(){
			var self=this;
			//返回
			$('#template_box .jTop').bind('click',function(){
				jl.backtoMod("js/index");
			});
			console.log(self.opt)
		}
	};

	module.exports=template;

});