var logging = window.config.views.modules.equipment_logging;

logging.module = Backbone.View.extend({
    id : "md_equipment_logging",
    template : get_template_content(logging.name),
    initialize: function(){

    },
    render : function() {
        this.$el.html(this.template);
        return this;
    }
});
