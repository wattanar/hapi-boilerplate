const UserController = require('./user-controller');

module.exports = [
	{ method: 'GET', path: '/user', handler: UserController.User }
];