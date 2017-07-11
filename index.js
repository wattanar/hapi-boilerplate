'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const routes = require('./routes');

server.connection({ port: 3000, host: 'localhost' });

server.register(require('vision'), (err) => {

	if (err) { throw err; }

	server.views({
		engines: { ejs: require('ejs') },
		relativeTo: __dirname,
		path: 'templates'
	});
});

server.route(routes);

server.start((err) => {
    if (err) { throw err; }
    console.log(`Server running at: ${server.info.uri}`);
});