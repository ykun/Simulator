/*
 * 获取模板HTML
 * @param module 模块名称
 */
function get_template_content(module_name) {
    var content = localStorage.getItem(module_name);
    if(!content) {
        console.log("加载模板文件:" + module_name);
        var module = window.config.views.modules[module_name];
        var suffix = window.config.system.debug? "?" + new Date().getTime(): "";
        $.ajax({
            type: "get",
            async: false,
            url: window.config.system.path.base + window.config.views.base_template_path + module.template + suffix,
            success: function(data){
                content = data;
                localStorage.setItem(module_name, content);
            }
        });
    }
    return content;
}
