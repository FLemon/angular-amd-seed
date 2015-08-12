define([
    "require",
    "angular"
], function( require, angular ) {

// 以下并非标准AMD模块
// 仅仅用`require()`预加载进来
return require([
    "angular.route",
    "angular.resource",
    "angular.cookies"
], function() {

    // 导出我们的`./core/core`模块
    return angular.module("core", [
        "ngRoute",
        "ngResource",
        "ngCookies"
    ])
})

})
