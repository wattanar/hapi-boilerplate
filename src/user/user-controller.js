module.exports.Home = (request, reply) => {
  return  reply.view('index', {
    title: 'Hapi Boilerplate',
    message: 'Hello World!'
  });
};