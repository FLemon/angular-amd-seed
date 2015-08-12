define(function() {

return [
    'foo',
    function ( foo ) {
       return function( input ) {
           return foo + input
       }
    }
]

})
