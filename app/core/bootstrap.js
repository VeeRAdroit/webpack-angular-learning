/* jshint browser:true */
'use strict';
// load Angular
require('angular');
// load the main app filename
var appModule = require('../index');
// replaces the ng-app="appName"
angular.element(document).ready(function() {
  angular.bootstrap(document, [appModule.name], {
    //strictDi: true
  });
});
