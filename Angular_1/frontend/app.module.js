(function() {
	'use strict';

	angular
		.module('chatApp', ['ngRoute'])
		.config(function($routeProvider) {
			$routeProvider
				.when('/main', {
					templateUrl: './main.html',
					controller: 'mainController',
					controllerAs: 'main',
				})
				.otherwise({
					redirectTo: '/',
					controller: 'indexController',
					controllerAs: 'index',
				});
		});
})()