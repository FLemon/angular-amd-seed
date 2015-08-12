define([
    "angular",
    "./core/core",
    "./ui/ui",
    "./prj/prj"
], function( angular ) {

var app = angular.module("app", [
    "core",
    "ui",
    "project"
])

// 配置我们的`./app`模块
app.config(function( $routeProvider ) {
    $routeProvider.otherwise({
        redirectTo: '/projects'
    })
})

// 导出`./app`模块
return app

})
