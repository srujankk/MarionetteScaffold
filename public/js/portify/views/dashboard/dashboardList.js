define([
    'marionette',
    'portify/views/dashboard/dashboardItem'
], function (Marionette, DashboardItem) {
    return Marionette.CollectionView.extend({
        initialize: function () {
            console.log('listView initialized');
        },
        childView: DashboardItem,
        onRender: function () {
            console.log("Collection Rendered");
        }
    });
});
