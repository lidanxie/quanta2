//预览效果中关闭按钮
$(document).ready(function(){
	$(".close").click(function(){
		$(".zhezhao").hide();
		$(".pre_msg").hide();
		$(".btn :input").hide();
	});
});


// 点击海报显示预览
$(document).ready(function(){
	$(".poster").click(function(){
		$(".zhezhao").toggle();
		$(".pre_msg").toggle();
		$(".btn :input").toggle();
	})
});

// 海报图片轮播还需要做
