configuration.$inject = [
  '$urlRouterProvider',
  '$logProvider',
  '$locationProvider',
  'APP_CONSTANTS',
  'RestangularProvider'
];

function configuration($urlRouterProvider, $logProvider, $locationProvider, APP_CONSTANTS, RestangularProvider) {

  // ui-router
  $urlRouterProvider.otherwise(APP_CONSTANTS.DEFAULT_INITIAL_ROUTE);
  $locationProvider.hashPrefix('');

  // Restangular
  RestangularProvider.setBaseUrl(APP_CONSTANTS.REST_API_BASE_URL);

  // Logger
  $logProvider.debugEnabled(process.env.NODE_ENV === 'development');

}

module.exports = configuration;
