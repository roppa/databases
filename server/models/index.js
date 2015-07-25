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
      db.query('SELECT id FROM users WHERE username = "' + postData.username + '"', function(err, userResults) {
        if (err) throw err;

        //if user exists, post message
        if (userResults[0]) {

          //if room exists, get id
          db.query('SELECT id FROM rooms WHERE roomname = "' + postData.roomname + '"', function(err, roomResults) {
            if (err) throw err;
            if (roomResults[0]) {
              //finally
              db.query('INSERT INTO messages (user_id, message, room_id) VALUES (' + userResults[0].id + ', "' + postData.message + '", ' + roomResults[0].id + ')', function (err, result) {
                if (err) throw err;
                cb(result);
              });
            } else {
              //create room
              module.exports.rooms.post(postData, function (err, result) {
                var newPostData;
                if (err) throw err;
                if (result.insertId) {
                  newPostData = { user_id : result.user_id, message : postData.message, room_id : result.insertId };
                  module.exports.messages.post(newPostData, cb);
                }
              });
            }
          });

        } else { //user doesnt exist, lets create them
          module.exports.users.post(postData, function (err, result) {
            var newPostData;
            if (err) throw err;
            if (result.insertId) {
              newPostData = { user_id : result.insertId, message : postData.message, room_id : postData.room_id };
              module.exports.messages.post(newPostData, cb);
            }
          });
        }

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

  rooms : {
    get: function (cb) {

    },
    post: function (postData, cb) {

    }
  }

};

