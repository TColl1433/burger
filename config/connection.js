var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "docker",
//     database: "burgers_db"
// });

var connection = mysql.createConnection({
    host: "g3v9lgqa8h5nq05o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "rjireol9xkuogt0l",
    password: "wycl1moy14cvdtop",
    database: "abrk1lcwaz354sge"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;


