(function() {
    'use strict';
    angular
        .module('workersInfo')
        .directive('workersTable', workersTable);

    workersTable.$inject = [
        'getJson',
    ];

    function workersTable(getJson) {
        return {
            restrict: 'E',
            templateUrl: 'frontend/html/workersTable.html',
            controller: 'mainController',
            controllerAs: 'main',
            transclude: true,
            link: function(scope) {
                getJson.getWorkers()
                    .then(function(workersData) {
                        scope.workers = workersData;
                        console.log(workersData);
                    });
            }
        }
    }
})();