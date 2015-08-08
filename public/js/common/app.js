define([
    'portify/views/layout/mainLayout/layout.main'
], function (MainLayout) {
    /**
     * App should be responsible to load all the req resources before
     * we begin loading the views that use the resources
     */
    console.log('Application ... ');

    // TODO: Currently we simply load the mainLayout.
    // Should check for user session
    // if user session expired, load login view
    // if user session available, load mainLayout

    var userSession = true;

    if (userSession) {
        var mainLayout = new MainLayout({
            el: '#app-container'
        });
    } else {
        console.log('load login view');
    }

    mainLayout.render();

});
