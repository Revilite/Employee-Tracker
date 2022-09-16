const inquire = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "store_db"
})

class View{
    viewDepartment(){
        db.query("SELECT * FROM department;", (err, results) =>{
            if (err){
                console.error(err);
            }
            console.log(results);
    })
}
}

module.exports = View;