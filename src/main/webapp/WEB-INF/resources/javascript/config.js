/*
 *  配置文件
 *
 *  Created by jeffy.yang at 2013/09/18
 *
 */
window.config = {}

// 系统参数
window.config.system = {
    debug : true,
    path : {
        base : location.pathname + "resources/"
    },

    view : {
        last : "",
        current : "",
        default : "index"
    }
}

// render
window.config.renders = {
    base_path : "render",
    modules : {
        underscore          : {path : "/backbone/underscore.js"},
        backbone            : {path : "/backbone/backbone-min.js"},
        hogan               : {path : "/backbone/hogan.min.js"},
        json2               : {path : "/backbone/json2.js"},
        local_storage       : {path : "/backbone/backbone.localStorage.js"},
        prettify            : {path : "/google/prettify.js"},
        bootstrap           : {path : "/bootstrap/js/bootstrap.min.js"},
        bootstrap_select    : {path : "/bootstrap/js/bootstrap-select.js"},
        bootstrap_switch    : {path : "/bootstrap/js/bootstrap-switch.js"},
        bootstrap_typeahead : {path : "/bootstrap/js/bootstrap-typeahead.js"},
        placeholder         : {path : "/jquery/jquery.stacktable.js"},
        placeholder         : {path : "/jquery/jquery.tagsinput.js"},
        placeholder         : {path : "/jquery/jquery.jquery-ui-1.10.3.custom.min.js"},
        placeholder         : {path : "/jquery/jquery.ui.touch-punch.min.js"},
        placeholder         : {path : "/jquery/jquery.placeholder.js"},
        flatui_radio        : {path : "/flat-ui/js/flatui-radio.js"},
        flatui_checkbox     : {path : "/flat-ui/js/flatui-checkbox.js"}
    }
}

// 模块
window.config.models = {
    base_path : "javascript/model",
    modules : {
        protocol : { path: "/protocol.js"}
    }
}

// collection
window.config.collections = {
    base_path : "javascript/collection",
    modules : {
        protocols : { path: "/protocols.js"}
    }

}

// 视图
window.config.views = {
    base_path : "javascript/view",
    base_template_path : "template",
    modules : {
        home : {
            path        : "/home/index.js",
            template    : "/home/index.html"
        },
        navigation : {
            path        : "/navigation.js",
            template    : "/navigation.html"
        },
        equipment_monitor : {
            path        : "/monitor/equipment_monitor.js",
            template    : "/monitor/equipment_monitor.html"
        },
        equipment_logging : {
            path        : "/logging/equipment_logging.js",
            template    : "/logging/equipment_logging.html"
        },
        equipment_management : {
            path        : "/equipment_mgmt/equipment_management.js",
            template    : "/equipment_mgmt/equipment_management.html"
        },
        protocol_management : {
            path        : "/protocol_mgmt/protocol_management.js",
            template    : "/protocol_mgmt/protocol_management.html"
        },
        protocol_list : {
            path        : "/protocol_mgmt/protocol_list.js",
            template    : "/protocol_mgmt/protocol_list.html"
        },
        protocol_groups : {
            path        : "/protocol_mgmt/protocol_groups.js",
            template    : "/protocol_mgmt/protocol_groups.html"
        },
        protocol_item : {
            path        : "/protocol_mgmt/protocol_list/protocol_item.js",
            template    : "/protocol_mgmt/protocol_list/protocol_item.html"
        }
    }
}


window.config.commons = {
    base_path : "javascript/common",
    modules : {
        common : {
            path : "/common.js"
        }
    }
}

window.config.routers = {

}


window.config.initialize = [
    window.config.renders,
    window.config.commons,
    window.config.models,
    window.config.collections,
    window.config.views
]

