define([
    'underscore',
    'marionette',
    'text!portify/views/login/template/login.html'
], function (_, Marionette, template) {
    return Marionette.ItemView.extend({
        template: _.template(template)
    })
});
