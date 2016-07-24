(function() {
	'use strict';

    angular
        .module('chatApp')
        .controller('mainController', mainController);

	mainController.$inject = [
		'$scope',
		'messagesService',
		'$http',
	];

	function mainController($scope,messagesService,$http) {
		var vm = this;
		vm.messages = [];
		vm.flag = false;
        vm.getMessages = getMessages;
        vm.setUsername = setUsername;
        vm.SendData = SendData;
        var username = '';
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

		function setUsername(){
			username = $scope.username;
			if ($scope.usernameForm.$valid)
				vm.flag = true;
		}
		function SendData() {
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
        vm.getMessages();
	}
})();