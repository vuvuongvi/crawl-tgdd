const Nightmare = require('nightmare');
const GUI = !!process.env.GUI;

module.exports = function() {
	this.Before(function(scenario, callback) {
		this.nightmare = Nightmare({
			openDevTools: GUI,
			show: GUI,
			height: 1200, 
			width: 1200
		});
		callback();
	});

	this.After(function(scenario, callback) {
		this.nightmare
			.end()
			.then(() => {
				callback();
			});
	});
};
