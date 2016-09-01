// 动态列表页面的js
$(document).ready(function(){
	// 1.将数据库中的信息分页展示出来
	$.ajax({
		type:"POST",
		url:"",//后台的文件
		dataType:"json",   //json文件类型
		success:function(data){
			$(".all_msg").empty();
			var $html='';
	        $.each(_jsonDta,function(itemIndex,item){
		        $html+='<div class="item"><div class="time">'+item['time']+'</div><a href=\"'+item['msgUrl']+'\"class="msg_til"  target="_blank">'+item['msgTil']+'</a><a href=\"'+item['msgUrl']+'\" class="see"  target="_blank">查看</a><a href="javascript" class="delete">删除</a></div>'
	        });
	        $("#all_msg").append($html);
		},
		error:function(data){
			$(".all_msg").empty();
			var $error=$('<div class="error">数据库加载出错啦！</div>')
			$(".all_msg").append()
		}
	});  //end ajax

	// 封装分页
	var pageTotal={
		        current:1, //当前页
                pageCount:10 , //每页显示的数据量
                count : 0 ,//总数据量
                total : 0 , //总共的页码
                first : 1, //首页
                last : 0 , //尾页
                pre : 0, //上一页
                next : 0 , //下一页
                getPages:function(){      //计算分页信息
        	            pageTotal.total = Math.ceil(pageTotal.count / pageTotal.pageCount);
                        pageTotal.last = pageTotal.total ;
                        pageTotal.pre = pageTotal.current - 1 <= 0?1:(pageTotal.current - 1);
                        pageTotal.next = pageTotal.current + 1 >= pageTotal.total?pageTotal.total:(pageTotal.current + 1);

                },  //end getPages
                getDate:function(pageno,type){   //获取数据
                       //清除content所有数据和元素
                        $("#all_msg").empty();
                        if(pageno == null){
                                pageno = 1;
                        }
                         //设置当前页
                        pageTotal.current = pageno;
                        // _jsonData为ajax获取得到的json数据
                        pageTotal.count = _jsonData.length;
                        //设置每页显示的数据条数
                        pageTotal.pageCount = 10;
                        var pagedata = 0;
                        pagedata = pageno != pageTotal.last ? (pageTotal.current)*(pageTotal.pageCount) : _jsonData.length;
                        for(var i = (pageno-1)*pageTotal.pageCount ; i < pagedata; i++){
                        	    var $html='';
		                        $html+='<div class="item"><div class="time">'+_jsonData[i]['time']+'</div><a href=\"'+_jsonData[i]['msgUrl']+'\"class="msg_til"  target="_blank">'+_jsonData[i]['msgTil']+'</a><a href=\"'+_jsonData[i]['msgUrl']+'\" class="see"  target="_blank">查看</a><a href="javascript" class="delete">删除</a></div>';
                                $("#all_msg").append($html);
                        }
                        //获取分页样式
                        pageTotal.page(type); //type表示分页栏样式
                },   //end getDate
                page :function(type){    //分页的样式设置

                }

	};   //end pageTotal   

});//end document