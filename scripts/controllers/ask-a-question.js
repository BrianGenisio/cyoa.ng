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