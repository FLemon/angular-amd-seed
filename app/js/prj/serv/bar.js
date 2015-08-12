define(function() {

return [
    function() {
        this.name = "bar"
        this.greeting = function() {
            console.log( "hello, I am " + this.name )
        }
    }
]

})
