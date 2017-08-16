ProfileController.$inject = ['$log', '$stateParams'];

function ProfileController($log, $stateParams) {
  const ctrl = this;
  ctrl.name = 'Layout - ProfileController';
  $log.info('Init: ' + ctrl.name);

  ctrl.userId = $stateParams.id;

}

module.exports = ProfileController;
