module.exports.Home = (request, reply) => {
	return  reply.view('index', {
		title: 'User Page',
		message: 'Hello World!'
	});
};