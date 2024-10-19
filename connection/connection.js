const mysql = require("mysql2");

// set host, database, and creds here
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'library'
});

// make connection to database and report status
connection.connect((err) => {
    if (!err) {
        console.log ("Connection to database success");
    } else {
        console.log("Connection to database failed:" + JSON.stringify(err));
    }
})

module.exports = connection;