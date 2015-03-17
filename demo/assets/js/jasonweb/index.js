define("js/jasonweb/index",["jquery"],function(require,exports,module){
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
			'<div id="jasonweb_index_box" class="jasonwap_index_box">'+
				'<div class="jTop">'+
					'<div class="jLeft">返回</div>'+
					'<div class="jCenter">jasonweb电脑端插件库</div>'+
				'</div>'+
				'<div class="jTopHeight" data-rules="1"></div>'+
				'<div class="jMargin3">jasonweb电脑端插件库</div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="jasonPopup">1、jasonPopup.js弹出框</li>'+
					//'<li class="jasonSelectDlg">2、jasonSelectDlg选择框</li>'+
					'<li class="jasonUtil">2、jasonUtil.js工具包</li>'+
					'<li class="jasonValidate">3、jasonValidate.js提交验证</li>'+
				'</ul>'+
			'</div>';
			jl.show(template);
		},
		indexEvent:function(){
			var self=this;
			//返回
			$('#jasonweb_index_box .jTop').bind('click',function(){
				jl.backtoMod("js/index");
			});
			//弹出框（默认中间弹出）
			$("#jasonweb_index_box .jasonPopup").bind("click",function(){
				jl.gotoMod("js/jasonweb/jasonPopup");
			});
			//工具包
			$("#jasonweb_index_box .jasonUtil").bind("click",function(){
				jl.gotoMod("js/jasonweb/jasonUtil");
			});
			//提交验证
			$("#jasonweb_index_box .jasonValidate").bind("click",function(){
				jl.gotoMod("js/jasonweb/jasonValidate");
			});
		}
	};

	module.exports=index;

});