require('./profile.less');

const profileModule = angular.module('angular-app-truextend.layout.profile', []);

profileModule.config(require('./profile.config'));

module.exports = profileModule;
