requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: "libs/jquery-2.1.3",
        underscore: "libs/underscore",
        backbone: "libs/backbone",
        marionette: "libs/backbone.marionette",
        bootstrap: "libs/bootstrap",
        text: 'libs/require-text'
    },

    shim: {
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        bootstrap: {
            deps: ["jquery"]
        },
        underscore: {
            exports: "_"
        }
    },
    name: "libs",
    out: "libs.js",
    removeCombined: true
});
