window.App.factory('questionSync', function($rootScope, questions, Question) {
	var socket = io.connect();

	socket.emit( 'readQuestions', null, function(err,questionsJsonData) {
		var questionsData = JSON.parse(questionsJsonData);
		_(questionsData).each( function(questionData) {
			questions.push(new Question(questionData));
		});

		$rootScope.$apply();
	});

	return {
		questionAdded: function(question) {
			socket.emit('addQuestion', angular.toJson(question), function(updatedQuestionJson) {
				updatedQuestion = JSON.parse(updatedQuestionJson);
				question.id = updatedQuestion.id;
			});
		}
	};
});