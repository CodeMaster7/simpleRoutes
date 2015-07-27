app.controller('bullyCtrl', function($scope, bullyService){
	$scope.bullies = bullyService.bullies;

	$scope.addBully = function(name, status){
		bullyService.addBully({name: name, status: status})
	}
})