// 处理查看动态页面
$(document).ready(function(){
	// 1.获取到数据库中的信息，
	// 测试数据
	var _jsonData=[{
		"title":"Quanta(量子)信息技术服务中心第十届招新公告",
		"html":"<div>哈哈哈哈哈</div>",
		"time":"2016-9-1  9:45"
	}];
	$.ajax({
		type:"POST",
		url:"后台处理文件",
		dataType:"json",
		success:function(data){
			// 取得数据之后将数据添加在页面上
			// 下面两个从数据库中获取的数据
			//_jsonData只是做为测试
			var $title=_jsonData['title'];
		    var $mainHtml = _jsonData['html']
		    var $time=_jsonData['time'];
		    $("h1").html($title);
		    $(".time").text($time);
		    $("#content").append($mainHtml);
		}
		error:function(){
			alert("数据加载出错啦");
		}
	});  //end ajax

	// 2.点击编辑按钮
	$(".edit").click(function(){
		var $title=$("h1").val();
		sessionStorage.setItem("edit_title",$title);
		var $html = $("#content").html();
		sessionStorage.setItem("mainHtml",$html);
		window.open('edit_msg.html');
	});// end click

	// 3.删除动态
	$(".delete").click(function(){
		var confirm("确定删除这条动态码？");
		if(r==true){
			// 发送数据给后台进行删除
			$.ajax({
				type:"POST",
				url:"后台删除动态的文件",
				data:{
					title:$("h1").val(),
					time:$(".time").val(),
					mainHtml:$("#content").html()
				},
				dataType:"json",
				success:function(data){
					$("#container").html("<p><p>");
					var $error=$('<div class="error">对不起，内容不存在</div>');
					$("container").append($error);
				}
				error:function(data){
					alert("系统出错，删除失败");
				}

			});  //end ajax
		}else{
			return false;
		}
	});  //end click

});//end document