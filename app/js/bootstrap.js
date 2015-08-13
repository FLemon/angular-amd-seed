// 这里并非定义AMD模块
// 仅仅使用`require()`方法作为模块加载器
require([
    "angular",
    "./app"
], function( angular ) {

angular.element()
    .ready(function() {

        // 等待DOM READY之后,手动启动应用
        angular.bootstrap( document, [ "app" ] )
    })

})
