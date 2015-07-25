var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function (result) {
        res.end(JSON.stringify(result));
      });
    }, // a function which handles a get request for all messages
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