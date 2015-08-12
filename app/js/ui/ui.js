define([
    "require",
    "angular",
    "./cong/tooltip"
], function( require, angular, tooltip ) {

var ui

// `./ui`模块需要依赖`ui.bootstrap`
return require(["ui.bootstrap"], function() {
    ui = angular.module("ui", [
        "ui.bootstrap"
    ])

    // 配置`./ui`模块
    ui.config( tooltip )

    // 返回`./ui`模块, 然后导出
    return ui
})

})
