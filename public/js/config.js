
requirejs.config({
    baseUrl : '/public/assets',//设置模块加载的基准路径
    paths : {// 给模块路径起一个别名
        jquery : 'jquery/jquery.min',
        bootstrap : 'bootstrap/js/bootstrap.min',
        template : 'artTemplate/template-web',
        cookie : 'jquery-cookie/jquery.cookie',
        nprogress : 'nprogress/nprogress',
        validate : 'validate/jquery-validate',
        jqueryform:'jquery-form/jquery.form',
        datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker',
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        uploadify : 'uploadify/jquery.uploadify',
        region: 'jquery-region/jquery.region',
        ckeditor: 'ckeditor/ckeditor',
        common : '../js/common',
        util : '../js/util',
        index : '../js/index',
        login : '../js/login',
        teacherList : '../js/teacher_list',
        teacherAdd : '../js/teacher_add',
        settings : '../js/settings'

    },
    shim : {// 兼容非标准模块
        bootstrap : {
            deps : ['jquery']
        },
        validate : {
            deps : ['jquery']
        },
        language : {
            deps : ['jquery','datepicker']
        },
        uploadify : {
             deps : ['jquery']
        },
        region : {
             deps : ['jquery']
        },
        ckeditor : {
            exports : 'CKEDITOR'
        }

    }
});

