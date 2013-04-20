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

window.App.factory('Questions', function() {
	return [];
});

window.App.controller('LoginCtrl', function($scope, User) {
	$scope.user = User;
});

window.App.controller('AskAQuestionCtrl', function($scope, User, Questions) {
	$scope.user = User;
	$scope.questions = Questions;

	$scope.add = function(questionText) {
		var newQuestion = {
			text: questionText,
			userName: User.name
		};

		Questions.push(newQuestion);
		$scope.newQuestionText = '';
	}
});

window.App.controller('QuestionListCtrl', function($scope, Questions) {
	$scope.questions = Questions;
});