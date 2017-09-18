module.exports.Home = (request, reply) => {
	return  reply("Hello World")
}

module.exports.Page = (request, reply) => {
	return  reply.view('index', {
		title: 'Example Page',
		message: 'Hello World!'
	})
}