window.App.controller('QuestionCtrl', function($scope, user, questionSync) {

	var setVote = function(voteType) {
		$scope.question.vote(user.name, voteType);
		questionSync.questionUpdated($scope.question);
	};

	$scope.upVote = function() { setVote("up"); };
	$scope.downVote = function() { setVote("down"); };

	$scope.userVotedUp = function() { return $scope.question.didUserVoteUp(user.name);}
	$scope.userVotedDown = function() { return $scope.question.didUserVoteDown(user.name);}

});