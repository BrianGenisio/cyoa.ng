window.App.controller('QuestionCtrl', function($scope, user) {

	var setVote = function(voteType) {
		$scope.question.vote(user.name, voteType);
	};

	$scope.upVote = function() { setVote("up"); };
	$scope.downVote = function() { setVote("down"); };

});