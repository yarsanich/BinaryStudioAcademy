(function() {
	'use strict';

	angular
		.module('chatApp')
		.controller('indexController', indexController);

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