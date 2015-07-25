var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT users.username, messages.message, rooms.roomname from users, messages, rooms WHERE users.id = messages.user_id AND rooms.id = messages.room_id', function(err, rows, fields) {
        if (err) throw err;
        cb(rows);
      });
    }, // a function which produces all the messages
    post: function (postData, cb) {

      //find out if user exists
      db.query('SELECT id FROM users WHERE username = "' + postData.username + '"', function(err, results) {
        if (err) throw err;

        if (results[0]) {
          db.query('INSERT INTO messages (user_id, message, room_id) VALUES (' + results[0].id + ', "' + postData.message + '", ' + postData.room_id + ')', function (err, result) {
            if (err) throw err;
            cb(result);
          });
          cb("user id is " + results[0].id);
        } else {
          module.exports.users.post(postData, function (err, result) {
            //module.exports.messages.post(postData, );
          });
          cb("must be undefined");
        }
        //cb(JSON.stringify(results[0]));

      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      db.query('SELECT users.username FROM users', function(err, rows, fields) {
        if (err) throw err;
        cb(rows);
      });
    },
    post: function (postData, cb) {
      db.query('INSERT INTO users (username) VALUES ("' + postData.username + '")', function (err, result) {
        if (err) throw err;
        cb(result);
      });
    }
  },


};

