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
        db.query("SELECT id, name FROM department;", (err, results) =>{
            if (err){
                console.error(err);
            }
            console.table(results);
    })
}
    viewRole(){
        const command = `SELECT role.title AS title, department.name AS department, role.salary AS salary FROM role JOIN department ON role.department_id = department.id;`


        db.query(command, (err, results) =>{
            if(err){
                console.error(err);
            }
            console.table(results);
        })
    }
    viewEmployee(){
        const command = `SELECT employee.id, employee.first_name, employee.last_name,department.name AS department, role.salary AS salary, employee.manager_id AS manager FROM employee JOIN role ON role.id = employee.id JOIN department ON department.id = role.id;`

        db.query(command, (err, results) =>{
            if(err){
                console.error(err);
            }
            console.table(results);
        })
    }
}


module.exports = View;