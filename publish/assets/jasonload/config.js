var site_url=window.location.host?"http://"+window.location.host:"file:///D:/工作/08jasonload/publish/";
if(site_url=="file:///D:/工作/08jasonload/publish/"){
	alert("您当前是在本地使用静态页面直接进行打开调试，需要先修改站点根目录路径变量site_url，配置文件位于assets/jasonload/config.js");
}
var view_url=site_url;
var img_url=view_url+"assets/img/";
jl.config({
	prompt:"mask",
	base:view_url+"assets/",//前端文件根目录，下面所有路径均相对于该根目录
	alias:{
		"appframework":"relylib/appframework/appframework",
		"jquery":"relylib/jquery/jquery-1_7_2"
	},
	paths:{
		"js":"js",
		"css":"css",
		"jasonwap":"jasonload/jasonwap",
		"relylib":"jasonload/relylib"
	},
	map:[
		[/assets\/jasonload\/(.*)\.js/,"assets\/jasonload\/$1.min.js"],
		[/assets\/jasonload\/(.*?)\.css/,'assets\/jasonload\/$1.min.css']
	],
	preload:["jasonwap/css/jasonUI.css?insertToFirst"],
	cssVTag:{
		js_index:"0"
	},
	jsVTag:{
		js_index:"0"
	},
	pageAnimate:500,
	index:"js/index"//首页页面模块id
});