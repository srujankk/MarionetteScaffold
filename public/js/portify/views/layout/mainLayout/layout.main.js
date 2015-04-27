define([
    'underscore',
    'marionette',
    'text!portify/views/layout/mainLayout/template/mainLayout.html',
    'portify/views/common/header/header'
], function (_, Marionette, template, header) {
    return Marionette.LayoutView.extend({
        template: _.template(template),
        regions: {
            header: "#header",
            content: "#content"
        },
        initialize: function () {
            console.log('Layout Initialize ...');
        },
        onRender: function () {
            console.log('Layout Rendered ...');
            console.log('loading header');
            this.header.show(new header());
        }
    })
});
