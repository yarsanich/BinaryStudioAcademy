(function() {
	'use strict';

	var module = angular.module('chatApp');

	module.
		controller('indexController', indexController);

	indexController.$inject = [
		'$location'
	];
	function indexController($location){
		var vm = this;
		vm.toShowHeader = function(){
   			return $location.path() === '/main';
		}
	}
})();