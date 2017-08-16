const component = {
  template: require('./users.html'),
  controller: UsersController,
  bindings: { }
};

UsersController.$inject = [
  '$log',
  'UsersService'
];

function UsersController($log, UsersService) {
  const ctrl = this;
  ctrl.name = 'Users';
  $log.info('Init: Component - ' + ctrl.name);

  ctrl.users = [];

  UsersService.getAll().then(onSuccess, onError);

  function onSuccess(data) {
    ctrl.users = data;
  }

  function onError() {
    $log.log('Oops something went wrong');
  }

}

module.exports = component;
