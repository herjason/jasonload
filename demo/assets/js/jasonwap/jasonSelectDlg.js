define("js/jasonwap/jasonSelectDlg",["appframework","jasonwap/jasonSelectDlg"],function(require,exports,module){
	var $=require("jasonwap/jasonSelectDlg");																				  
	var jasonSelectDlg=function(opt){
		var self=this;
		self.opt=$.extend({},{},opt);
	};
	jasonSelectDlg.prototype={
		init:function(){
			var self=this;
			self.jasonSelectDlgDom();
			self.jasonSelectDlgEvent();
		},
		jasonSelectDlgDom:function(){
			var self=this;
			var template='';
			template+=''+
			'<div id="jasonwap_jasonSelectDlg_box" class="jasonwap_jasonSelectDlg_box">'+
				'<div class="jTop">'+
					'<div class="jLeft">返回</div>'+
					'<div class="jCenter">jasonSelectDlg.js选择框</div>'+
				'</div>'+
				'<div class="jTopHeight"></div>'+
				'<div class="jMargin3">使用例子演示</div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="singleSelectDlg">单项选择框</li>'+
					'<li class="multipleSelectDlg">多项选择框</li>'+
				'</ul>'+
			'</div>';
			jl.show(template);
		},
		jasonSelectDlgEvent:function(){
			//返回
			$('#jasonwap_jasonSelectDlg_box .jTop').bind('click',function(){
				jl.backtoMod("js/index");
			});
			//单项选择框
			var dataList=[{id:1,name:"选项1"},{id:2,name:"选项2"},{id:3,name:"选项3"}];
			$("#jasonwap_jasonSelectDlg_box .singleSelectDlg").jasonSelectDlg(dataList,{
				value:"id",
				text:"name",
				selectedCallback:function(data){
					console.log(data);
					//$("#select_id").val(data.value).html(data.text);
				}
			});
			//多项目选择框
			var dataList=[{value:1,text:"选项1"},{value:2,text:"选项2"},{value:3,text:"选项3"}];
			$("#jasonwap_jasonSelectDlg_box .multipleSelectDlg").jasonSelectDlg(dataList,{
				singleSelect:false,
				selectedCallback:function(data){
					console.log(data);
					//$("#select_id").val(data.value).html(data.text);
				}
			});
		}
	};

	module.exports=jasonSelectDlg;

});