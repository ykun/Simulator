var home = window.config.views.modules.home;

home.module = Backbone.View.extend({
    id : "md_home",
    template : get_template_content(home.name),
    initialize: function(){

    },
    render : function() {
        this.$el.html(this.template);
        return this;
    }
});