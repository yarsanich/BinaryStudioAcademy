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
                $http.get('workers.json').success(function(data) {
                    deferred.resolve(data);
                }).error(function(msg, code) {
                    deferred.reject(msg);
                    $log.error(msg, code);
                });
                return deferred.promise;
            }
        }
    }
})();