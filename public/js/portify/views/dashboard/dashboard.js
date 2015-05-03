define([
    'underscore',
    'marionette',
    'text!portify/views/dashboard/template/dashboard.html',
    'portify/views/dashboard/dashboardHeader',
    'portify/views/dashboard/dashboardList',
    'portify/data/dashboard/dashboard.collection'
], function (_, Marionette, template, DashboardHeader, DashboardList, DashboardCollection) {
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
            var c = new DashboardCollection(),
                M = Backbone.Model.extend({
                    defaults: {
                        currentValue: 1000,
                        investedAmount: 700
                    }
                }),

                m = new M();

            c.fetch({
                success: function (col, response, options) {
                    var cv = _.reduce(col.pluck('currentprice'), function (m, n) {
                        return m + parseInt(n)
                    }, 0);
                    var tv = _.reduce(col.pluck('purchasePrice'), function (m, n) {
                        return m + parseInt(n)
                    }, 0)

                    m.set({
                        'currentValue': cv
                    });

                    m.set({
                        'investedAmount': tv
                    });

                },
                error: function (col, response, options) {}
            });

            this.dashHeader.show(new DashboardHeader({
                model: m
            }));
            this.dashList.show(new DashboardList({
                collection: c
            }));
        }
    });
});
