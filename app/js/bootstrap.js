require([
    "angular",
    "./app"
], function( angular ) {

// 等待DOM READY之后启动应用
angular.element()
    .ready(function() {
        angular.bootstrap( document, [ "app" ] )
    })

})
