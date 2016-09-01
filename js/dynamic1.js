// 动态列表页中的js

// // 1.搜索框中自动补全
$(document).ready(function(){
	// 通过ajax请求数据
	$("#search_input").focus(function(){
		$.ajax({
			type:"POST",
			url:"后台处理文件",
			// 此处可能有错
			dataType:"json",
			success:function(data){
				$("search_input").bigAutocomplete({
					width:640,
					data:"后台传回来的json文件",
					callback:function(data){

					}
				})
			}
		})
	});
// 以下作为测试：测试通过：
$("#search_input").bigAutocomplete({width:504,data:[{title:"quanta招新"},{title:"中国移动网上营业厅"},{title:"中国银行"},{title:"中国移动"},{title:"中国好声音第三期"},{title:"中国好声音 第一期"},{title:"中国电信网上营业厅"},{title:"中国工商银行"},{title:"中国好声音第二期"},{title:"中国地图"}],
	callback:function(data){
				// alert(data.title);
				
			}});
			
});
//end 1

// 2.需要将搜索的信息展示出来
$(document).ready(function(){
	$("#search_btn").click(function(){
		// 获取到搜索框中的value然后通过ajax查询
		var $inputVal=$("#search_input").val();
		$.ajax({
			type:"POST",
			url："后台处理查询的文件",
			dataType:"json",
			success:function(data){
				$(".all_msg").empty();
			    var $html='';
	            $.each(_jsonDta,function(itemIndex,item){
		            $html+='<div class="item"><div class="time">'+item['time']+'</div><a href=\"'+item['msgUrl']+'\"class="msg_til"  target="_blank">'+item['msgTil']+'</a><a href=\"'+item['msgUrl']+'\" class="see"  target="_blank">查看</a><a href="javascript" class="delete">删除</a></div>'
	            });
	            $("#all_msg").append($html);
			}
		})

	});
});

// end2

//3.鼠标经过每一行的时候，整行颜色改变

$(document).ready(function(){
	$(".item").mouseover(function(){
		$(this).addClass("even")
		.siblings().removeClass("even").end()
	});
	$(".item").mouseout(function(){
		$(this).removeClass("even");
	})
});

// end 3

//4. 点击删除的时候
// $(document).ready(function(){
	// $(".delete").click(function(){
	// 	var $r=confirm("确认要删除吗？");
	// 	 if($r==true){
	// 	     // 需要将要删除的数据传到数据库中
	// 	    $.post("后台删除的处理文件",{
	// 	         time: $(".time").val(),
	// 	         msgTil: $(".msg_til").val(),

	// 	    });
	// 	    $(this).parent().remove();
	// 	  }else{
 //          return false;
	// 	  }
 //    })
// });

// // 5.从数据库中获取全部的信息.显示出来
$(document).ready(function(){
// 	$.ajax({
// 		type:"POST",
// 		url:""; //后台的文件
// 		dataType:"json",   //json文件类型
// 		success:function(data){
// 			$(".all_msg").empty();
// 			var $html='';
// 	        $.each(_jsonDta,function(itemIndex,item){
// 		        $html+='<div class="item"><div class="time">'+item['time']+'</div><a href=\"'+item['msgUrl']+'\"class="msg_til"  target="_blank">'+item['msgTil']+'</a><a href=\"'+item['msgUrl']+'\" class="see"  target="_blank">查看</a><a href="javascript" class="delete">删除</a></div>'
// 	        });
// 	        $("#all_msg").append($html);
// 		}
// 	})


// 测试读取数据
var _jsonData=[{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-2",
	"msgUrl":"see_msg2.html",
	"msgTil":"quanta招新2",
},{
	"time":"2016-8-3",
	"msgUrl":"see_msg3.html",
	"msgTil":"quanta招新3",
},{
	"time":"2016-8-4",
	"msgUrl":"see_msg4.html",
	"msgTil":"quanta招新4",
},
{
	"time":"2016-8-5",
	"msgUrl":"see_msg5.html",
	"msgTil":"quanta招新5",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},{
	"time":"2016-8-1",
	"msgUrl":"see_msg1.html",
	"msgTil":"quanta招新1",
},];

 // 1.从数据库中获取全部的信息.显示出来
	var $html='';
	$.each(_jsonData,function(itemIndex,item){
		$html+='<div class="item"><div class="time">'+item['time']+'</div><a href=\"'+item['msgUrl']+'\"class="msg_til"  target="_blank">'+item['msgTil']+'</a><a href=\"'+item['msgUrl']+'\" class="see"  target="_blank">查看</a><a href="javascript" class="delete">删除</a></div>'
	});
	$("#all_msg").append($html);

//2.鼠标经过每一行的时候，整行颜色改变
	$(".item").mouseover(function(){
		$(this).addClass("even")
		.siblings().removeClass("even").end()
	});
	$(".item").mouseout(function(){
		$(this).removeClass("even");
	})
//3. 点击删除的时候
		$(".delete").click(function(){
		var $r=confirm("确认要删除吗？");
		 if($r==true){
		     // 需要将要删除的数据传到数据库中
		    // $.post("后台删除的处理文件",{
		    //      time: $(".time").val(),
		    //      msgTil: $(".msg_til").val(),

		    // });
		    $(this).parent().remove();
		  }else{
          return false;
		  }
    });

// 4 搜索框中自动补全
   	$("#search_input").focus(function(){
		// $.ajax({
		// 	type:"POST",
		// 	url:"后台处理文件",
		// 	// 此处可能有错
		// 	dataType:"json",
		// 	success:function(data){
		// 		$("search_input").bigAutocomplete({
		// 			width:640,
		// 			data:"后台传回来的json文件",
		// 			callback:function(data){

		// 			}
		// 		})
		// 	}
		// })
	});

	// 此处有个问题：如何将ajax过来的json数组写进到下面data中去呢？

// $("#search_input").bigAutocomplete({width:504,data:[{title:"quanta招新"},{title:"中国移动网上营业厅"},{title:"中国银行"},{title:"中国移动"},{title:"中国好声音第三期"},{title:"中国好声音 第一期"},{title:"中国电信网上营业厅"},{title:"中国工商银行"},{title:"中国好声音第二期"},{title:"中国地图"}],
// 	callback:function(data){
// 	}});

// 需要将搜索的信息展示出来
	$("#search_btn").click(function(){
		// 获取到搜索框中的value然后通过ajax查询
		var $inputVal=$("#search_input").val();
		// $.ajax({
		// 	type:"POST",
		// 	url："后台处理查询的文件",
		// 	dataType:"json",
		// 	success:function(data){
		// 		$(".all_msg").empty();
		// 	    var $html='';
	 //            $.each(_jsonDta,function(itemIndex,item){
		//             $html+='<div class="item"><div class="time">'+item['time']+'</div><a href=\"'+item['msgUrl']+'\"class="msg_til"  target="_blank">'+item['msgTil']+'</a><a href=\"'+item['msgUrl']+'\" class="see"  target="_blank">查看</a><a href="javascript" class="delete">删除</a></div>'
	 //            });
	 //            $("#all_msg").append($html);
		// 	}
		// })

	});


//6.需要做一个分页:此处有一个问题，不知道怎么改
function doPages(_jsonData){
	$(function(){
		pageTotal.getDate(1,1);
	});

	// 封装分页数据
	var pageTotal={
		current:1,   //当前页
		pageCount:10,  //每页的数据量
		count:0,   //总数据量
		total:0,   //总共的页码
		first:1,   //首页
		last:0, //尾页
		pre:0,  //上一页
		next:0,   //下一页

		getPages:function(){    //计算分页的信息
			pageTotal.total=Math.ceil(pageTotal.count/pageTotal.pageCount);
			pageTotal.last=pageTotal.totle;
			pageTotal.pre=pageTotal.current-1<=0?1:(pageTotal.current-1);
			pageTotal.next=pageTotal.current+1>=pageTotal.totle?pageTotal.totle:(pageTotal.current+1);
		},

				// 获取数据
		getDate:function(pageno,type){
			// 清除当前页面的数据和元素
			$("#all_msg").empty;
			if(pageno==null){
				pageno=1;
			}
           //设置当前页                
           pageTotal.current = pageno;
           pageTotal.count = _jsonData.length;
            //设置每页显示的数据条数
            pageTotal.pageCount = 10;
            //分页信息
            var pagedata = 0;

            pagedata = pageno != pageTotal.last ? (pageTotal.current)*(pageTotal.pageCount) : _jsonData.length;

            for(var i = (pageno-1)*pageTotal.pageCount ; i < pagedata; i++){
            	var $html='';
		        $html+='<div class="item"><div class="time">'+_jsonData[i]['time']+'</div><a href=\"'+_jsonData[i]['msgUrl']+'\"class="msg_til"  target="_blank">'+_jsonData[i]['msgTil']+'</a><a href=\"'+_jsonData[i]['msgUrl']+'\" class="see"  target="_blank">查看</a><a href="javascript" class="delete">删除</a></div>';
                $("#all_msg").append($html);
            }

            //获取分页样式

            pageTotal.page(type); //type表示分页栏样式

        },

        		page : function(type){
                                        //清除分页栏元素
                                        $("#pages").empty();
                                        //填充分页样式欠要加载分页数据
                                        pageTotal.getPages();

                                        if(type == 1){
                                                
                                                var x = 6;
                                                //设置上下页
                                                $("#pages").append("记录&nbsp;&nbsp"+pageTotal.count+"&nbsp;&nbsp;条&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp");
                                                $("#pages").append("页数&nbsp;&nbsp"+pageTotal.current+"/"+pageTotal.total+
                                                	"&nbsp;&nbsp;页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='javascript:pageTotal.getDate(1,"+type+");'>首页</a>&nbsp;&nbsp;&nbsp;&nbsp;");
                                                 
                                                var index = pageTotal.current <=Math.ceil(x/2)?1:(pageTotal.current)>=pageTotal.total-Math.ceil(x/2)?pageTotal.total-x:(pageTotal.current-  Math.ceil(x/2));
                                                var end = pageTotal.current <= Math.ceil(x/2)?(x+1):(pageTotal.current+Math.ceil(x/2))>=pageTotal.total?pageTotal.total:(pageTotal.current+Math.ceil(x/2));
                                                for(var i = index ; i <= end ; i++){
                                                	// console.log("执行");
                                                        if(i == pageTotal.current){
                                                                $("#pages").append("<a href='javascript:pageTotal.getDate("+pageTotal.current+","+type+");' class='on'>"+i+"</a>");
                                                        }else{
                                                                $("#pages").append("<a href='javascript:pageTotal.getDate("+i+","+type+");'>"+i+"</a>");
                                                        }
                                                }
                                                if(end != pageTotal.total){
                                                        $("#pages").append("&nbsp;&nbsp;&nbsp;&nbsp;<span>...</span>");
                                                }
                                                $("#pages").append("&nbsp;&nbsp;&nbsp;&nbsp;<a href='javascript:pageTotal.getDate("+pageTotal.last+","+type+");'>尾页</a>");
                                        }
                                }

    }
}
$(function(){
		doPages(_jsonData);

});


});

