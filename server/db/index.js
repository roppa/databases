var mysql = require('mysql');
var connection = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database : 'chat'
});

module.exports = connection;