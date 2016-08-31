$(document).ready(function(){
	// 1.标题判空、
	$('form :input.title').blur(function(){
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

	// 2.上传文档
	// 封装文件上传函数
	// function ajaxFileUpload(){
	// 	$.ajaxFileUpload({
	// 		url:"处理上传文件的服务器",
	// 		secureuri: false, 
	// 		fileElementId: $("input #uploadFile").attr("id"),
	// 		dataType:"json",
	// 		success:function(data, status){
	// 			// 上传成功后将服务器传回来的数据展示在文本编辑器当中:以html的形式传回来
	// 			$("#editor_trigger").html(data);
	// 		},
	// 		error: function (data, status, e){
	// 		//服务器响应失败处理函数
	// 		   alert("文件上传失败");
	// 	    })
		
	// }
	// $(".file").click(function(){
	// 	ajaxFileUpload();
	// });

	


	// 3.预览效果

	$(".preview").click(function(){
	    // 页面跳转
	    $("form :input.title").trigger('blur');
				var numError = $('form .onError').length;
				if(numError){
					return false;
				}else{
					var $title=$("#title").val();
		            sessionStorage.setItem("title",$title);
		            var $html = editor.$txt.html();
		            sessionStorage.setItem("html",$html);
		            window.open('pre_msg.html');
				}



	 });


	// 4.保存至草稿箱
	$(".draft").click(function(){
		$("form :input.title").trigger('blur');
		var numError = $('form .onError').length;
		if(numError){
			return false;
		}else{
		var $title=$("#title").val();
		var $html = editor.$txt.html();
		// 以下分别是获取本地上传和上传文档的信息：需要穿到后台判断出来
		var $imgPath=$("#upload_img").get(0).files[0];
	    var $file = $('#uploadFile').get(0).files[0];
	    $.ajax({
	    	type:"POST",
	    	url:"后台处理到草稿箱的文件",
	    	data:{title:$title,html:$html,imgPath:$imgPath,file:$file},
	    	dataType:"json",
	    	success:function(data){
	    		alert("保存到草稿箱成功");
	    	},
	    	error: function (data, status, e){
	    		alert("保存到草稿箱失败");
	    	}
	    });  //end ajax

		}

	});


	// 5.保存并发布
	$(".issue").click(function(){
		$("form :input.title").trigger('blur');
		var numError = $('form .onError').length;
		if(numError){
			return false;
		}else{
			var $title=$("#title").val();
		    var $html = editor.$txt.html();
		    // 以下分别是获取本地上传和上传文档的信息：需要穿到后台判断出来
		    var $imgPath=$("#upload_img").get(0).files[0];
	        var $file = $('#uploadFile').get(0).files[0];
			var $r=confirm("确认要发布吗？");
			if($r==true){
				$.ajax({
					type:"POST",
					url:"后台处理发布的文件",
					data:{title:$title,html:$html,imgPath:$imgPath,file:$file},
					dataType:"json",
					success:function(data){
	    		        alert("发布成功");
	    	        },
	    	        error: function (data, status, e){
	    		        alert("保存到草稿箱失败");
	    	        }
				});// end ajax
		    }else{
			    return false;
		    }
		}
	});


	// 6.取消
	$(".reset").click(function(){
		var $r=confirm("您还在编辑状态，确认取消吗？");
		if($r==true){
		$("#title").empty();
		$("#upload_img").empty();
		// 清空编辑器内容。
        // 不能传入空字符串，而必须传入如下参数
        editor.$txt.html('<p><br></p>');
		}else{
			return false;
		}
	});



    //      $('#btn1').click(function () {
    //     // 获取编辑器区域完整html代码
    //     var html = editor.$txt.html();

    //     // 获取编辑器纯文本内容
    //     var text = editor.$txt.text();

    //     // 获取格式化后的纯文本
    //     var formatText = editor.$txt.formatText();
    // });


    //      $('#btn1').click(function () {
        // // 清空内容。
        // // 不能传入空字符串，而必须传入如下参数
        // editor.$txt.html('<p><br></p>');
    // });

    //      // 禁用
    // editor.disable();

    // // 启用
    // editor.enable();

});