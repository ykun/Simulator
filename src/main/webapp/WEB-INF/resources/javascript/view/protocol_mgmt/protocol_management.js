var protocol_management = window.config.views.modules.protocol_management;

protocol_management.module = Backbone.View.extend({
    id : "md_protocol_management",
    template : get_template_content(protocol_management.name),
    initialize: function(){
    },
    render : function() {
        this.$el.html(this.template);
        return this;
    },
    events : {
        "click a[module]" : "click_switch_view"
    },
    click_switch_view : function(event) {
        var module = $(event.currentTarget).attr("module");
        console.log(module);
        var view = new window.config.views.modules[module].module;
        $("#protocol_container").html(view.render().el);
    }
});
