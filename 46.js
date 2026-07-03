/*
Create the following object:

const employee = {
    id: 101,
    name: "Rahul",
    department: {
        name: "IT",
        floor: 3,
        location: "Ahmedabad"
    }
};

Print the following using bracket notation only:
*/

const employee = {
    id: 101,
    name: "Rahul",
    department: {
        name: "IT",
        floor: 3,
        location: "Ahmedabad"
    }
};

console.log('Employee ID :',employee['id'])
console.log('Employee Name :',employee['name'])
console.log('Department :',employee['department']['name'])
console.log('Floor :',employee['department']['floor'])
console.log('Location :',employee['department']['location'])