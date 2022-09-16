const inquire = require("inquirer");
const mysql = require("mysql2");
const Employee = require("./assets/employee.js");
const Department = require("./assets/department.js");
const Role = require("./assets/role.js");


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




console.log(ascii);

const questions = () =>{


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
        answers(response.choice);
    })
}


const answers = (response) =>{
    if(response.choice == "View All Employees"){
        const view = new Employee();
        view.viewAll();
    }
    else if(response.choice == "View All Departments"){
        const view = new Department();
        view.viewAll();
    }
    else if(response.choice == "Add Department"){
        const add = new Department();
        add.add();
        console.log("It hit")
        questions();
    }


    
}

















questions();

