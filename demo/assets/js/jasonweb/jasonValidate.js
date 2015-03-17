define("js/jasonweb/jasonValidate",["jquery","jasonweb/jasonUtil"],function(require,exports,module){
	var $=require("jquery");
	var util=require("jasonweb/jasonUtil");
	require.async("jasonweb/jasonValidate");																	  
	var jasonValidate=function(opt){
		var self=this;
		self.opt=$.extend({},{},opt);
	};
	jasonValidate.prototype={
		init:function(){
			var self=this;
			self.ajaxData();
		},
		ajaxData:function(){
			var self=this;
			self.showJasonValidate();
		},
		showJasonValidate:function(){
			var self=this;
			self.jasonValidateDom();
			self.jasonValidateEvent();
		},
		jasonValidateDom:function(){
			var self=this;
			var template='';
			template+=''+
			'<div id="jasonweb_jasonValidate_box" class="jasonweb_jasonValidate_box">'+
				'<div class="jTop">'+
					'<div class="jLeft">返回</div>'+
					'<div class="jCenter">jasonValidate.js提交校验</div>'+
				'</div>'+
				'<div class="jTopHeight"></div>'+
				'<div class="jMargin3">使用例子演示</div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="jLabelInput">'+
						'<label>用户名：</label>'+
						//'<input class="name" data-rules="{required:[true,\'请输入用户名\']}" placeholder="请输入用户名" />'+
						'<input class="name" placeholder="请输入用户名" />'+
					'</li>'+
					'<li class="jLabelInput">'+
						'<label>密&nbsp;&nbsp;码：</label>'+
						'<input class="password" type="password" placeholder="请输入密码" />'+
					'</li>'+
					'<li class="jLeftFixed">'+
						'<label class="jLeft">身份类型：</label>'+
						'<div class="jRight"><select><option>请选择</option><option value="1">身份证</option><option value="2">驾驶证</option></select></div>'+
					'</li>'+
					'<li class="jLabelInput">'+
						'<label>年龄：</label>'+
						//'<input type="number" data-rules="{min:[\'a\',\'年龄必须在16岁以上\'],max:[26,\'年龄必须在26岁以下\'],number:[true,\'年龄必须为数值\']}" placeholder="请输入年龄，16岁以上" />'+
						'<input type="number" placeholder="请输入年龄，16岁以上" />'+
					'</li>'+
					'<li class="jLeftFixed">'+
						'<label class="jLeft">性别：</label>'+
						//'<div class="jRight" data-rules="{radio:[true,\'请选择性别\']}">'+
						'<div class="jRight">'+
							'<input type="radio" name="jasonValidate_box-sex" value="1" />男，'+
							'<input type="radio" name="jasonValidate_box-sex" value="2" />女'+
						'</div>'+
					'</li>'+
					'<li class="jLabelInput">'+
						'<label>邮箱：</label>'+
						'<input type="text" data-rules="{required:[true,\'请输入邮箱\'],email:[true,\'请输入正确的邮箱格式\']}" placeholder="请输入邮箱" />'+
					'</li>'+
				'</ul>'+
				'<div class="jBtn jMargin3 submit">提交</div>'+
			'</div>';
			jl.show(template);
		},
		jasonValidateEvent:function(){
			//返回
			$('#jasonweb_jasonValidate_box .jTop').bind('click',function(){
				jl.backtoMod("js/jasonweb/index");
			});
			//绑定提交按钮
			$("#jasonweb_jasonValidate_box .submit").bind("click",function(){
				jl.use("jasonweb/jasonValidate",function(validate){
					validate({src:"#jasonweb_jasonValidate_box",callback:function(){
						console.log("success");
						console.log(util.radioVal("#jasonweb_jasonValidate_box .sex input"))
					}});
				});
			});
		}
	};

	module.exports=jasonValidate;

});