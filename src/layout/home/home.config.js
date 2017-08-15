configuration.$inject = ['$stateProvider'];

function configuration($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./home.html'),
      controller: require('./home.controller'),
      controllerAs: 'homeController'
    });
}

module.exports = configuration;
