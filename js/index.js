// 以下为banner管理页--首页的基本js

// 1.获取数据：展示在页面当中
// $(document).ready(function(){
// 	// 以下是想服务器请求数据，并展示出来:可以
// 	$.ajax({
// 		type:"POST",
// 		url:"后台文件",
// 		dataType:"json",
// 		success:function(data){
// 			$(".banner").empty();
// 			var $html='<ul></ul>';
// 			$.each( data ,function(imgIndex,img){
// 				$html+='<li><div class="item"><div class="img"><a href="banner.html"><img src=\"'+img['bannerSrc']+'\"></a><section title=".roundedTwo"></section></div><a href="banner.html"><p>'+img['bannerTil']+'</p></a></div></li>';
// 			});
// 			$(".banner").html($html);
// 			var $add_banner=$('<div class="item add_banner"><a href="banner.html"><img src="img/add_banner.png"></a><a href="banner.html"><p>点击添加banner</p></a></div>');
// 	        $(".banner").append($add_banner);
// 		}
// 	});

// 	//以下作为测试的数据
// 	// _jsonData=[{    //用数组保存
// 	// 	"bannerSrc":"img/u59.png",
// 	// 	"bannerTil":"Quanta&nbsp;11th招新"
// 	// },
// 	// {
// 	// 	"bannerSrc":"img/u59.png",
// 	// 	"bannerTil":"Quanta&nbsp;11th招新"
// 	// }];
// 	//   var $html=$('<ul></ul>');
	  
// 	// $.each( _jsonData ,function(imgIndex,img){
// 	// 	// 路径对了就差不多了
// 	// 			$html+='<li><div class="item"><div class="img"><a href="banner.html"><img src=\"'+img['bannerSrc']+'\"></a><section title=".roundedTwo"></section></div><a href="banner.html"><p>'+img['bannerTil']+'</p></a></div></li>';
// 	// });
// 	// $(".banner").html($html);
// 	// var $add_banner=$('<div class="item add_banner"><a href="banner.html"><img src="img/add_banner.png"></a><a href="banner.html"><p>点击添加banner</p></a></div>');
// 	// $(".banner").append($add_banner);

// });


//2.点击批量管理按钮，全部选中，并且显示“删除banner”的按钮
$(document).ready(function(){
	$(".col_btn").click(function(){
		// 先判断
		var $roundedTwo=$('<div class="roundedTwo"><div>');
		// 通过ajax获取数据
		// $.ajax({
		// 	type:"POST",
		// 	url:"后台的文件",
		// 	success:function(data){
		// 		var $input=$('<input type="checkbox" value="None" id="1" name="check"  checked/>');
		//         if($(this).text()=="批量管理banner"){
		//             $(".col_btn").text("取消批量管理");
		//             $(".delete").text("删除banner");

		//             // 以下需要添加全部选中的样式
		//             $("section").append($roundedTwo);
		//             $.each( _jsonData,function(bannerId,banner){
		// 	            var $input=$('<input type="checkbox" value="None" id=\"'+banner['bannerId']+'\"name="check"  checked/>');
		// 	            $('.roundedTwo').append($input);
		// 	            var $label=$(' <label for="1"></label>');
		//                 $(':input').after($label);
		//             });
		//         }else{
		// 	        $(".col_btn").text("批量管理banner");
		//             $(".delete").text("");
		//             $(".roundedTwo").remove();

		//         }
		// 	}
		// });
		// 下列json数组用于测试
		var _jsonData=[{"bannerId":1},{"bannerId":2},{"bannerId":3},{"bannerId":4},{"bannerId":5}];
		
		// var $input=$('<input type="checkbox" value="None" id="1" name="check"  checked/>');
		if($(this).text()=="批量管理banner"){
		    $(".col_btn").text("取消批量管理");
		    $(".delete").text("删除banner");

		    // 以下需要添加全部选中的样式
		    $("section").append($roundedTwo);
		    var $input='';
		    var $label='';
		    // 此处循环有错，每次都是循环到最后一个才出来的，可以找一个经过一次循环就行的
		    $.each( _jsonData,function(bannerId,banner){
			    $input=$('<input type="checkbox" value="None" id=\"'+banner['bannerId']+'\"name="check"  checked/>');
			    $label=$(' <label for=\"'+banner['bannerId']+'\"></label>');
		    });
		        $('.roundedTwo').append($input);
		        $(':input').after($label);

		   
		}else{
			$(".col_btn").text("批量管理banner");
		    $(".delete").text("");
		    $(".roundedTwo").remove();

		}
	
	});  
});  
	// 3.点击删除的时候。需要做的事
	$(document).ready(function(){
		$(".delete").click(function(){
	 	    if(":input:checked").{
	 	    	// 选中的话，get到对应的id，向后台传送对应的id删除数据库中的内容，同时移除节点。
	 	    	$len=$(":input:checked").length();
	 	    	var _jsonData=[];
	 	    	for(var i=0;i<$len;i++){
	 	    		_jsonData.push($(":input:checked").attr("id"));
	 	    	}
	 	    	$.ajax({
	 	    		type:"POST",
	 	    		url:"后台删除节点的文件",
	 	    		// 这里有没有错？
	 	    		data:JSON._jsonData[],
	 	    		success:function(data){
	 	    			$(":input:checked").parentsUntil("li").remove();
	 	    		}
	 	    	})
	 	    }
	   });
	});

	 




// //4.拖动改变图片顺序: 实现了，可以拖动，但是还是存在一个小问题，定位的问题

// 	$(function() {
// 		function Pointer(x, y) {
// 			this.x = x ;
// 			this.y = y ;
// 		}
// 		function Position(left, top) {
// 			this.left = left ;
// 			this.top = top ;
// 		}
// 		$(".banner .item").each(function(i) {
// 			this.init = function() { // 初始化
// 				this.box = $(this).parent() ;
// 				$(this).attr("index", i).css({
// 					position : "absolute",
// 					left : this.box.offset().left,
// 					top : this.box.offset().top
// 				}).appendTo(".banner") ;
// 				this.drag() ;
// 			},
// 			this.move = function(callback) {  // 移动
// 				$(this).stop(true).animate({
// 					left : this.box.offset().left,
// 					top : this.box.offset().top
// 				}, 500, function() {
// 					if(callback) {
// 						callback.call(this) ;
// 					}
// 				}) ;
// 			},
// 			this.collisionCheck = function() {
// 				var currentItem = this ;
// 				var direction = null ;
// 				$(this).siblings(".item").each(function() {
// 					if(
// 						currentItem.pointer.x > this.box.offset().left &&
// 						currentItem.pointer.y > this.box.offset().top &&
// 						(currentItem.pointer.x < this.box.offset().left + this.box.width()) &&
// 						(currentItem.pointer.y < this.box.offset().top + this.box.height())
// 					) {
// 						// 返回对象和方向
// 						if(currentItem.box.offset().top < this.box.offset().top) {
// 							direction = "down" ;
// 						} else if(currentItem.box.offset().top > this.box.offset().top) {
// 							direction = "up" ;
// 						} else {
// 							direction = "normal" ;
// 						}
// 						this.swap(currentItem, direction) ;
// 					}
// 				}) ;
// 			},
// 			this.swap = function(currentItem, direction) { // 交换位置
// 				if(this.moveing) return false ;
// 				var directions = {
// 					normal : function() {
// 						var saveBox = this.box ;
// 						this.box = currentItem.box ;
// 						currentItem.box = saveBox ;
// 						this.move() ;
// 						$(this).attr("index", this.box.index()) ;
// 						$(currentItem).attr("index", currentItem.box.index()) ;
// 					},
// 					down : function() {
// 						// 移到上方
// 						var box = this.box ;
// 						var node = this ;
// 						var startIndex = currentItem.box.index() ;
// 						var endIndex = node.box.index(); ;
// 						for(var i = endIndex; i > startIndex ; i--) {
// 							var prevNode = $(".banner .item[index="+ (i - 1) +"]")[0] ;
// 							node.box = prevNode.box ;
// 							$(node).attr("index", node.box.index()) ;
// 							node.move() ;
// 							node = prevNode ;
// 						}
// 						currentItem.box = box ;
// 						$(currentItem).attr("index", box.index()) ;
// 					},
// 					up : function() {
// 						// 移到上方
// 						var box = this.box ;
// 						var node = this ;
// 						var startIndex = node.box.index() ;
// 						var endIndex = currentItem.box.index(); ;
// 						for(var i = startIndex; i < endIndex; i++) {
// 							var nextNode = $(".banner .item[index="+ (i + 1) +"]")[0] ;
// 							node.box = nextNode.box ;
// 							$(node).attr("index", node.box.index()) ;
// 							node.move() ;
// 							node = nextNode ;
// 						}
// 						currentItem.box = box ;
// 						$(currentItem).attr("index", box.index()) ;
// 					}
// 				}
// 				directions[direction].call(this) ;
// 			},
// 			this.drag = function() { // 拖拽
// 				var oldPosition = new Position() ;
// 				var oldPointer = new Pointer() ;
// 				var isDrag = false ;
// 				var currentItem = null ;
// 				$(this).mousedown(function(e) {
// 					e.preventDefault() ;
// 					oldPosition.left = $(this).position().left ;
// 					oldPosition.top =  $(this).position().top ;
// 					oldPointer.x = e.clientX ;
// 					oldPointer.y = e.clientY ;
// 					isDrag = true ;
					
// 					currentItem = this ;
					
// 				}) ;
// 				$(document).mousemove(function(e) {
// 					var currentPointer = new Pointer(e.clientX, e.clientY) ;
// 					if(!isDrag) return false ;
// 					$(currentItem).css({
// 						"opacity" : "0.8",
// 						"z-index" : 999
// 					}) ;
// 					var left = currentPointer.x - oldPointer.x + oldPosition.left ;
// 					var top = currentPointer.y - oldPointer.y + oldPosition.top ;
// 					$(currentItem).css({
// 						left : left,
// 						top : top
// 					}) ;
// 					currentItem.pointer = currentPointer ;
// 					// 开始交换位置
					

// 					currentItem.collisionCheck() ;
					
					
// 				}) ;
// 				$(document).mouseup(function() {
// 					if(!isDrag) return false ;
// 					isDrag = false ;
// 					currentItem.move(function() {
// 						$(this).css({
// 							"opacity" : "1",
// 							"z-index" : 0
// 						}) ;
// 					}) ;
// 				}) ;
// 			}
// 			this.init() ;
// 		}) ;
// 	}) ;