const thirdParty = require('./third-party/third-party.module').name;
const components = require('./components/components.module').name;
const layout = require('./layout/layout.module').name;
const common = require('./common/common.module').name;

const constants = require('./app.constants');
const config = require('./app.config');
const run = require('./app.run');

const AngularAppTruextend = angular.module('angular-app-truextend', [
  thirdParty,
  components,
  layout,
  common
]);

AngularAppTruextend.constant('APP_CONSTANTS', constants);
AngularAppTruextend.config(config);
AngularAppTruextend.run(run);
