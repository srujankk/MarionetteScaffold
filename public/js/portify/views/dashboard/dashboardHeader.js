define([
    'underscore',
    'marionette',
    'text!portify/views/dashboard/template/dashboardHeader.html'
], function (_, Marionette, template) {
    return Marionette.ItemView.extend({
        template: _.template(template),
        initialize: function (options) {
            this.listenTo(this.model, "change", this.render)
        }
    });
});