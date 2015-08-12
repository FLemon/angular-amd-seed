define([
    "require",
    "angular",
    "./cong/tooltip"
], function( require, angular, tooltip ) {

var ui

// 定义`ui`模块需要依赖`ui.bootstrap`
return require(["ui.bootstrap"], function() {
    ui = angular.module("ui", [
        "ui.bootstrap"
    ])

    ui.config( tooltip )

    return ui
})

})
