define([
    "require",
    "angular"
], function( require, angular ) {

var core

// 因为`angular.route`等并非标准AMD模块,
// 所以仅仅使用`require()`预加载进来,
// 然后导出返回值作为导出的`./core`模块
return require([
    "angular.route",
    "angular.resource",
    "angular.cookies"
], function() {

    // 创建module`core`
    core = angular.module("core", [
        "ngRoute",
        "ngResource",
        "ngCookies"
    ])

    // 返回给`require()`方法作为结果
    return core
})

})
