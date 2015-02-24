'use strict';

/**
 * @ngdoc function
 * @name bodhiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bodhiApp
 */
angular.module('bodhiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
