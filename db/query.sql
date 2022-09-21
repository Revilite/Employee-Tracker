SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name,  role.title AS title, department.name AS department, role.salary AS salary, employee.manager_id AS manager FROM employee 
LEFT JOIN role ON role.id = employee.id
LEFT JOIN department ON department.id = role.id;