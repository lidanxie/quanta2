// 将获取到的联系人信息通过ajax传递到后台
// 2.验证联系人信息
$(document).ready(function(){
	// $("#formMsg .required").each(function(){
	// 	     console.log("此处执行");
	// 		var $required = $("<strong class='high'> *</strong>"); //创建元素
	// 		$(this).parent().append($required); //然后将它追加到文档中
	// 	});
	// 当文本框失去焦点的时候

	$('form :input').blur(function(){
		var $parent=$(this).parent();
		$parent.find(".formtips").remove();    //删除以前提醒的元素
		// 验证名字
		if( $(this).is('#username') ){
			if(this.value==""){
				var errorMsg="请输入名字";
			    $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
			}
			else{
			    var okMsg='输入正确';
			    $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
		    }
		}

		// 验证qq
		if($(this).is('#qq_num')){
			if(this.value==""||(this.value!=""&& !/^[0-9]*$/.test(this.value))){
				var errorMsg='请输入正确的qq';
				$parent.append('<span class="formtips onError">'+errorMsg+'</span>');
			}else{
				var okMsg='输入正确';
				$parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
			}
		}

		// 验证邮箱
		if($(this).is('#email')){
			if(this.value==""||( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) )){
				var errorMsg='请输入正确的E-Mail地址';
				$parent.append('<span class="formtips onError">'+errorMsg+'</span>');
			}else{
				var okMsg='输入正确';
				$parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
			}
		}

		// 验证手机号码
		if($(this).is('#tel_num')){
			if(this.value==""
				||(this.value!="" && !/^[0-9]*$/.test(this.value) )
				||(this.value!="" && !/^1\d{10}$/.test(this.value)))
			{
				var errorMsg='请输入正确的手机号码';
				$parent.append('<span class="formtips onError">'+errorMsg+'</span>');
			}else{
				var okMsg='输入正确';
				$parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
			}
		}
	}).keyup(function(){
		$(this).triggerHandler("blur");
	}).focus(function(){
		$(this).triggerHandler("blur");
	});

	// 提交表单，需要验证的时候
	$('#save').click(function(){
		$("form :input").trigger('blur');
		var numError=$('form .onError').length;
		if(numError){
			return false;
		}else{
			// ajax向服务器传送数据
			// $.post("后台文件",{
			//     username: $("#username").val();
			//     qq_num: $("#qq_num").val();
			//     email: $("#email").val();
			//     tel_num: $("#tel_num").val();
			//     short_num: $("#short_num").val();
		 //    })
		     alert("保存成功");
	    }
   });

	$('#reset').click(function(){
		var $r=confirm("确认要取消吗？");
		if($r==true){
			$(".formtips").remove();
		}
		else{
			return false;
		}
	});
});