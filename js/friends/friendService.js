app.service('friendService', function(){
	this.friends = [
		{name: 'justin', status: 'cool'}
	]

	this.addFriend = function(friend){
		this.friends.unshift(friend)
	}
})	