const inquire = require("inquirer");
const mysql = require("mysql2");
const View  = require("./assets/view.js");


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

const init = () =>{


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
        console.clear();
        if(response.choice == "View All Employees"){

            
        }
        else if(response.choice == "View All Departments"){
            const view = new View;
            view.viewDepartment();
            console.log("\n");
        }
        else if(response.choice == "Add Department"){

            
        }
        
        init();
    })
}


const ask  = () =>{
}
















init();

