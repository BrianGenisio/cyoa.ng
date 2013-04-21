window.App.factory('user', function() {
	return {
		name: '',
		login: function(userName) {
			if(!userName) return;
			this.name = userName;
		}
	};
});