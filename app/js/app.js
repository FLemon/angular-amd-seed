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

app.config(function( $routeProvider ) {
    $routeProvider.otherwise({
        redirectTo: '/projects'
    })
})

return app

})
