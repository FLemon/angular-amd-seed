;(function() {

require.config({
    paths: {
        "angular": '/bower_components/angular/angular',
        "angular.route": "/bower_components/angular-route/angular-route",
        "angular.resource": "/bower_components/angular-resource/angular-resource",
        "angular.cookies": "/bower_components/angular-cookies/angular-cookies",
        "ui.bootstrap": "/bower_components/angular-ui-bootstrap-bower/ui-bootstrap"
    },

    shim: {
        "angular": {
            exports: "angular"
        }
    },

    deps: ["./bootstrap"]
})

}())
