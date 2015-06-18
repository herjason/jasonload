define("js/jasonwap/index",["jasonwap/jasonSelectDlg"],function(require,exports,module){
	var $=require("jasonwap/jasonSelectDlg");																				  
	require.async("jasonwap/jasonDatePicker");
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
			'<div id="jasonwap_index_box" class="jasonwap_index_box">'+
				'<div class="jTop">'+
					'<div class="jLeft">返回</div>'+
					'<div class="jCenter">jasonwap</div>'+
				'</div>'+
				'<div class="jTopHeight" data-rules="1"></div>'+
				'<div class="jMargin3">jasonwap手机端js组件库</div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="jasonPopup">1、jasonPopup.js弹出框</li>'+
					'<li class="jasonSelectDlg">2、jasonSelectDlg选择框</li>'+
					'<li class="jasonUtil">3、jasonUtil.js工具包</li>'+
					'<li class="jasonValidate">4、jasonValidate.js提交验证</li>'+
				'</ul>'+
			'</div>';
			jl.show(template);
		},
		indexEvent:function(){
			var self=this;
			//返回
			$('#jasonwap_index_box .jTop').bind('click',function(){
				jl.backtoMod("js/index");
			});
			//弹出框（默认中间弹出）
			$("#jasonwap_index_box .jasonPopup").bind("click",function(){
				jl.gotoMod("js/jasonwap/jasonPopup");
			});
			//选择框
			$("#jasonwap_index_box .jasonSelectDlg").bind("click",function(){
				jl.gotoMod("js/jasonwap/jasonSelectDlg");
			});
			//工具包
			$("#jasonwap_index_box .jasonUtil").bind("click",function(){
				jl.gotoMod("js/jasonwap/jasonUtil");
			});
			//提交验证
			$(".jasonwap_index_box .jasonValidate").bind("click",function(){
				jl.gotoMod("js/jasonwap/jasonValidate");
			});
		}
	};
	module.exports=index;

});