define([
    'marionette',
    'portify/views/dashboard/dashboardItem'
], function (Marionette, DashboardItem) {
    return Marionette.CollectionView.extend({
        tagName: "section",
        className: "row",
        childView: DashboardItem
    });
});