$(document).ready(function(){
	// 1.banner上传页面判空
	$("form :input .required").each(function(){
		if($(this.value=="")){
			var errorMsg="此处不能为空";
			$(this).parent().append('<span class="">'+errorMsg+'</span>')
		}
	});
	S
	
});