(function() {
    // body
    'use strict';

    angular
        .module('workersInfo')
        .factory('getJson', getJson);

    getJson.$inject = [
        '$http',
        '$q',
        '$log'
    ]

    function getJson($http, $q, $log) {
        return {
            getWorkers: function() {
                var deferred = $q.defer();
                $http.get('/workers.json').success(function(data) {
                    deferred.resolve(data);
                }).error(function(msg, code) {
                    deferred.reject(msg);
                    $log.error(msg, code);
                });
                return deferred.promise;
            },
            removeWorker: function(workerId) {
                return $http.delete('/workers/' + workerId).then(function() {
                    console.log("worker removed");
                });
            },
            editWorker: function(id, data) {
                console.log(id);
                console.log(data);
                $http.put('/workers/' + id, data).success(function() {
                    console.log("worker saved!");
                });
            }
        }
    }
})();