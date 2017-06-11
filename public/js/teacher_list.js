define(['jquery','template','util','bootstrap'],function($,template,util){
    //导航菜单选中：
    util.setMenu(location.pathname);

  $.ajax({
		type: 'get',
		url : '/api/teacher',
		dataType : 'json',
		success : function(data){

	   var html = template('teacherInfoTpl',{list: data.result});
			$("#teacherInfo").html(html);
			//查看讲师功能
			previewTeacher();

			//注销和启用讲师管理功能
			enableOrDisableTeacher();

		}
	});

     
    //查看讲师的函数
    function previewTeacher(){
    	$("#teacherInfo").find(".previewTeacher").click(function(){
    		var dataId = $(this).closest('td').attr('data-id');
            //向后台请求数据:
            $.ajax({
            	url : '/api/teacher/view',
            	type : 'get',
            	dataType : 'json',
            	data : {tc_id : dataId},
            	success : function(data){
            	data.result.tc_hometown = data.result.tc_hometown.replace(/[|]/g,' ');
            	var html = template('teacherInfoModalTpl',data.result);
                  $("#teacherInfoModel").html(html);
                  //显示弹框
                  $("#teacherModal").modal();
            	}

            });

    		return false;
    	});
    }
    //注销和启用讲师管理功能的函数
     function enableOrDisableTeacher(){
     	$("#teacherInfo").find('.edteacher').click(function(){
     		var that = this;
     		var tcId = $(this).closest('td').attr('data-id');
     		var tcStatus = $(this).closest('td').attr('data-status');
     		$.ajax({
                url : '/api/teacher/handle',
                type: 'post',
                data : {tc_id : tcId,tc_status : tcStatus},
                dataType : 'json',
                success : function(data){
                	if(data.code == 200){
                		$(that).closest('td').attr('data-status',data.result.tc_status);
                		if(data.result.tc_status == '1'){
                			$(that).text('注销');
                		}else{
                			$(that).text('启用');
                		}
                	}
                }

     		})
     	})
     }


});