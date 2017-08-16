const UsersModule = angular.module('angular-app-truextend.components.users', [
  require('./user-repos/user-repos.module').name,
  require('./users-grid/users-grid.module').name
]);

UsersModule.factory('UsersService', require('./users.service'));

module.exports = UsersModule;
