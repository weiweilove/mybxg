define(['jquery','cookie'],function($){
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//退出功能
        $("#logout").click(function(){
            $.ajax({
                type : 'post',
                url : '/api/logout',
                dataType : 'json',
                success : function(data){
                  //退出登录之后，清空cookie
                $.removeCookie('loginInfo',{path:'/'});
                console.log(loginInfo);
                   location.href = '/login';
                   
                }
                
            
            });
        });

       //获取请求路径
       var pathname = location.pathname;
    if(pathname != '/login' && !$.cookie('PHPSESSID')){
     	location.href = '/login';
     }

     //获取登录的用户信息
     var loginInfo = $.cookie('loginInfo') && JSON.parse($.cookie('loginInfo'));
     //如果存在用户的登录信息，此时应该渲染页面
     if(loginInfo){
     	$('.profile > div').find('img').attr('src',loginInfo.tc_avatar);
     	$('.profile>h4').text(loginInfo.tc_name);
     }



});
	

	