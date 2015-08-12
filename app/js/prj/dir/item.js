define(function() {

return [
    "$templateCache",
    "$compile",
    function( $templateCache, $compile ) {
        return {
            replace: true,
            link: function( scope, el, attrs, ctrl ) {
                var tpl = $templateCache.get( attrs.template ),
                    rslEl = $compile( tpl )( scope )

                el.replaceWith( rslEl )
            }
        }
    }
]

})
