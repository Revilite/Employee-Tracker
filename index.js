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
        if(response.choice == "View All Employees"){
        const view = new View();
        view.viewEmployee();
        setTimeout(init, 10);
        }

        else if(response.choice == "Add Employees"){
            const roles = [];
        }
        else if(response.choice == "View All Roles"){
            const view = new View();
            view.viewRole();
            setTimeout(init, 10);
        }
        else if(response.choice == "Add Role"){
            const departments = [];
            db.query("SELECT name FROM department;", (err, results) =>{
                if (err){
                    console.error(err);
                }
                for(let result of results){
                    departments.push(result.name);
                }
            if(departments != []){
            inquire
            .prompt([
                {  
                    type:"text",
                    message: "What is the name of the role?",
                    name: "name",
                },
                {
                    type: "text",
                    message : "What is the salary of the role?",
                    name: "salary",
                },
                {
                    type: "list",
                    message: "Which department does this role belong to?",
                    choices: departments,
                    name: "department",
                }
             
            ])
            .then((response) =>{
                for(let i = 0; i < departments.length; i++){
                    if(departments[i] == response.department){
                        const command =  `INSERT INTO role(title, salary, department_id) VALUES ("${response.name}", ${response.salary}, ${i + 1})`;

                        db.query(command, (err, response) =>{
                            if(err){
                                console.error(err);
                            }
                            console.log("Role Created");
                        })
                        setTimeout(init, 10);
                    }
                }
                
                
               
            })
        }
        else{
            console.log("A deparment is need in order to create a role");
            setTimeout(init, 10);
            
        }
        });
        }
        else if(response.choice == "View All Departments"){
            const view = new View();
            view.viewDepartment();
            setTimeout(init, 10);
        }
        else if(response.choice == "Add Department"){
            
            inquire
            .prompt([
                {
                    message: "What is the name of the new department?",
                    name: "name",
                }
            ])
            .then((response) =>{
                const command = `INSERT INTO department(name) VALUES ("${response.name}");`
        
                db.query(command, (err, results) =>{
                    if(err){
                        console.error(err);
                    }
                    console.log("Department Created");
                })
                setTimeout(init, 10);
            });
        }
        
    })

    
}


init();

