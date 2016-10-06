'use strict';

/**
 * @ngdoc function
 * @name r4chackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the r4chackApp
 */
angular.module('r4chackApp')
  .controller('MainCtrl', function ($scope) {
    $scope.appName = 'Reach for change hack';
    $scope.startGame = function() {
      console.log('START');
      $scope.appName = 'AKos';
      this.route = '/game';
    };
  });
