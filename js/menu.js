// 控制菜单栏的收起和展开
$(document).ready(function(){
	$(".l_menu").click(function(){
		$(this).next().toggle(600)             //下一个元素显示
	})
});