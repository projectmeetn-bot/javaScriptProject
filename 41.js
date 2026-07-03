/*
A company stores employee salaries in an object.

Write a JavaScript program to count how many employees earn ₹50,000 or more.

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
let count = 0;

for(let key in employees){
    if(employees[key] >= 50000){
        count++
    }
}

console.log('Employee Salary More than 50,000 : ', count)