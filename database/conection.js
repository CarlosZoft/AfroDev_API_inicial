const mysql = require('mysql');

const conection = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "password",
    database : "agenda"
})

module.exports = conection;