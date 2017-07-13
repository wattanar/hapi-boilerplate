const user = require('./src/user/user-route');
const landing = require('./src/landing/landing-route');

module.exports = [].concat(
	user, 
	landing
);