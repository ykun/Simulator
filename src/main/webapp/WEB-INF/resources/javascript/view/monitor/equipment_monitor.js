var monitor = window.config.views.modules.equipment_monitor;

monitor.module = Backbone.View.extend({
    id : "equipment_monitor",
    template : get_template_content(monitor.name),
    initialize: function(){
    },
    render : function() {
        this.$el.html(this.template);
        return this;
    }
});

