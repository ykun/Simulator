var protocol_list = window.config.views.modules.protocol_list;

protocol_list.module = Backbone.View.extend({
    id : "md_protocol_list",
    template : get_template_content(protocol_list.name),
    initialize: function(){
        this.protocols = new window.config.collections.modules.protocols.module;
        this.protocols.fetch();
        console.log(this.protocols.toJSON());
    },
    render : function() {
        this.$el.html(this.template);
        return this;
    }
});
