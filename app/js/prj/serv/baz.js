define(function() {

return [
    function() {
        return {
            name: "I am baz!",
            greeting: function () {
                console.log( "hello, I am " + this.name )
            }
        }
    }
]

})
