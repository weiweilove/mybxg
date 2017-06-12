define(['jquery','template','ckeditor','datepicker','language','uploadify','region','validate','jqueryform'],function($,template,CKEDITOR){
	//查询个人信息
	$.ajax({
		url : '/api/teacher/profile',
		type: 'get',
		dataType : 'json',
		success : function(data){
			var html = template("settingTpl",data.result);
			$('#settingInfo').html(html);

     //文件上传功能
	   $("#upfile").uploadify({
           itemTemplate: '<span></span>',
           buttonText : '',   //上传文本内容为空
           fileObjName : 'tc_avatar',
           swf : '/public/assets/uploadify/uploadify.swf',
           uploader : '/api/uploader/avatar',
           onUploadSuccess : function(file,data){
           	    data= JSON.parse(data);
               $(".preview>img").attr("src",data.result.path);
               
            }
	     });

	   //处理三级联动
        $("#hometown").region({
        	url : '/public/assets/jquery-region/region.json'
        });

          // 富文本处理
            CKEDITOR.replace('editor',{
            	//定制属性
                toolbarGroups : [{
                        name: 'clipboard',
                        groups: ['clipboard', 'undo']
                    }, {
                        name: 'editing',
                        groups: ['find', 'selection', 'spellchecker', 'editing']
                    }
                ]
            });


       //表单验证和表单提交
       $("#settingsForm").validate({
           sendForm : false,
           onKeyup : true,
           eachValidField : function(){
           	console.log(1);
           },
           eachInValidField :function(){
            console.log(2);
           },
           valid : function(){
              console.log(3);

              // 跟新富文本内容
              for(var instance in CKEDITOR.instances){
                   CKEDITOR.instances[instance].updateElement();
               }
           	//处理省市县内容
           	var p = $("#p option:selected").text();
           	var c = $("#c option:selected").text();
            var d = $("#d option:selected").text();
             var hometown = p + '|' + c + '|' + d;
           	 $(this).ajaxSubmit({
                        type : 'post',
                        data : {tc_hometown : hometown},
                        url : '/api/teacher/modify',
                        success : function(data){
                        	// console.log(data);
                            // 重新加载页面
                             location.reload();
                            // location.href = '/index/settings'
                        }
                    });
           },
           description : {
                tcBirthday : {
                   required: '出生日期不能为空',
                   valid: '出生日期输入正确'              
                },
                tcPhone : {
                    required: '手机号码不能为空',
                    pattern :'手机号码必须为11位数',
                     valid: '手机号码可以使用' 
                },
               tcJoinDate : {
                    required : '入职日期不能为空',
                    valid : '日期可以使用'
                }
             }


       });






		}
	});
	
})