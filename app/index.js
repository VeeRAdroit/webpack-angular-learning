module.exports = angular.module('app', [
  /* 3rd party */
  'lumx',
  /* modules */
  require('./core/layout').name
]);
// default params
function printMessage (status='working') {
  //let
  let message = 'ES6';
  //template string
  console.log(`${message} is ${status}`);
}
printMessage();
