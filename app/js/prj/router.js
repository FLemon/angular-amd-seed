define(function() {

var routes = {
    "/projects": {
        templateUrl: "js/prj/tpl/index.html",
        controller: "index as ctrl",
        bindToController: true
    },

    "/projects/:id": {
        templateUrl: "js/prj/tpl/show.html",
        controller: "show as ctrl",
        bindToController: true
    }
}

return [
    "$routeProvider",
    function( $routeProvider ) {
        angular.forEach( routes, function( route, path ) {
            $routeProvider.when( path, route )
        })
    }
]

})
