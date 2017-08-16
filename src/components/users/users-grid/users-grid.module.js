require('./users-grid.less');

const UsersGridModule = angular.module('angular-app-truextend.components.users-grid', []);

UsersGridModule.component('usersGrid', require('./users-grid.component'));

module.exports = UsersGridModule;
