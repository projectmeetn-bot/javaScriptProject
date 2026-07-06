const line = require('readline-sync');

const e_id = Number(line.question('Enter Employee ID :'));

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

function deleteEmployee(employees, id, callback){
    const index = employees.findIndex((emp) => {
        return emp.id == id
    })
    
    if(index !== -1){
        employees.splice(index, 1)
        callback(employees);
        console.log(`Employee Removed successfully`)
    }else{
        console.log('employee not found')
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

deleteEmployee(employees, e_id, showEmployees)