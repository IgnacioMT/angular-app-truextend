require('./home.less');

const homeModule = angular.module('angular-app-truextend.layout.home', []);

homeModule.config(require('./home.config'));

module.exports = homeModule;
