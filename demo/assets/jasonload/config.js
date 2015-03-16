var site_url=window.location.host?"http://"+window.location.host:"file:///D:/工作/08jasonload/demo/";
var view_url=site_url;
var img_url=view_url+"assets/img/";
jl.config({
	prompt:"mask",
	base:view_url+"assets/",//前端文件根目录，下面所有路径均相对于该根目录
	alias:{//别名配置，特别是对引用类库的配置
		"appframework":"relylib/appframework/appframework",
		"jquery":"relylib/jquery/jquery-1_7_2"
	},
	paths:{
		"js":"js",
		"css":"css",
		"jasonwap":"jasonload/jasonwap",
		"jasonweb":"jasonload/jasonweb",
		"relylib":"jasonload/relylib"
	},
	map:[
		[/assets\/jasonload\/(.*)\.js/,"assets\/jasonload\/$1.min.js"],
		[/assets\/jasonload\/(.*?)\.css/,'assets\/jasonload\/$1.min.css']
	],
	preload:["css/common.css?insertToFirst","jasonwap/css/jasonUI.css?insertToFirst"],
	cssVTag:{
		js_index:"0"
	},
	jsVTag:{
		js_index:"0"
	},
	pageAnimate:500,
	index:"js/index"//首页页面模块id
});