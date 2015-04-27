define([
    'marionette',
    'text!portify/views/layout/mainLayout/template/mainLayout.html'
], function (Marionette, template) {
    return Marionette.LayoutView.extend({
        template: template,
        initialize: function () {
            console.log('Layout Initialize ...');
        },
        onRender: function () {
            console.log('Layout Rendered ...');
        }
    })
});
