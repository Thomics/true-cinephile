module.exports = app;


import express from 'express';

// Initialize http server
var app = express();

// Handle / route
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Launch the server on port 3000
var server = app.listen(3000, function() {
  var { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
