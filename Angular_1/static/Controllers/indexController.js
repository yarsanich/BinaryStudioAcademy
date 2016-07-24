(function() {
	'use strict';

	var module = angular.module('chatApp');

	module.controller('indexController', indexController);

	indexController.$inject = [
		'$scope',
		'$location'
	];
	function indexController($scope,$location){
		var vm = this;
		vm.location = $location.path();
		vm.path = $location.path();
		console.log(vm.path);
		$scope.isActive = function(viewLocation) {
    		return viewLocation === vm.path;
		};
	}
})();