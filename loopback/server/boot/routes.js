const processMessage = require('./process-message');

module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.post('/chat', function(req, res) {
    console.log(req.body);
    const { message } = req.body;
    processMessage(message);
  });
}
