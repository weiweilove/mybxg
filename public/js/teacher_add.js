define(['jquery','util','template'],function($,util,template){
	util.setMenu('/teacher/teacher_list');
    //添加讲师处理
    $("#teacherAddBtn").click(function(){
    	$.ajax({
    		url : '/api/teacher/add',
    		type : 'post',
    		data : $('#teacherAddForm').serialize(),
    		dataType: 'json',
    		success : function(data){
                console.log(data);
    		}
    	});
    });
   
    var tcId = util.qs('tc_id',location.search);
     if(tcId){
     	 //编辑讲师列表部分
     	$.ajax({
     		url: '/api/teacher/edit',
     		type: 'get',
     		data : {tc_id : tcId},
     		dataType : 'json',
     		success : function(data){
                $("#navFlag").text("讲师编辑");
     			data.result.operateFlag = "编辑";
     			var html = template('teacherAddTpl',data.result);
     			$("#teacherAddInfo").html(html);
     		}

     	});

     }else{
        //添加讲师操作
         $("#navFlag").text("讲师添加");
         var html = template('teacherAddTpl',{operateFlag : '添加'});
         $("#teacherAddInfo").html(html);
     }




});