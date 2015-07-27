app.service('bullyService', function(){
	this.bullies = [
		{name: 'Dustin', status: 'rude'}
	]

	this.addBully = function(bully){
		console.log(bully)
		this.bullies.unshift(bully)
	}
})