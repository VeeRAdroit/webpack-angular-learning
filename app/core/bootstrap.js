/* jshint browser:true */
'use strict';
// load Libs
require('./vendor')(); // run an empty function
// load the main app filename
var appModule = require('../index');
if (MODE.production) { // jshint ignore:line
  require('./config/production')(appModule);
}
// replaces the ng-app="appName"
angular.element(document).ready(function() {
  console.log('appModule', appModule);
  angular.bootstrap(document, [appModule.name], {
    debugInfoEnabled: true
    //strictDi: true
  });
});
