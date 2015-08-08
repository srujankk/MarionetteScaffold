define([
    'underscore',
    'marionette',
    'text!portify/views/layout/mainLayout/template/mainLayout.html',
    'portify/views/common/header/header',
    'portify/views/dashboard/dashboard',
    'portify/views/login/login'
], function (_, Marionette, template, Header, Dashboard, Login) {
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
            this.header.show(new Header());

            // TODO: implement the below display of dashboard with route
            this.content.show(new Dashboard());
            //this.content.show(new Login());
        }
    })
});
