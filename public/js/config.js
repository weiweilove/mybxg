
requirejs.config({
    baseUrl : '/public/assets',//设置模块加载的基准路径
    paths : {// 给模块路径起一个别名
        jquery : 'jquery/jquery.min',
        bootstrap : 'bootstrap/js/bootstrap.min',
        template : 'artTemplate/template-web',
        cookie : 'jquery-cookie/jquery.cookie',
        nprogress : 'nprogress/nprogress',
        common : '../js/common',
        index : '../js/index',
        util : '../js/util',
        login : '../js/login',
        teacherList : '../js/teacher_list'

    },
    shim : {// 兼容非标准模块
        bootstrap : {
            deps : ['jquery']
        }
    }
});

