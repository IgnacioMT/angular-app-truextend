UsersService.$inject = ['Restangular'];

function UsersService(Restangular) {
  const service = Restangular.service('users');

  function plainResponse(data) {
    return data.plain();
  }

  service.getOne = function(id, params) {
    return service.one(id).get(params).then(plainResponse);
  };

  service.getAll = function(since) {
    return service.getList(since ? { since: since } : '').then(plainResponse);
  };

  return service;
}

module.exports = UsersService;
