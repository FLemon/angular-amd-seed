define(function() {

return [
    function() {
        return {
            $get: function() {
                var foo = "i am qux.foo"

                return {
                    foo: foo,
                    getFoo: function() {
                        return this.foo
                    }
                }
            }
        }
    }
]

})
