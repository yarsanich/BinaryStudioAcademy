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
            link: linkFunc
        }

        function linkFunc(scope) {
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
                var data = {
                    firstName: scope.workers[id].firstName,
                    secondName: scope.workers[id].secondName,
                    email: scope.workers[id].email,
                }
                getJson.editWorker(scope.workers[id]._id, data);
            }
            scope.removeWorker = function(id, id_del) {
                scope.workers.splice(id, 1);
                getJson.removeWorker(id);
            }
        }
    }
})();