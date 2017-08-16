const component = {
  template: require('./user-repos.html'),
  controller: UserReposController,
  bindings: {
    id: '@'
  }
};

UserReposController.$inject = [
  '$log',
  'UsersService'
];

function UserReposController($log, UsersService) {
  const ctrl = this;
  ctrl.name = 'UserRepos';
  $log.info('Init: Component - ' + ctrl.name);

  ctrl.repos = [];

  UsersService.getAllRepos(ctrl.id).then(onSuccess, onError);

  function onSuccess(data) {
    ctrl.repos = data;
  }

  function onError() {
    $log.log('Oops something went wrong');
  }

}

module.exports = component;
