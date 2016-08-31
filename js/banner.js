$(document).ready(function(){
	// 1.banner上传页面判空
	$('form :input.required').blur(function(){

		var $parent=$(this).parent();
		 $parent.find(".tips").remove();
		 // 验证标题

		 if(this.value==""){
			    var errorMsg="不能为空";
			    $(this).parent().append('<span class="tips onError">'+errorMsg+'</span>');
		    }else{
		        var okMsg="输入正确";
		        $(this).parent().append('<span class="tips onSuccess">'+okMsg+'</span>');
		    }
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).triggerHandler("blur");
	});

	// 上传图片可能会有点问题，不知道是不是这样处理
	// 上传图片
	var $imgPath=$("#upload").val();
	if($imgPath==""){
		var errorMsg="请上传图片";
		$(this).parent().append('<span class="tips onError">'+errorMsg+'</span>');
		return;
	}

	// 判断上传的后缀名
	var $strExtension = $imgPath.substr($imgPath.lastIndexOf('.') + 1);
    if ($strExtension != 'jpg' && $strExtension != 'gif'
    && $strExtension != 'png' && $strExtension != 'bmp') {
        alert("请选择图片文件");
        return;
    }




	// 保存	
	$(".save").click(function(){
		$("form :input.required").trigger('blur');
				var numError = $('form .onError').length;
				if(numError){
					return false;
				}else{
				//ajax想服务器传送数据	
					$.post("后台文件",{
						title: $(".til").val();
						imgPath: $("#upload").val();
						url: $(".url").val();
						textarea: $("textarea").val();
					})；
					alert("保存成功");
				}
				
	});

	// 重置
	$(".rest").click(function(){
		var $r=confirm("你还在编辑状态，确认取消吗？");
		if($r==true){
			$(".tips").remove();
		}else{
			return false;
		}
		
	});
});
