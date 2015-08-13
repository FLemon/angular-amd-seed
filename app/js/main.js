;(function() {

require.config({

    // 设置`alias`
    paths: {
        "angular": '/bower_components/angular/angular',
        "angular.route": "/bower_components/angular-route/angular-route",
        "angular.resource": "/bower_components/angular-resource/angular-resource",
        "angular.cookies": "/bower_components/angular-cookies/angular-cookies",
        "ui.bootstrap": "/bower_components/angular-ui-bootstrap-bower/ui-bootstrap"
    },

    shim: {

        // 由于angular并非`define()`定义的模块
        // 所以手动导出为AMD支持的格式
        "angular": {
            exports: "angular"
        }
    },

    // 引入启动应用的模块`./bootstrap`
    deps: ["./bootstrap"]
})

}())
