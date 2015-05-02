define([
    'marionette',
    'portify/data/dashboard/dashboard.collection',
    'portify/views/dashboard/dashboardItem'
], function (Marionette, DashboardCollection, DashboardItem) {
    return Marionette.CollectionView.extend({
        initialize: function () {
            console.log('listView initialized');
        },
        childView: DashboardItem,
        onRender: function () {
            this.collection = new DashboardCollection();
            this.collection.fetch();
            console.log("Collection Rendered");
        }
    });
});
