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
					'<li class="gotoUrl">加载跳转函数</li>'+
					'<li class="openUrl">加载新开窗口</li>'+
					'<li class="submitForm">表单提交</li>'+
					'<li class="getParamA">获取地址栏参数"a"的值</li>'+
					'<li class="getParamB">获取地址栏参数"b"的值</li>'+
					'<li class="objToJson">转换对象为json字符串</li>'+
					'<li class="arrayToJson">转换对象数组为json字符串</li>'+
					'<li class="getTime">转换日期时间2015-05-03 10:59和2015-05-08 10:59为毫秒数</li>'+
					'<li class="placeholder"><input type="text" placeholder="测试值" /></li>'+
					'<li class="prompt"><span jasonPrompt="{template}">？</span></li>'+
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
			//加载跳转函数
			$("#jasonweb_jasonUtil_box .gotoUrl").bind("click",function(){
				util.gotoUrl("http://www.baidu.com");
			});
			//加载新开窗口
			$("#jasonweb_jasonUtil_box .openUrl").bind("click",function(){
				util.openUrl("http://www.baidu.com");
			});
			//表单提交
			$("#jasonweb_jasonUtil_box .submitForm").bind("click",function(){
				util.submitForm("http://www.baidu.com?action=submit");
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
			//转换日期时间2015-05-03 10:59和2015-05-08 10:59为毫秒数
			$("#jasonweb_jasonUtil_box .getTime").bind("click",function(){
				alert(util.getTime("2015-05-03 10:59")+","+util.getTime("2015-05-08 10:59"))
			});
			//重写placeholder属性，兼容支持所有浏览器
			util.placeholder();
			//绑定属性jasonPrompt显示提示框
			util.prompt({template:'<div style="width:80px;border:1px solid #ccc;">这是提示框显示的内容</div>'});
		}
	};

	module.exports=jasonUtil;

});