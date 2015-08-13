define([
    "angular",
    "./router",
    "./boot",
    "./ctrl/index",
    "./ctrl/show",
    "./serv/foobar",
    "./serv/foo",
    "./serv/bar",
    "./serv/baz",
    "./serv/qux",
    "./dir/list",
    "./dir/item",
    "./dir/detail",
    "./fltr/hello"
], function( angular, router, boot, index, show, foobar, foo, bar, baz, qux, list, item, detail, hello ) {

var project = angular.module( "project", [] )

project
.config( router )
.run( boot )

// 控制器
.controller( "index", index )
.controller( "show", show )

// 服务
.constant( "foobar", foobar )
.value( "foo", foo )
.service( "bar", bar )
.factory( "baz", baz )
.provider( "qux", qux )

// 指令
.directive( "projectList", list )
.directive( "projectItem", item )
.directive( "projectPage", detail )

// 过滤器
.filter( "hello", hello )

// 导出`./prj/prj`模块
return project

})
