var equipment_management = window.config.views.modules.equipment_management;

equipment_management.module = Backbone.View.extend({
    id : "md_equipment_management",
    template : get_template_content(equipment_management.name),
    initialize: function(){

    },
    render : function() {
        this.$el.html(this.template);
        return this;
    }
});
