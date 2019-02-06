// Inside the connection.js file, setup the code to connect Node to MySQL.

// Export the connection.

//Require mysql npm package to create a connection to the mysql database.
var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burger_db"
});

connection.connect(function (err) {
    
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    
    console.log("connected as id " + connection.threadId);
});

//Export the connection properties so that we can use them in other files.
module.exports = connection;

