window.App.controller('QuestionCtrl', function($scope, User) {

	var setVote = function(voteType) {
		var voteValue = voteType === 'up' ? 1 : -1;
		$scope.question.votes.push({ value: voteValue, voter: User.name });
	};

	$scope.upVote = function() { setVote("up"); };
	$scope.downVote = function() { setVote("down"); };

	$scope.voteTally = function() { 
		return _($scope.question.votes).reduce( function(tally, vote) {
			return tally + vote.value;
		}, 0 );
	};

});