const LandingController = require('./landing-controller');

module.exports = [
	{ method: 'GET', path: '/', handler: LandingController.Home }
];