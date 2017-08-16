const constants = {

  DEVELOPMENT: {
    REST_API_BASE_URL: 'https://api.github.com/',
    DEFAULT_INITIAL_ROUTE: '/home'
  },

  PRODUCTION: {
    REST_API_BASE_URL: '',
    DEFAULT_INITIAL_ROUTE: '/home'
  }

};

module.exports = process.env.NODE_ENV === 'development' ? constants.DEVELOPMENT : constants.PRODUCTION;
