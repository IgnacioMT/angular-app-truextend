configuration.$inject = ['$stateProvider'];

function configuration($stateProvider) {
  $stateProvider
    .state('profile', {
      url: '/profile/:id',
      template: require('./profile.html'),
      controller: require('./profile.controller'),
      controllerAs: 'profileController'
    });
}

module.exports = configuration;
