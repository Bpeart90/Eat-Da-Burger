// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSBD_URL) {
  connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
  connection = mysql.createConnection({
    host: `jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com`,
    user: `u5nclcxrnvaoy6f5`,
    password: `xsh4rcq0sb3o55jg`,
    database: `wehie48l4kero1bj`
  });
};

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
