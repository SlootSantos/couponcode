'use strict';

/**
 * @ngdoc overview
 * @name babycodeApp
 * @description
 * # babycodeApp
 *
 * Main module of the application.
 */
angular
  .module('babycodeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/f1', {
        templateUrl: 'views/f1.html',
        controller: 'Quiz1Ctrl'
      })
      .when('/f2', {
        templateUrl: 'views/f2.html',
        controller: 'Quiz2Ctrl'
      })
      .when('/f3', {
        templateUrl: 'views/f3.html',
        controller: 'Quiz3Ctrl'
      })
      .when('/f4', {
        templateUrl: 'views/f4.html',
        controller: 'Quiz4Ctrl'
      })
      .when('/f5', {
        templateUrl: 'views/f5.html',
        controller: 'Quiz4Ctrl'
      })
      .when('/final', {
        templateUrl: 'views/final.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
