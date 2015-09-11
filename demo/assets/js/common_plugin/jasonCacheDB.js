define("js/common_plugin/jasonCacheDB",["jquery","common_plugin/jasonCacheDB"],function(require,exports,module){
	var $=require("jquery"),goods_id=1;
	var db=require("common_plugin/jasonCacheDB"),table;																			  
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
			self.showJasonCacheDB();
		},
		showJasonCacheDB:function(){
			var self=this;
			self.jasonCacheDBDom();
			self.jasonCacheDBEvent();
		},
		jasonCacheDBDom:function(){
			var self=this;
			var template='';
			template+=''+
			'<div id="common_plugin_jasonCacheDB_box" class="common_plugin_jasonCacheDB_box">'+
				'<div class="jTop">'+
					'<div class="jLeft">返回</div>'+
					'<div class="jCenter">jasonCacheDB.js缓存数据库</div>'+
				'</div>'+
				'<div class="jTopHeight"></div>'+
				'<div class="jMargin3">使用例子演示</div>'+
				'<ul class="jList jMargin3 jPadding5">'+
					'<li class="init">实例化一个表对象</li>'+
					'<li class="select">设定查询的字段</li>'+
					'<li class="where">设定查询条件</li>'+
					'<li class="order_by_gid">设定gid排序</li>'+
					'<li class="order_by_price">设定price排序</li>'+
					'<li class="order_by_num">设定num排序</li>'+
					'<li class="order_by_goods_name">设定goods_name排序</li>'+
					'<li class="result">查询记录（返回所有结果对象数组）</li>'+
					'<li class="row">查询记录（返回单个记录对象）</li>'+
					'<li class="insert">插入记录</li>'+
					'<li class="update">修改记录</li>'+
					'<li class="delete">删除记录</li>'+
					'<li class="destroy">删除该表</li>'+
				'</ul>'+
			'</div>';
			jl.show(template);
		},
		jasonCacheDBEvent:function(){
			console.log($(window).height())
			//返回
			$('#common_plugin_jasonCacheDB_box .jTop').bind('click',function(){
				jl.backtoMod("js/common_plugin/index");
			});
			//实例化一个表对象
			$("#common_plugin_jasonCacheDB_box .init").bind("click",function(){
				table=new db({table_model:{
					gid:0,
					goods_name:"",
					price:0,
					num:0,
					remark:""
				},table_name:"shoppingcart"});
				console.log("success");
			});
			//设定查询的字段
			$("#common_plugin_jasonCacheDB_box .select").bind("click",function(){
				table.select("gid,goods_name,price,num");
				console.log("success");
			});
			//设定查询条件
			$("#common_plugin_jasonCacheDB_box .where").bind("click",function(){
				table.where({gid:3});
				console.log("success");
			});
			//设定gid排序
			$("#common_plugin_jasonCacheDB_box .order_by_gid").bind("click",function(){
				table.order_by(["gid","desc"]);
				console.log("success");
			});
			//设定price排序
			$("#common_plugin_jasonCacheDB_box .order_by_price").bind("click",function(){
				table.order_by(["price","desc"]);
				console.log("success");
			});
			//设定num排序
			$("#common_plugin_jasonCacheDB_box .order_by_num").bind("click",function(){
				table.order_by(["num","desc"]);
				console.log("success");
			});
			//设定goods_name排序
			$("#common_plugin_jasonCacheDB_box .order_by_goods_name").bind("click",function(){
				table.order_by(["goods_name","desc"]);
				console.log("success");
			});
			//查询记录（返回所有结果对象数组）
			$("#common_plugin_jasonCacheDB_box .result").bind("click",function(){
				console.log(table.result());
			});
			//查询记录（返回单个记录对象）
			$("#common_plugin_jasonCacheDB_box .row").bind("click",function(){
				console.log(table.row());
			});
			//插入记录
			$("#common_plugin_jasonCacheDB_box .insert").bind("click",function(){
				table.insert({
					gid:goods_id,
					goods_name:"菜品名称",
					price:goods_id*2.8,
					num:goods_id*2,
					remark:"这是备注"
				});
				goods_id+=1;
				console.log("success");
				console.log(table._getKey());
			});
			//修改记录
			$("#common_plugin_jasonCacheDB_box .update").bind("click",function(){
				table.update({
					goods_name:"修改后的菜品名称",
					price:1
				},{gid:2});
				console.log("success");
			});
			//删除记录
			$("#common_plugin_jasonCacheDB_box .delete").bind("click",function(){
				table.delete({gid:2});
				console.log("success");
			});
			//删除该表
			$("#common_plugin_jasonCacheDB_box .destroy").bind("click",function(){
				table.destroy();
				console.log("success");
			});
		}
	};

	module.exports=template;

});