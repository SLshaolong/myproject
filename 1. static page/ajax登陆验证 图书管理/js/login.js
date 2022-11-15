$(function(){
	var Rcolor=function(){
		var lineColor='#'+parseInt(Math.random() * 0xffffff).toString(16);
		var bacColor='#'+parseInt(Math.random() * 0xffffff).toString(16);
		var bac=document.querySelector('body');
		bac.style.backgroundImage="linear-gradient(to right ,"+lineColor+","+bacColor+")"
	}
	// 切换背景函数
	Rcolor();
	setInterval(Rcolor,3000);
	// 表单提交检测
	
	
	
	
	
})