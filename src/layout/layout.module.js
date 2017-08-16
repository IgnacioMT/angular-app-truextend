const layoutModule = angular.module('angular-app-truextend.layout', [
  require('./home/home.module').name,
  require('./profile/profile.module').name
]);

module.exports = layoutModule;
