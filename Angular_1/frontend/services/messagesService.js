(function(){
	'use strict';
	var module = angular.module('chatApp');
	
	module.factory('messagesService',messagesService);

	function messagesService($http,$q){
		var service = {
			messages:[],
			getMessages:getMessages
		};
		return service;

		function getMessages(){
			var def = $q.defer();
			$http.get("/messages")
				.success(function(data){
					service.messages = data;
					def.resolve(data);
				})
				.error(function(){
					def.reject("Failed to get messages")
				});
			return def.promise;
		}
	}	
})();