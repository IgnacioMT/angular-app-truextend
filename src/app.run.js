main.$inject = ['$log'];

require('./assets/css/main.less');

function main($log) {
  $log.info('angular-app-truextend is up and running!');
}

module.exports = main;
