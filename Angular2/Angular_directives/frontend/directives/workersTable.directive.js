(function() {
    'use strict';
    angular
        .module('workersInfo')
        .directive('workersTable', workersTable);

    workersTable.$inject = [
        'getJson',
        '$http',
    ];

    function workersTable(getJson) {
        return {
            restrict: 'E',
            templateUrl: 'frontend/html/workersTable.html',
            controller: 'mainController',
            controllerAs: 'main',
            transclude: true,
            link: linkFunc
        }

        function linkFunc(scope, $http) {
            scope.edit = [];
            for (var i = 0; i < 100; i++)
                scope.edit[i] = false;
            getJson.getWorkers()
                .then(function(workersData) {
                    scope.workers = workersData;
                });
            scope.cancelSave = function(id) {
                scope.edit[id] = false;
            }
            scope.editWorker = function(id) {
                scope.edit[id] = true;
            }
            scope.saveWorker = function(id) {
                scope.edit[id] = false;
                console.log(scope.fName);
                if (scope.fName.$valid && scope.sName && scope.email) {
                    var data = {
                        firstName: scope.fName,
                        sceondName: scope.sName,
                        email: scope.email
                    }
                    getJson.editWorker(id, data);
                }
            }
            scope.removeWorker = function(id, id_del) {
                scope.workers.splice(id, 1);
                getJson.removeWorker(id_del);
            }
        }
    }
})();