var connect = require('connect'),
    alive = require('../lib/connect-alive'),
    assert = require('assert'),
    http = require('http');

var connect_app = function() {
  return connect(function(req, res) { res.end(''); });
}

module.exports = {

  "Initialization": function() {
    assert.eql(typeof alive, 'function');
  },

  "Minimal setup: No custom conditions": function() {
    var app = connect_app();

    app.use(alive());

    assert.response(app, {url: '/alive?'}, {status: 200});
  },

  'Advanced setup: Using custom alive? conditions: returning false': function() {
    var app = connect_app();

    var check = function() {
      return false;
    };
    app.use(alive(check));

    assert.response(app, {url: '/alive?'}, {status: 500});
  },

  'Advanced setup: Using custom alive? conditions: returning undefined': function() {
    var app = connect_app();

    var check = function() {
      // return undefined;
    };
    app.use(alive(check));

    assert.response(app, {url: '/alive?'}, {status: 500});
  },

  'Advanced setup: Using custom alive? conditions: raising exception': function() {
    var app = connect_app();

    var check = function() {
      throw("SHIT - WHERE ARE ALL THE HORSES???!!! *drama-queen scream*");
    };
    app.use(alive(check));

    assert.response(app, {url: '/alive?'}, {status: 500});
  },

  'Advanced setup: Using custom alive? conditions: returning true': function() {
    var app = connect_app();

    var check = function() {
      return true;
    };
    app.use(alive(check));

    assert.response(app, {url: '/alive?'}, {status: 200});
  }

};