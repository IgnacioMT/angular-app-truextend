require('./users.less');

const UsersModule = angular.module('angular-app-truextend.components.users', []);

UsersModule.component('users', require('./users.component'));
UsersModule.factory('UsersService', require('./users.service'));

module.exports = UsersModule;
