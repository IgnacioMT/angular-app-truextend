UsersService.$inject = ['Restangular'];

function UsersService(Restangular) {
  const service = Restangular.service('users');

  function plainResponse(data) {
    return data.plain();
  }

  service.getOne = function(id) {
    return service.one(id).get().then(plainResponse);
  };

  service.getAll = function(since) {
    return service.getList(since ? { since: since } : '').then(plainResponse);
  };

  service.getAllRepos = function(id) {
    return service.one(id).customGET('repos', {}).then(plainResponse);
  };

  return service;
}

module.exports = UsersService;
