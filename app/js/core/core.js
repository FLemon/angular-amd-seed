define([
    "require",
    "angular"
], function( require, angular ) {

var core

return require([
    "angular.route",
    "angular.resource",
    "angular.cookies"
], function() {
    core = angular.module("core", [
        "ngRoute",
        "ngResource",
        "ngCookies"
    ])

    return core
})

})
