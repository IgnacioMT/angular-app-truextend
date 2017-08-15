const angular = require('angular');

require('angular-ui-router');
require('angular-ui-router.statehelper');
require('restangular');
require('lodash');

const thirdPartyModules = angular.module('third-party-modules', [
  'ui.router',
  'ui.router.stateHelper',
  'restangular'
]);

module.exports = thirdPartyModules;
