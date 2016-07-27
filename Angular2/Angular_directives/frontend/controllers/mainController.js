(function() {
    // body
    'use strict';
    angular
        .module('workersInfo')
        .controller('mainController', mainController);

    mainController.$inject = [
        '$http',
    ];

    function mainController($http) {
        var vm = this;
    }
})();