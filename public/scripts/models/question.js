window.App.factory('Question', function() {
	return function(data) {
		this.votes = [];
		angular.extend(this, data);
		angular.extend(this, {
			constrain: function(value, min, max) {
				if(value < min) return min;
				if(value > max) return max;
				return value;
			},

			getExistingVote: function(userName) {
				return _(this.votes).find(function(vote) {
					return vote.voter == userName;
				});
			},

			vote: function(userName, voteType) {
				var voteValue = voteType === 'up' ? 1 : -1;
				var existingVote = this.getExistingVote(userName);

				if(existingVote) {
					existingVote.value = this.constrain(existingVote.value + voteValue, -1, 1);
				} else {
					this.votes.push({ value: voteValue, voter: userName });
				}
			},

			voteTally: function() { 
				return _(this.votes).reduce( function(tally, vote) {
					return tally + vote.value;
				}, 0 );
			},

			didUserVote: function(userName, voteValue) {
				var vote = this.getExistingVote(userName);
				return !!(vote && vote.value == voteValue);
			},

			didUserVoteUp:   function(userName) { return this.didUserVote(userName, 1);  },
			didUserVoteDown: function(userName) { return this.didUserVote(userName, -1); }

		});
	}
});