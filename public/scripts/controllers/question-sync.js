window.App.factory('questionSync', function($rootScope, questions, Question) {
	var socket = io.connect();

	socket.emit( 'readQuestions', null, function(err,questionsJsonData) {
		var questionsData = JSON.parse(questionsJsonData);
		_(questionsData).each( function(questionData) {
			questions.push(new Question(questionData));
		});

		$rootScope.$apply();
	});

	socket.on('newQuestion', function(questionJsonData) {
		var questionData = JSON.parse(questionJsonData);
		var newQuestion = new Question(questionData);
		questions.push(newQuestion);

		$rootScope.$apply();
	});

	socket.on('updateQuestion', function(questionJsonData) {
    	var questionData = JSON.parse(questionJsonData);
    	var updatedQuestion = _(questions).find( function(question) {
    		return question.id == questionData.id;
    	});
    
    	angular.extend(updatedQuestion, questionData);

    	$rootScope.$apply();
    });

	return {
		questionAdded: function(question) {
			socket.emit('addQuestion', angular.toJson(question), function(updatedQuestionJson) {
				updatedQuestion = JSON.parse(updatedQuestionJson);
				question.id = updatedQuestion.id;
			});
		},

		questionUpdated: function(question) {
			socket.emit('updateQuestion', angular.toJson(question));
		}
	};
});