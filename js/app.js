var app = angular.module('mainApp', ['ngRoute']); // <--- dont forget to inject ngRoute!!

app.config(function($routeProvider){
	$routeProvider
	.when('/friends', {
		templateUrl: 'js/friends/friendTmpl.html',
		controller: 'friendCtrl'
	})
	.when('/bullies', {
		templateUrl: 'js/bullies/bullyTmpl.html',
		controller: 'bullyCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
})