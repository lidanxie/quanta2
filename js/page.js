// 作为分页
$(document).ready(function(){
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
				// var $item=$("<div class='item'></div>");
				// $(".all_msg").append($item);
				// // 下面标点符号存在问题
				// $(".item").append.("<div class=\"time\">"+_jsonData[i]["time"]+"</div><a href=\""+_jsonData[i]["msgUrl"]+"\"class='msg_til' target='_blank'>"+_jsonData[i]["msgTil"]+"</a>"+"<a href=\""+_jsonData[i]["msgUrl"]+"\"class='see' target='_blank'>"+'查看'+"</a>"+"<a href=\""+'javascript'+"\"class='delete'>"+'删除'+"</a>");
                         // $(".item").html(txtHtml);
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
});
