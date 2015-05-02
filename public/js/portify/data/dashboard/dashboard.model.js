define([
    'backbone'
], function (Backbone) {
    return Backbone.Model.extend({
        defaults: {
            symbol: "AAPL",
            count: 35,
            purchasePrice: 90
        }
    })
})
