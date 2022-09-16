const inquire = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "store_db"
})

class View{
    
}

module.exports = View;