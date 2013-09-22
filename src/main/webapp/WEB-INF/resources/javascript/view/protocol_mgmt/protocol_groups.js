var protocol_groups = window.config.views.modules.protocol_groups;

protocol_groups.module = Backbone.View.extend({
    id : "md_protocol_groups",
    template : get_template_content(protocol_groups.name),
    initialize: function(){
    },
    render : function() {
        this.$el.html(this.template);
        return this;
    }
});
