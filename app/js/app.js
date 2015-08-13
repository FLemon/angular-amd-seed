define([
    "angular",
    "./core/core",
    "./ui/ui",
    "./prj/prj"
], function( angular /*core, ui, prj*/ ) { // 虽然我们这里得到了`core`,`ui`,`prj`模块的对象,
                                           // 但angular在定义module依赖的时候并不需要直接的对象
var app = angular.module("app", [

    // 这时候,module`core`,`ui`,`project`已经可以使用
    "core",
    "ui",
    "project"
])

// 配置`./app`模块
app.config(function( $routeProvider ) {
    $routeProvider.otherwise({
        redirectTo: '/projects'
    })
})

// 导出`./app`模块
return app

})
