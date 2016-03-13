'use strict';

/**
 * @ngdoc function
 * @name babycodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the babycodeApp
 */
angular.module('babycodeApp')
  .controller('Quiz1Ctrl', function ($scope) {
    var refresh = function() {
      $scope.name = '';
    };
    refresh();

    $scope.evaluate = function () {
      var name = angular.lowercase($scope.name);

      if (name === 'airbnb') {
          window.alert('Geht dooch :* ');
        refresh();
        window.location = '/#/f2';

      }else {
        window.alert('naja fast ne..');
      }
    };
  });


angular.module('babycodeApp')
  .controller('Quiz2Ctrl', function ($scope) {
    var refresh = function() {
      $scope.name = '';
    };
    refresh();

    $scope.evaluate = function () {
      var name = angular.lowercase($scope.name);

      if (name === 'tickets') {
          window.alert('ohaaaa');
        refresh();
        window.location = '/#/f3';

      }else {
        window.alert('Knapp daneben is auch vorbei baby...');
      }

    };
  });


  angular.module('babycodeApp')
    .controller('Quiz3Ctrl', function ($scope) {
      var refresh = function() {
        $scope.name = '';
      };
      refresh();

      $scope.evaluate = function () {
        var name = angular.lowercase($scope.name);

        if (name === 'paris') {
          window.alert('Du alter Fuchs!!');
          refresh();
          window.location = '/#/f4';
        }else {
          window.alert('WELCHE STADT IS DAS UHM??');
        }
      };
    });


    angular.module('babycodeApp')
      .controller('Quiz4Ctrl', function ($scope) {

        $scope.evaluate = function () {
          window.location = '/#/final';
        };
      });
