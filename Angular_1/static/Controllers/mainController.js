(function() {
	'use strict';

	var module = angular.module('chatApp');

	module.controller('mainController', mainController);

	mainController.$inject = [
		'$scope',
		'messagesService',
		'$http',
	];

	function mainController($scope,messagesService,$http) {
		var vm = this;
		vm.messages = [];
		var username = '';
		vm.flag = false;

		vm.getMessages = function(){
			$http.get('/messages')
        	.success(function(data) {
        	    vm.messages = data;
        	    console.log(data);
        	})
        	.error(function(data) {
        	    console.log('Error: ' + data);
        	});
    	}
		$scope.setUsername= function(){
			username = $scope.username;
			if ($scope.usernameForm.$valid)
				vm.flag = true;
		}


		$scope.SendData = function () {
            var data = {
                username: username,
                content: $scope.content,
                date: new Date()
            };
            console.log(data);
            $http.post('/messages', data)
            .success(function (data) {
                $scope.content = '';
                console.log("Messages has been send")
            })
            .error(function (data) {
             	console.log(data)
            });
        };

        $scope.getData = function(){
        	vm.getMessages();
        };

        vm.getMessages();
	}

})();