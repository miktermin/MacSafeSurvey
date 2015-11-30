(function () {
  'use strict';

  Controllers.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.layout = {
      header: 'HEADER',
      navigation: 'NAVIGATION',
      sidebar: 'SIDEBAR',
      main: 'MAIN',
      footer: 'FOOTER'
    };
  }]);
})();