// 有问题
$(document).ready(function(){
	$("form :input.required").each(function(){
		var $required=$("<strong class='high'>*</strong>");//创建一个元素
		$(this).parent().append($required);
	});
	//当文本框失去焦点的时候
	$("form:input").blur(function(){
		var $parent=$(this).parent();
		$parent.find(".formtips").remove();    //删除以前提醒的元素
		// 验证名字
		if($(this).is('#username')){
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
			if(this.value==""||(this.value!=""&& !/.^[0-9]*$/.test(this.value))){
				var errorMsg='请输入正确的qq';
				$parent.append('<span class="formtips onError">'+errorMsg+'</span>');
			}else{
				var okMsg='输入正确';
				$parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
			}
		}

		// 验证邮箱
		if($(this).is('#email')){
			if(this.value==""||(this.value!="" && !/.+@+\.[a-zA-Z]{2,4}$/.test(this.value))){
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
				||(this.value!="" && !/.^[0-9]*$/.test(this.value) )
				||(this.value!="" && /.^[0-9]*$/.test(this.value) && this.length!=11))
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
		$("form .required:input").trigger('blur');
		var numError=$('form .onError').length;
		if(numError){
			return false;
		}
		alert("保存成功");
	});

	$('#reset').click(function(){
		var $r=confirm("确认要删除吗？");
		if($r==true){
			$(".formtips").remove();
			alert("删除成功");
		}
		else{
			return;
		}
	});
});