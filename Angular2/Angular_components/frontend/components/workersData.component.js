(function(){
	'use strict';

	var module = angular.module('workersInfo');
	
	mainController.$inject = [
		'getJson',
	]

	function mainController(getJson){
		var vm = this;
			vm.workers = [],
			vm.edit = [],
			vm.removeWorker = removeWorker,
			vm.editWorker = editWorker,
			vm.cancelSave = cancelSave,
			vm.saveWorker = saveWorker,
			vm.firstName = '',
			vm.secondName = '',
			vm.email = '';
		for (var i = 0; i < 100; i++)
                vm.edit[i] = false;
         getJson.getWorkers()
            .then(function(workersData) {
                  vm.workers = workersData;
                });
        function removeWorker(id) {
            vm.workers.splice(id, 1);
            getJson.removeWorker(id);
        }
        function editWorker(id){
        	vm.edit[id] = true;
        	vm.firstName = vm.workers[id].firstName;
        	vm.secondName = vm.workers[id].secondName;
        	vm.email = vm.workers[id].email;
        }
        function cancelSave(id){
        	vm.edit[id] = false;
        }
        function saveWorker(id,flag){
        	if (flag){
        		var data = {
           	        firstName: vm.firstName,
               	    secondName: vm.secondName,
               	    email: vm.email,
             	}
            	console.log(data);	
            	getJson.editWorker(vm.workers[id]._id, data);
            	vm.edit[id] = false;
        	} 
        }
	};



	module.component('workersData',{
			templateUrl:'./frontend/html/workersData.html',
			controller: mainController,
			controllerAs: 'main',
			$routeConfig:[{
				path: '/',
				component:'workersData',
				name:'WorkersData',
			},
			{
				path: '/**',
				redirectTo:['WorkersData'],
			}
			],
		});
})();
