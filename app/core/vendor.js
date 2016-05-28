module.exports = function() {
  /* Styles */
  require('../index.scss');
  require('../../node_modules/mdi/css/materialdesignicons.min.css');
  /* JS */
  global.$ = global.jQuery = require('jquery');
  // $ for Lumx, jQuery for velocity
  require('velocity-animate');
  require('angular');
  global.moment = require('moment');
  // LumX uses a global 'moment'
  require('node-lumx');
};
