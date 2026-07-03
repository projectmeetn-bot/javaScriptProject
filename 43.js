/*
A company stores employee salaries in an object.

Write a JavaScript program to find:

The employee with the lowest salary
Their salary
📝 Input
const employees = {
  Rahul: 30000,
  Amit: 60000,
  Neha: 45000,
  Priya: 80000,
  Karan: 55000
};
*/

const employees = {
    Rahul: 30000,
    Amit: 60000,
    Neha: 45000,
    Priya: 80000,
    Karan: 55000
};

let lowest = Infinity;
let emp = "";
for(let key in employees){
    if(employees[key] < lowest){
        lowest = employees[key]
        emp = key
    }
}

console.log(emp)
console.log(lowest)