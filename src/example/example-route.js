const Example = require('./example-controller')

module.exports = [
	{ method: 'GET', path: '/example', handler: Example.Home },
	{ method: 'GET', path: '/example/page', handler: Example.Page }
]