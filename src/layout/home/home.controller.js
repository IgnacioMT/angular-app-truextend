HomeController.$inject = ['$log'];

function HomeController($log) {
  const ctrl = this;
  ctrl.name = 'Layout - HomeController';
  $log.info('Init: ' + ctrl.name);
}

module.exports = HomeController;
