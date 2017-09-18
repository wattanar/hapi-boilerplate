const Example = require('./src/controllers/example-controller')

module.exports = [
	{ method: 'GET', path: '/', handler: Example.Home },
	{ method: 'GET', path: '/page', handler: Example.Page }
]