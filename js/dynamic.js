// 动态列表页面的js
$(document).ready(function(){
	// 1.将数据库中的信息分页展示出来
	// $.ajax({
	// 	type:"POST",
	// 	url:"",//后台的文件
	// 	dataType:"json",   //json文件类型
	// 	success:function(data){
	// 		$(".all_msg").empty();
	// 		var $html='';
	//         $.each(_jsonDta,function(itemIndex,item){
	// 	        $html+='<div class="item"><div class="time">'+item['time']+'</div><a href=\"'+item['msgUrl']+'\"class="msg_til"  target="_blank">'+item['msgTil']+'</a><a href=\"'+item['msgUrl']+'\" class="see"  target="_blank">查看</a><a href="javascript" class="delete">删除</a></div>'
	//         });
	//         $("#all_msg").append($html);
	// 	},
	// 	error:function(data){
	// 		$(".all_msg").empty();
	// 		var $error=$('<div class="error">数据库加载出错啦！</div>')
	// 		$(".all_msg").append()
	// 	}
	// });  //end ajax

// 测试数据
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
                        //清除分页栏元素
                        $("#pages").empty();
                        //填充分页样式欠要加载分页数据
                        pageTotal.getPages();
                        if( type == 1 ){
                            var x = 3;
                             //设置上下页
                            $("#pages").append("记录&nbsp;&nbsp;&nbsp;&nbsp"+pageTotal.count+"&nbsp;&nbsp;条&nbsp;&nbsp;&nbsp");
                            $("#pages").append("页数&nbsp;&nbsp;&nbsp;&nbsp"+pageTotal.current+"/"+pageTotal.total+"&nbsp;&nbsp;页&nbsp;&nbsp;&nbsp;<a href='javascript:pageTotal.getDate(1,"+type+");'>首页</a>&nbsp;&nbsp;&nbsp;&nbsp;");
                            var index = pageTotal.current <=Math.ceil(x/2)?1:(pageTotal.current)>=pageTotal.total-Math.ceil(x/2)?pageTotal.total-x:(pageTotal.current-  Math.ceil(x/2));

                            var end = pageTotal.current <= Math.ceil(x/2)?(x+1):(pageTotal.current+Math.ceil(x/2))>=pageTotal.total?pageTotal.total:(pageTotal.current+Math.ceil(x/2));

                            for(var i = index ; i <= end ; i++){
                                    if(i == pageTotal.current){
                                            $("#pages").append("<a href='javascript:pageTotal.getDate("+pageTotal.current+","+type+");' class='on'>"+i+"</a>");
                                    }else{
                                            $("#pages").append("<a href='javascript:pageTotal.getDate("+i+","+type+");'>"+i+"</a>");
                                    }
                            } //end for

                            if(end != pageTotal.total){
                                    $("#pages").append("&nbsp;&nbsp;&nbsp;&nbsp;<span>...</span>");
                            } //end if
                            $("#pages").append("&nbsp;&nbsp;&nbsp;&nbsp;<a href='javascript:pageTotal.getDate("+pageTotal.last+","+type+"); '>尾页</a>");
                            
                        }  //end if
                },  //end page

	};   //end pageTotal  
    $(function(){
pageTotal.getDate(1,1);
});
 

});//end document