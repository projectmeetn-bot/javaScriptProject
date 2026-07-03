/*
Write a JavaScript program to delete existing properties from an object using dot notation.

Create the following object:

const employee = {
  id: 101,
  name: "Rahul",
  department: "IT",
  salary: 45000,
  city: "Rajkot"
};

Delete these properties:

department
city

Finally, print the updated object. 
*/

const employee = {
  id: 101,
  name: 'Rahul',
  department: 'IT',
  salary: 45000,
  city: 'Rajkot',
};

// delete employee.department;
// delete employee.city;

// delete employee['department'];
// delete employee['city'];

let key = 'city';
delete employee[key];

console.log(employee);
