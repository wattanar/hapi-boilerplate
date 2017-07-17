module.exports.Home = (request, reply) => {
	return  reply({result: 'Hello World!'})
}

module.exports.Page = (request, reply) => {
	return  reply.view('index', {
		title: 'Example Page',
		message: 'Hello World!'
	})
}