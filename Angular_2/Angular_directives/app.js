(function() {
    'use strict';

    angular
        .module('workersInfo', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/index.html',
                    controller: 'MainController',
                    controllerAs: 'main'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
})()