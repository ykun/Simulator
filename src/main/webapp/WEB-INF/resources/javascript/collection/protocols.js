var protocols = window.config.collections.modules.protocols;
protocols.module = Backbone.Collection.extend({
    model: window.config.models.modules.protocol.module,
    url: "protocol/list"
});