define([
  "ui.bootstrap",
  "./cong/tooltip"
], function(bootstrap, tooltip ) {

var ui

// 定义module `ui`需要依赖`ui.bootstrap`
ui = angular.module("ui", [
  "ui.bootstrap",
  tooltip
])

ui.config( tooltip )

return ui

})
