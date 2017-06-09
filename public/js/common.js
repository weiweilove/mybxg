define(['jquery','template','cookie'],function($,template){
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
     var Info = $.cookie('loginInfo') && JSON.parse($.cookie('loginInfo'));
     //如果存在用户的登录信息，此时应该渲染页面
     if(Info){
         var loginTpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
         var html = template.render(loginTpl,Info);
         $("#profile").html(html);

     	/*$('.profile > div').find('img').attr('src',loginInfo.tc_avatar);
     	$('.profile>h4').text(loginInfo.tc_name);*/
     }

});
	

	