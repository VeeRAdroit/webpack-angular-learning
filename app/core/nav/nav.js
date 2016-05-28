class NavCtrl {
  constructor() {
    this.app = require('index.json');
  }
}
module.exports = () => {
  require('./nav.scss'); // load styles for the component
  return {
    controller: NavCtrl,
    controllerAs: 'nav',
    template: require('./nav.html')
  };
};
