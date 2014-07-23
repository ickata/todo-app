'use strict';

/**
 * @ngdoc overview
 * @name todoAppApp
 * @description
 * # todoAppApp
 *
 * Main module of the application.
 */
angular
   .module('todoAppApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'LocalStorageModule',
      'ui'
   ])
   .config([
      'localStorageServiceProvider',
      function ( localStorageServiceProvider ) {
         localStorageServiceProvider.setPrefix('todo_');
      }
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
         .otherwise({
            redirectTo: '/'
         });
   });
