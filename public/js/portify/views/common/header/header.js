define([
    'underscore',
    'marionette',
    'text!portify/views/common/header/template/header.html'
], function (_, Marionette, template) {
    return Marionette.ItemView.extend({
        template: _.template(template)
    });
})
