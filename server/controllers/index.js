var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function (results) {
        res.end(JSON.stringify({ results : results }));
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, function (results) {
        res.end(JSON.stringify({ results : results }));
      });
    }
  },
  users: {
    get: function (req, res) {
      models.users.get(function (results) {
        res.end(JSON.stringify(results));
      });
    },
    post: function (req, res) {
      models.users.post(req.body, function (results) {
        res.end(JSON.stringify(results));
      });
    }
  }
};

