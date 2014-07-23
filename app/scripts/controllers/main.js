'use strict';

angular.module('todoAppApp')
   .controller('MainCtrl', function ($scope, localStorageService) {
      $scope.todos = localStorageService.get('todos') || [
         'Get up',
         'Go to the gym',
         'Reach office'
      ];
      $scope.$watch('todos', function () {
         localStorageService.add('todos', $scope.todos);
      }, true);
      $scope.addTodo = function () {
         $scope.todos.push( $scope.todo );
         $scope.todo = '';
      };
      $scope.removeTodo = function ( index ) {
         $scope.todos.splice( index, 1 );
      };
   });
