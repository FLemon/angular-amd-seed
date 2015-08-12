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
    "./dir/prj",
    "./fltr/hello"
], function( angular, router, boot, index, show, foobar, foo, bar, baz, qux, list, item, prj, hello ) {


return angular.module( "project", [] )
    .config( router ) // 这里可能需要控制器已经生产出来之后才有效
    .run( boot )

    // ctrls
    .controller( "index", index )
    .controller( "show", show )

    // servs
    .constant( "foobar", foobar )
    .value( "foo", foo )
    .service( "bar", bar )
    .factory( "baz", baz )
    .provider( "qux", qux )

    // dirs
    .directive( "projectList", list )
    .directive( "projectItem", item )
    .directive( "projectPage", prj )

    // fltrs
    .filter( "hello", hello )

})
