const mysql = require("mysql");

// Create the connection information fo the SQL database
const connection = mysql.createConnection({
  host: "localhost",

  // Your port
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "pats2012",
  database: "employeeTracker_DB"
});

// Connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

module.exports = connection