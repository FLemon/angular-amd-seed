define([
    "require",
    "angular"
], function( require, angular ) {

// 导出我们的`./core/core`模块
return require([
    "angular.route",
    "angular.resource",
    "angular.cookies"
], function() {
    return angular.module("core", [
        "ngRoute",
        "ngResource",
        "ngCookies"
    ])
})

})
