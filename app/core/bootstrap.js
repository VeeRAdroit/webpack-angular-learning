/* jshint browser:true */
'use strict';
// load Libs
require('./vendor')(); // run an empty function
// load the main app filename
var appModule = require('../index');
// replaces the ng-app="appName"
angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.name], {
    //strictDi: true
  });
});
