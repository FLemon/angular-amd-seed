define([
    "angular",
    "angular.route",
    "angular.resource",
    "angular.cookies"
], function( angular ) {

/*
 * 我们并未定义`angular.route`等为AMD格式的模块
 * 所以这里`define()`实际只是作为加载器在使用,
 * 更符合规范的用法应该是:
 * @example
 * ```javascript
 * define([
 *   "require",
 *   "angular"
 * ], function( require, angular ) {
 *
 *   // 使用标准的`require()`方法来预加载`angular.route`等
 *   require(["angular.route", "angular.resource", "angular.cookies"], function() {
 *     // 然后在这里导出我们的`./core`模块
 *   })
 *
 * })
 * ```
 */

// 导出我们的`./core/core`模块
return angular.module("core", [
    "ngRoute",
    "ngResource",
    "ngCookies"
])

})
