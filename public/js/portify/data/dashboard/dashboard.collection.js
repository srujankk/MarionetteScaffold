define([
    'backbone',
    'portify/data/dashboard/dashboard.model'
], function (Backbone, DashboardModel) {
    return Backbone.Collection.extend({
        model: DashboardModel,
        url: "http://localhost:3000/stocks"
    })
})
