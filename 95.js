const line = require('readline-sync');

const e_id = Number(line.question('Enter Employee ID :'));
const e_name = line.question('Enter Employee Name :');
const e_department = line.question('Enter Employee Department :');

const employees = [
    {
        id: 1,
        name: "Meet",
        department: "HR"
    },
    {
        id: 2,
        name: "Smit",
        department: "Sales"
    },
    {
        id: 3,
        name: "Kevin",
        department: "IT"
    },
    {
        id: 4,
        name: "Rahul",
        department: "Finance"
    }
];

const newEmployee = {
    id : e_id,
    name : e_name,
    department : e_department
}
function addEmployee(employees, newEmployee, callback){
    const emp = employees.find((emp) => {
        return newEmployee.id === emp.id
    })
    if(emp){
        console.log('Employee ID Already Exists')
    }else{
        employees.push(newEmployee)
        callback(employees)
    }
}

function showEmployees(employees){
    employees.forEach((emp) => {
        console.log("--------------------------------");
        console.log(`ID : ${emp.id}`);
        console.log(`NAME : ${emp.name}`);
        console.log(`DEPARTMENT : ${emp.department}`);
        console.log("--------------------------------");
    });
}

addEmployee(employees, newEmployee, showEmployees)