var Controllers = angular.module('MacSecSurvControllers', []),
    Directives = angular.module('MacSecSurvDirectives', []),
    Service = angular.module('MacSecSurvServices', []),
    Filters = angular.module('MacSecSurvFilters', []),
    Constants = angular.module('MacSecSurvConstants', []);

(function () {

  angular.module('MacSecSurv', [
    'ngRoute',
    Controllers.name
  ]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when('/', {
        controller: 'MainCtrl',
        templateUrl: '../views/main.html'
      });
  }]);
})();
