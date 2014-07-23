'use strict';

angular.module('todoAppApp')
   .controller('MainCtrl', function ($scope) {
      $scope.todos = [
         'Get up',
         'Go to the gym',
         'Reach office'
      ];
      $scope.addTodo = function () {
         $scope.todos.push( $scope.todo );
         $scope.todo = '';
      };
   });
