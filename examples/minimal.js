
var connect = require('connect'),
    alive = require('../lib/connect-alive');

/**
 * Example: $ curl -i http://localhost:3000/alive?
 */

connect.createServer(
  alive()
).listen(3000);
