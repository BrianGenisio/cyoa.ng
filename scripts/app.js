window.App = angular.module('cyOverflow', []);

window.App.factory('User', function() {
	return {
		name: '',
		login: function(userName) {
			if(!userName) return;
			this.name = userName;
		}
	};
});

window.App.controller('LoginCtrl', function($scope, User) {
	$scope.user = User;
});

window.App.controller('AskAQuestionCtrl', function($scope, User) {
	$scope.user = User;
});