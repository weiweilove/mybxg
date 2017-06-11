define(['jquery','util','template'],function($,util,template){
	util.setMenu('/teacher/teacher_list');
    var tcId = util.qs('tc_id',location.search);

      function submitForm(url){
             //添加讲师处理
         $("#teacherAddBtn").click(function(){
            alert(1);
             $.ajax({
               url : url,
              type : 'post',
              data : $('#teacherAddForm').serialize(),
              dataType: 'json',
              success : function(data){
                console.log(data);
              }
            });
         });
      } 
    
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
                //提交编辑过的表单
              submitForm('/api/teacher/update');
     		}

     	});

     }else{
        //添加讲师操作
         $("#navFlag").text("讲师添加");
         var html = template('teacherAddTpl',{operateFlag : '添加',tc_gender : 1});
         $("#teacherAddInfo").html(html);
         //添加讲师
        submitForm('/api/teacher/add');
     }




});