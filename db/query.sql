SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.salary AS salary, employee.manager_id AS manager 
FROM employee 
JOIN role ON role.id = employee.id
JOIN department ON department.id = role.id;