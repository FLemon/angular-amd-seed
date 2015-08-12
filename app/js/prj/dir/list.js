define(function() {

return [
    "$templateCache",
    "$compile",
    function( $templateCache, $compile ) {
        return {
            scope: {
                projects: "="
            },
            replace: true,
            transclude: true,
            link: function( scope, el, attrs, ctrl, transclude ) {
                var tpl = $templateCache.get( attrs.template ),
                    rslEl = $compile( tpl, transclude )( scope )

                el.replaceWith( rslEl )
            }
        }
    }
]

})
