/*
 *  初始化文件
 *
 *  Created by jeffy.yang at 2013/09/18
 *
 */

$(function(){
    // 追加script
    var script = function(path) {
        var temp = "<script type='text/javascript' src='" + path + "'></script>";
        $("script:last").after(temp);
    }

    // 定义导航宽度
    var width = $(window).width();
    var aside_width = 150;
    $("aside").width(aside_width);
    $("#main").width(width - aside_width - 35);

    var base_path = window.config.system.path.base;
    // 加载初始化配置文件
    var initialize = window.config.initialize;
    for(var i in initialize) {
        var modules = initialize[i].modules;
        var module_path = initialize[i].base_path;
        for(var index in modules) {
            modules[index].name = index;
            var script_path = base_path + module_path + modules[index].path;
            script(script_path);
            console.log("注册模块[" + index + "]");
        }
    }

    if(window.config.system.debug) {
        localStorage.clear();
    }

    var navigate_view = new window.config.views.modules.navigation.module;
    navigate_view.render();
    navigate_view.switch_module("home");
});