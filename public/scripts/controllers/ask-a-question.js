window.App.controller('AskAQuestionCtrl', function($scope, user, questions, questionSync, Question) {
	$scope.user = user;
	$scope.questions = questions;

	$scope.add = function(questionText) {
		var newQuestion = new Question({
			text: questionText,
			userName: user.name
		});

		$scope.questions.push(newQuestion);
		$scope.newQuestionText = '';

		questionSync.questionAdded(newQuestion);
	}
});