define(['jquery','cookie'],function($){
	//实现登录功能
	$("#btn").click(function(){

            $.ajax({
               type : 'post',
               url : '/api/login',
               data : $('#login').serialize(),
               dataType : 'json',
              success:function(data){
                 if(data.code == 200){
                 	//把用户的登录名和图片存在cookie里面
                     $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});

                    location.href = '/index/index';
                   

                 }                
              } 
            });
            
            return false;
    });

});