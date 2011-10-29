
var connect = require('connect'),
    alive = require('../lib/connect-alive');

// $ curl -i http://localhost:3000/alive?

connect.createServer(
  alive(function() {
    var some_condition = true;

    return some_condition;
  })
).listen(3000);