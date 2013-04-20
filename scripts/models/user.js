window.App.factory('User', function() {
	return {
		name: '',
		login: function(userName) {
			if(!userName) return;
			this.name = userName;
		}
	};
});