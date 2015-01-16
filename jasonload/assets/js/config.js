var site_url=window.location.host?"http://"+window.location.host:"file:///D:/工作/08jasonload/jasonload/";
var view_url=site_url;
var img_url=view_url+"assets/img/";
jl.config({
	prompt:"mask",
	base:view_url+"assets/",
	alias:{
		"appframework":"relylib/appframework/appframework"
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
	cssTag:{
		index:"0"
	},
	jsTag:{
		index:"0"
	}
});
var cssTag={
	index:"0"
};
var jsTag={
	index:"0"
};