var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function (results) {
        res.json({ results : results });
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, function (results) {
        res.json({ results : results });
      });
    }
  },
  users: {
    get: function (req, res) {
      models.users.get(function (results) {
        res.json(results);
      });
    },
    post: function (req, res) {
      models.users.post(req.body, function (results) {
        res.json(results);
      });
    }
  },
  rooms: {
    get: function (req, res) {
      models.rooms.get(function (results) {
        res.json(results);
      });
    },
    post: function (req, res) {
      models.rooms.post(req.body, function (results) {
        res.json(results);
      });
    }
  }
};