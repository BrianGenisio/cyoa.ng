window.App.factory('Question', function() {
	return function(data) {
		this.votes = [];
		angular.extend(this, data);
		angular.extend(this, {
			vote: function(userName, voteType) {
				var voteValue = voteType === 'up' ? 1 : -1;
				this.votes.push({ value: voteValue, voter: userName });
			},

			voteTally: function() { 
				return _(this.votes).reduce( function(tally, vote) {
					return tally + vote.value;
				}, 0 );
			}
		});
	}
});