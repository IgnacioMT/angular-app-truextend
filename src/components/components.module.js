const componentsModule = angular.module('angular-app-truextend.components', [
  require('./users/users.module').name
]);

module.exports = componentsModule;
