/*
 *  路由器
 *
 *  Created by jeffy.yang at 2013/09/18
 *
 */

var router = Backbone.Router.extend({

    routes : {},

    initialize : function() {
        var views = window.config.views.modules;
        for(var index in views) {
            var view = views[index];
            if(view.router) {
                this.route(":name", view.name, function(name) {
                    var temp = window.config.views.modules;
                    for(var index in temp) {
                        var v = temp[index];
                        if(v.router === name) {
                            window.config.system.view.last = window.config.system.view.current;
                            window.config.system.view.current = v.name;
                            new v.module;
                            break;
                        }
                    }
                });
            }
        }
    }
});
new router;
Backbone.history.start();

