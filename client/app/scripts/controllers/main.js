'use strict';

/**
 * @ngdoc function
 * @name babycodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the babycodeApp
 */
angular.module('babycodeApp')
  .controller('MainCtrl', function ($scope) {

    $scope.go = function () {
      window.location = '/#/f1';
    };
    $scope.no = function () {
      window.alert('sag ich ja.. pussy!');
    };
  });
