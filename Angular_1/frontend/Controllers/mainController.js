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
        vm.getMessages = getMessages;

		function getMessages(){
			messagesService.getMessages()
                .then(function(messages){
                    vm.messages = messages;
                    console.log("Messages returned to controller");
                },
                function(data){
                    console.log('Messages retrieval failed.');
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
                date: new Date(),
            };
            console.log(data);
            $http.post('/messages', data)
            .success(function (data) {
                $scope.content = '';
                console.log("Messages has been send");
                vm.getMessages();
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