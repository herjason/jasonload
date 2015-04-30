define("js/jasonweb/jasonUtil",["jquery","jasonweb/jasonUtil"],function(require,exports,module){
	var $=require("jquery");
	var util=require("jasonweb/jasonUtil");																  
	var jasonUtil=function(opt){
		var self=this;
		self.opt=$.extend({},{},opt);
	};
	jasonUtil.prototype={
		init:function(){
			var self=this;
			self.ajaxData();
		},
		ajaxData:function(){
			var self=this;
			self.showJasonUtil();
		},
		showJasonUtil:function(){
			var self=this;
			self.jasonUtilDom();
			self.jasonUtilEvent();
		},
		jasonUtilDom:function(){
			var self=this;
			var template='';
			template+=''+
			'<div id="jasonweb_jasonUtil_box" class="jasonweb_jasonUtil_box">'+
				'<div class="jTop">'+
					'<div class="jLeft">返回</div>'+
					'<div class="jCenter">jasonUtil.js工具包</div>'+
				'</div>'+
				'<div class="jTopHeight"></div>'+
				'<div class="jMargin3">使用例子演示</div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="showMask">显示提示框。</li>'+
					'<li class="hideMask">隐藏提示框。</li>'+
					'<li class="flashMask">闪现提示框。</li>'+
					'<li class="flashMaskCallback">闪现提示信息后改变该文本。</li>'+
					'<li class="getParamA">获取地址栏参数"a"的值</li>'+
					'<li class="getParamB">获取地址栏参数"b"的值</li>'+
					'<li class="objToJson">转换对象为json字符串</li>'+
					'<li class="arrayToJson">转换对象数组为json字符串</li>'+
				'</ul>'+
			'</div>';
			jl.show(template);
		},
		jasonUtilEvent:function(){
			//返回
			$('#jasonweb_jasonUtil_box .jTop').bind('click',function(){
				jl.backtoMod("js/jasonweb/index");
			});
			//显示提示框
			$("#jasonweb_jasonUtil_box .showMask").bind("click",function(){
				util.showMask("这是提示信息，6秒后自动调用隐藏提示框函数");
				setTimeout(function(){util.hideMask()},6000);
			});
			//隐藏提示框
			$("#jasonweb_jasonUtil_box .hideMask").bind("click",function(){
				util.hideMask();
			});
			//闪现提示框
			$("#jasonweb_jasonUtil_box .flashMask").bind("click",function(){
				util.flashMask("这个提示信息默认显示2秒钟");
			});
			//闪现提示信息后改变该文本。
			$("#jasonweb_jasonUtil_box .flashMaskCallback").bind("click",function(){
				var $obj=$(this);
				util.flashMask("这个提示信息设置显示5秒钟，5秒后将改变按钮文本为“5秒后的文本”",function(){
					$obj.html("5秒后的文本")
				});
			});
			//获取地址栏参数a的值
			$("#jasonweb_jasonUtil_box .getParamA").bind("click",function(){
				util.flashMask(util.getParam("a"));
			});
			//获取地址栏参数b的值
			$("#jasonweb_jasonUtil_box .getParamB").bind("click",function(){
				util.flashMask(util.getParam("b"));
			});
			//转换对象为json字符串
			$("#jasonweb_jasonUtil_box .objToJson").bind("click",function(){
				var obj={test1:"111",test2:2222,test3:[{test3_1:333,test3_2:"yes"}]};
				alert(util.stringify(obj));
			});
			//转换对象数组为json字符串
			$("#jasonweb_jasonUtil_box .arrayToJson").bind("click",function(){
				var obj=[{test1:"111",test2:2222,test3:[{test3_1:333,test3_2:"yes"}]},{test1:"111",test2:2222,test3:[{test3_1:333,test3_2:"yes"}]}];
				alert(util.stringify(obj));
			});
		}
	};

	module.exports=jasonUtil;

});