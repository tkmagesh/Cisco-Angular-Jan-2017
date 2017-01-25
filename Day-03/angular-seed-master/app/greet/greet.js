'use strict';

angular.module('myApp.greet', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/greet', {
    templateUrl: 'greet/greet.html',
    controller: 'greetCtrl'
  });
}])

.controller('greetCtrl', function($scope) {
	$scope.name = '';
	$scope.greetMessage = '';
	$scope.greet = function(){
		$scope.greetMessage = 'Hi ' + $scope.name + ', Have a nice day!';
	};
});