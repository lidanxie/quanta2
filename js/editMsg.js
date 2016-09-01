// 修改动态页面的js
$(document).ready(function(){

	//1. 将内容插入到文本框和编辑器当中
	var title=sessionStorage.getItem("edit_title");
	var mainHtml=sessionStorage.getItem("mainHtml");
	// 将内容插入，不知道这样做对不对
	$("#title").val(title);
	$("#editor_trigger").html(mainHtml);

	//


});//end document