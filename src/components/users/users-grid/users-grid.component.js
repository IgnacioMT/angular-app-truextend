const component = {
  template: require('./users-grid.html'),
  controller: UsersGridController,
  bindings: { }
};

UsersGridController.$inject = [
  '$log',
  'UsersService'
];

function UsersGridController($log, UsersService) {
  const ctrl = this;
  ctrl.name = 'UsersGrid';
  $log.info('Init: Component - ' + ctrl.name);

  ctrl.users = [];

  UsersService.getAll().then(onSuccess, onError);

  function onSuccess(data) {
    ctrl.users = data;
  }

  function onError() {
    $log.log('Oops something went wrong');
  }

  ctrl.loadMore = function() {
    UsersService.getAll(ctrl.users[ctrl.users.length - 1].id).then(onLoadMoreSuccess, onError);
  };

  function onLoadMoreSuccess(data) {
    ctrl.users = ctrl.users.concat(data);
  }

}

module.exports = component;
