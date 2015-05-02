define([
    'underscore',
    'marionette',
    'text!portify/views/dashboard/template/dashboard.html',
    'portify/views/dashboard/dashboardList'
], function (_, Marionette, template, DashboardList) {
    return Marionette.LayoutView.extend({
        template: _.template(template),
        regions: {
            dashHeader: '#dashHeader',
            dashList: '#dashList'
        },
        initialize: function (options) {
            console.log("Dashboard Initialized");
        },
        onRender: function () {
            this.dashList.show(new DashboardList());
        }
    });
});
