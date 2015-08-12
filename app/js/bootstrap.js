require([
    "angular",
    "./app"
], function( angular ) {

angular.element()
    .ready(function() {
        angular.bootstrap( document, [ "app" ] )
    })

})
