/**
 * Since main.js is in /js/common/ folder and r.config.js is in root
 * the path for r.config.js is starting with a / so that require loads it from root
 * and we have to add .js at the end
 */
require(['/r.config.js'], function () {
    console.log('Loading the config file');
    require(['common/vendor'], function () {
        //Use this to load other resource files or config files parallely with vendor files
        console.log('Vendor files loaded');

        require(['common/app'], function () {
            console.log('Application loaded');
        })
    })
})
