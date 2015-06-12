define("js/jasonwap/jasonPopup",["appframework","jasonwap/jasonPopup"],function(require,exports,module){
	var $=require("jasonwap/jasonPopup");																				  
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
			self.showJasonPopup();
		},
		showJasonPopup:function(){
			var self=this;
			self.jasonPopupDom();
			self.jasonPopupEvent();
		},
		jasonPopupDom:function(){
			var self=this;
			var template='';
			template+=''+
			'<div id="jasonwap_jasonPopup_box" class="jasonwap_jasonPopup_box">'+
				'<div class="jTop">'+
					'<div class="jLeft">返回</div>'+
					'<div class="jCenter">jasonPopup.js弹出框</div>'+
				'</div>'+
				'<div class="jTopHeight"></div>'+
				'<div class="jMargin3">使用例子演示</div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="popup">基本弹出框</li>'+
					'<li class="noBtnPopup">不带按钮弹出框</li>'+
					'<li class="closeBtnPopup">带关闭按钮弹出框</li>'+
					'<li class="noBtnNoTitlePopup">不带按钮弹出框</li>'+
					'<li class="leftPopup">左边弹出框</li>'+
					'<li class="leftAllPopup">左边满屏弹出框</li>'+
					'<li class="rightPopup">右边弹出框</li>'+
					'<li class="rightAllPopup">右边满屏弹出框</li>'+
					'<li class="topPopup">顶部弹出框</li>'+
					'<li class="bottomPopup">底部弹出框</li>'+
				'</ul>'+
			'</div>';
			jl.show(template);
		},
		jasonPopupEvent:function(){
			//返回
			$('#jasonwap_jasonPopup_box .jTop').bind('click',function(){
				jl.backtoMod("js/jasonwap/index");
			});
			//基本弹出框
			$("#jasonwap_jasonPopup_box .popup").bind("click",function(){
				$.jasonPopup({
					title:"基本弹出框",
					message:"<div>弹出框内容，支持html</div>"
				});
			});
			//不带按钮弹出框
			$("#jasonwap_jasonPopup_box .noBtnPopup").bind("click",function(){
				$.jasonPopup({
					title:"不带按钮弹出框",
					message:"<div>弹出框内容，支持html</div>",
					noBtn:true,
					isBgClick:true,
					isBoxClick:true
				});
			});
			//带关闭按钮弹出框
			$("#jasonwap_jasonPopup_box .closeBtnPopup").bind("click",function(){
				$.jasonPopup({
					title:"带关闭按钮弹出框",
					message:"<div>弹出框内容，支持html</div>",
					closeBtn:true
				});
			});
			//不带按钮不带标题弹出框
			$("#jasonwap_jasonPopup_box .noBtnNoTitlePopup").bind("click",function(){
				$.jasonPopup({
					message:"<div>弹出框内容，支持html</div>",
					noBtn:true,
					isBgClick:true
				});
			});
			//左边弹出框
			$("#jasonwap_jasonPopup_box .leftPopup").bind("click",function(){
				$.jasonPopup({
					title:"左边弹出框",
					message:"<div>弹出框内容，支持html</div>",
					position:"left",
					closeBtn:true
				});
			});
			//左边满屏弹出框
			$("#jasonwap_jasonPopup_box .leftAllPopup").bind("click",function(){
				$.jasonPopup({
					title:"左边满屏弹出框",
					message:"<div>弹出框内容，支持html</div>",
					position:"left",
					closeBtn:true,
					height:1
				});
			});
			//右边弹出框
			$("#jasonwap_jasonPopup_box .rightPopup").bind("click",function(){
				$.jasonPopup({
					title:"右边弹出框",
					message:"<div>弹出框内容，支持html</div>",
					position:"right",
					closeBtn:true
				});
			});
			//左边满屏弹出框
			$("#jasonwap_jasonPopup_box .rightAllPopup").bind("click",function(){
				$.jasonPopup({
					title:"右边满屏弹出框",
					message:"<div>弹出框内容，支持html</div>",
					position:"right",
					closeBtn:true,
					height:1
				});
			});
			//顶部弹出框
			$("#jasonwap_jasonPopup_box .topPopup").bind("click",function(){
				$.jasonPopup({
					title:"顶部弹出框",
					message:"<div>弹出框内容，支持html</div>",
					position:"top",
					isBgClick:true
				});
			});
			//底部弹出框
			$("#jasonwap_jasonPopup_box .bottomPopup").bind("click",function(){
				$.jasonPopup({
					title:"底部弹出框",
					message:"<div>弹出框内容，支持html</div>",
					position:"bottom",
					closeBtn:true,
					isBgClick:true
				});
			});
		}
	};

	module.exports=template;

});