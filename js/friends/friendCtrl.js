app.controller('friendCtrl', function($scope, friendService){
	$scope.friends = friendService.friends;

	$scope.addFriend = function(name, status){
		friendService.addFriend({name: name, status: status})
	}
})