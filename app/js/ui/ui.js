define([
    "require",
    "angular",
    "./cong/tooltip"
], function( require, angular, tooltip ) {

var ui

return require(["ui.bootstrap"], function() {
    ui = angular.module("ui", [
        "ui.bootstrap"
    ])

    ui.config( tooltip )

    return ui
})

})
