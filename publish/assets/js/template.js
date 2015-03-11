define("js/template",["jquery"],function(require,exports,module){
	var $=require("jquery");																				  
	var module_class=function(opt){
		var self=this;
		self.opt=$.extend({},{},opt);
	};
	module_class.prototype={
		init:function(){
			var self=this;
			self.ajaxData();
		},
		ajaxData:function(){
			var self=this;
			self.showPage();
		},
		showPage:function(){
			var self=this;
			self.pageDom();
			self.pageEvent();
		},
		pageDom:function(){
			var self=this;
			var template='';
			template+=''+
			'<div id="template_content" class="template_content">'+
				'<div class="jTop">'+
					'<div class="jLeft">返回</div>'+
					'<div class="jCenter">模块化页面模板</div>'+
				'</div>'+
				'<div class="jTopHeight"></div>'+
				'<div class="jMargin3">介绍</div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="template">这是一个模块化的模板页面。</li>'+
					'<li class="setIndexData">设置首页保存的数据</li>'+
					'<li class="getIndexData">获取首页保存的数据</li>'+
				'</ul>'+
			'</div>';
			jl.show(template);
		},
		pageEvent:function(){
			//返回
			$('#template_content .jTop').bind('click',function(){
				jl.backtoMod("js/index");
			});
			
			//set index data
			$('#template_content .setIndexData').bind("click",function(){
				jl.setData("test","template",false,"js/index");
				alert("success")
			});

			//get index data
			$('#template_content .getIndexData').bind("click",function(){
				alert(jl.getData("test","js/index"))
			});
		}
	};

	module.exports=module_class;

});