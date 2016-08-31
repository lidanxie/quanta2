// 动态预览

$(document).ready(function(){
	// 获取当前预览的时间
		function getDate(){
			var d = new Date();
            var vYear = d.getFullYear();
            var vMon = d.getMonth() + 1;
            var vDay = d.getDate();
            var h = d.getHours(); 
            var m = d.getMinutes(); 
            s=vYear+"/"+(vMon<10 ? "0" + vMon : vMon)+"/"+(vDay<10 ? "0"+ vDay : vDay)+" "+(h<10 ? "0"+ h : h)+":"+(m<10 ? "0" + m : m);
            return s;
		}
	var time=getDate();
	// 获取本地存储的数据
	var title=sessionStorage.getItem("title");
	var mainHtml=sessionStorage.getItem("html");
	$("h1").html(title);
	$(".time").text(time);
	$("#content").append(mainHtml);
});