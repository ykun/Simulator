var protocol_item = window.config.views.modules.protocol_item;

protocol_item.module = Backbone.View.extend({
    tagName : "tr",
    template : get_template_content(protocol_item.name),
    initialize: function(){

    },
    render : function() {
        this.$el.html(this.template);
        return this;
    }
});
