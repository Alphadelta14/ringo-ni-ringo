
var socket = null;

$(document).ready(function() {
  socket = io();
  socket.on('connection', function() {
    socket.send('authme');
  });
});
