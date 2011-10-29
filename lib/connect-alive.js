/**
 *  By default returns "200 OK" (a.k.a. "is alive"),
 *  or if `callback` is given; send "200 OK" if `true`, else "5xx Server Error".
 *
 *  Examples:
 *
 *    // Minimal:
 *
 *    connect.createServer(
 *      connect.alive()
 *    );
 *
 *    // Advanced - custom condition:
 *
 *    connect.createServer(
 *       connect.alive(function() {
 *         // Check that you got all horses/unicorns in the stable...or something.
 *         var got_all_horses = parseInt(process.env.HORSES_IN_THE_STABLE) == 5;
 *
 *         return got_all_horses;
 *      })
 *    );
 *
 *   @param {Function} callback
 *   @return {Function}
 *   @api public
 */

exports = module.exports = function alive(callback, options) {

  callback = callback || function() { return true };
  options = options || {};

  // TODO
  return function(req, res, next) {
    return next();
  }
}