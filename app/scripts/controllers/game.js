'use strict';

/**
 * @ngdoc function
 * @name r4chackApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the r4chackApp
 */
angular.module('r4chackApp')
  .controller('GameCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.colors = [0,0,0];
    let allColors = [
      '#DAF7A6',
      '#FFC300',
      '#FF5733',
      '#C70039',
      '#900C3F',
      '#581845',
    ];
    let selected = [-1, -1, -1];
    $scope.question = Math.round(Math.random() * 2);
    for(let i=0; i<3; i++) {
      let rand = Math.round(Math.random() * (allColors.length - 1));
      while(selected.indexOf(rand) !== -1) {
        rand = Math.round(Math.random() * (allColors.length - 1));
      }
      selected[i] = rand;
      $scope.colors[i] = allColors[rand];
    }
    console.log($scope.colors);

    $scope.headline = 'Welcome to the game';
  });
