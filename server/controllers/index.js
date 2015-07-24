var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      res.send("messages get");
    },
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },
  users: {
    get: function (req, res) {
      res.send("users get");
    },
    post: function (req, res) {
      
    }
  }
};

