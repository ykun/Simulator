var navigation = window.config.views.modules.navigation;

navigation.module = Backbone.View.extend({
    el : $("aside"),
    template : get_template_content(navigation.name),

    initialize: function(){

    },

    render : function(){
        this.$el.html(this.template);
    },

    events : {
        "click .slide_button" : "click_slide_bar",
        "click .nav_side > li > a" : "click_switch_view"
    },
    click_slide_bar : function(event) {
        $(event.currentTarget).toggleClass("glyphicon-chevron-right");
        if($(event.currentTarget).hasClass("glyphicon-chevron-right")) {
            $("aside").animate({"margin-left" : '-=107px'});
        } else {
            $("aside").animate({"margin-left" : '+=107px'});
        }
    },
    click_switch_view : function(event) {
        var module = $(event.currentTarget).attr("module");
        this.switch_module(module);
    },
    switch_module : function(module) {
        if(this.current) {
            $("a[module=" + this.current + "]").parent().removeClass("active");
        }
        $("a[module=" + module + "]").parent().addClass("active");
        this.current = module;

        this.current_module = new window.config.views.modules[module].module;
        $("#main").html(this.current_module.render().el);
    }
});
