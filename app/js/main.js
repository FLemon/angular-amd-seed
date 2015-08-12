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

        // 由于angular不是AMD模式的
        // 所以手动把它转换为AMD支持的形式
        "angular": {
            exports: "angular"
        }
    },

    // 引入启动应用的模块`bootstrap`
    deps: ["./bootstrap"]
})

}())
