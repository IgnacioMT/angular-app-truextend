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

  UsersService.getAllRepos(ctrl.id).then(onSuccess, onError);

  function onSuccess(data) {
    $log.log(data);
  }

  function onError() {
    $log.log('Oops something went wrong');
  }

}

module.exports = component;
