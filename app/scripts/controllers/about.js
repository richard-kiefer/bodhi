'use strict';

/**
 * @ngdoc function
 * @name bodhiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bodhiApp
 */
angular.module('bodhiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
