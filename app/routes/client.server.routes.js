'use strict';

module.exports = function(app) {
  // Client routing
  var core = require('../../app/controllers/core.server.controller');
  app.route('/client').post(client.create);
};
