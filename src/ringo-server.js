
var config = {
  server_port: 5000,
  server_opts: {}
};

var server = require('http').Server();
var serverio = require('socket.io').listen(server, config.server_opts);
server.listen(config.server_port);
var _ = require('_');

var players = [];

var data = require('../data/apples.json');
var red = data.red,
  green = data.green;

serverio.of('/game').on('connection', function(socket) {

  socket.on('disconnect', function() {
    players = _.without(players, socket);
    console.log('Player count', players.length);
  });

  socket.on('authme', function() {
    players.append(socket);
  });
});
