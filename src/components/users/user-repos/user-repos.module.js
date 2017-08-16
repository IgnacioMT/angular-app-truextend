require('./user-repos.less');

const UserReposModule = angular.module('angular-app-truextend.components.user-repos', []);

UserReposModule.component('userRepos', require('./user-repos.component'));

module.exports = UserReposModule;
