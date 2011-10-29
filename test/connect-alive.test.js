var connect = require('connect'),
    alive = require('../lib/connect-alive'),
    assert = require('assert'),
    http = require('http');

var connect_app = function() {
  var app = function(req, res) { res.end(''); };
  return connect(app);
}

module.exports = {

  "Initialization": function() {
    assert.eql(typeof alive, 'function');
  },

  "Minimal setup: No custom conditions": function() {
    var app = connect(alive());

    assert.response(app, {url: '/alive?'}, {status: 200});
  },

  'Advanced setup: Using custom alive? conditions: returning false': function() {
    var check = function() {
      return false;
    };
    var app = connect(alive(check));

    assert.response(app, {url: '/alive?'}, {status: 500});
  },

  'Advanced setup: Using custom alive? conditions: returning undefined': function() {
    var check = function() {
      // return undefined;
    };
    var app = connect(alive(check));

    assert.response(app, {url: '/alive?'}, {status: 500});
  },

  'Advanced setup: Using custom alive? conditions: raising exception': function() {
    var check = function() {
      throw("SHIT - WHERE ARE ALL THE HORSES???!!! *drama-queen scream*");
    };
    var app = connect(alive(check));

    assert.response(app, {url: '/alive?'}, {status: 500});
  },

  'Advanced setup: Using custom alive? conditions: returning true': function() {
    var check = function() {
      return true;
    };
    var app = connect(alive(check));

    assert.response(app, {url: '/alive?'}, {status: 200});
  }

};