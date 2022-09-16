const inquire = require("inquirer");
const mysql = require("mysql2");
const Employee = require("./assets/employee.js");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "store_db"
},
);

const ascii = `
___________________
| _______________ |
| |XXXXXXXXXXXXX| |
| |XXXXXXXXXXXXX| |
| |XXXXXXXXXXXXX| |
| |XXXXXXXXXXXXX| |
| |XXXXXXXXXXXXX| |
|_________________|
    _[_______]_
___[___________]___
|         [_____] []|__
|         [_____] []|  \\__
L___________________J     \\___\\/
___________________             /\\
/###################\\         (__)
 
--------------------------------------------
Employee Tracker
`;






const init = () =>{
console.clear();
console.log(ascii);

inquire
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["View All Employees", "Add Employees", "Update Employees", "View All Roles", "Add Role", "View All Departments", "Add Department"],
            name: "choice"
        }
    ])
    .then((response) =>{
        if(response.choice == "View All Employees"){
            const view = new Employee();
            view.viewAll();
        }

    })
}

init();