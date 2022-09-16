const inquire = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "store_db"
})

class Department{
    viewAll(){
        db.query("SELECT * FROM department;", (err, results) =>{
            if (err){
                console.error(err);
            }
            console.log(results);
        })
    }
    add(){
        inquire
        .prompt([
            {
                type: "text",
                message: "What is the name of the department?",
                name: "name",
            }
        ])
        .then((response) =>{
            
        })
    }
}


module.exports = Department;