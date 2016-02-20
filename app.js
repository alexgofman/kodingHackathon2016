var app = angular.module('hackathonApp', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope) {
    $scope.test = 'Hello world!';
  }]);
