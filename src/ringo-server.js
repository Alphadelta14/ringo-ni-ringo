
var config = {
  server_port: 5000,
  server_opts: {}
};

var server = require('http').Server();
var serverio = require('socket.io').listen(server, config.server_opts);
server.listen(config.server_port);

var players = [];

var data = require('../data/apples.json');
var red = data.red,
  green = data.green;

serverio.of('/game').on('connection', function(socket) {
  // TODO: add socket

  socket.on('disconnect', function() {
    // TODO: remove socket
  });

  socket.on('authme', function() {

  });
});
