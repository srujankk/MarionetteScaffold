define([
    'marionette',
    'text!portify/views/dashboard/template/dashboardItem.html'
], function (Marionette, template) {
    return Marionette.ItemView.extend({
        tagName: "section",
        className: "col-md-4",
        template: _.template(template)
    });
});