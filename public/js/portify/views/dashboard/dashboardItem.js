define([
    'marionette',
    'text!portify/views/dashboard/template/dashboardItem.html'
], function (Marionette, template) {
    return Marionette.ItemView.extend({
        template: _.template(template)
    })
})
