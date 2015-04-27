define([
    'portify/views/layout/mainLayout/layout.main'
], function (MainLayout) {
    /**
     * App should be responsible to load all the req resources before
     * we begin loading the views that use the resources
     */
    console.log('Application ... ');
    var mainLayout = new MainLayout({
        el: '#main-container'
    });

    mainLayout.render();

});
