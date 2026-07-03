/*
A company stores the monthly salaries of its departments in an object.

Write a JavaScript program to:

Calculate the total salary.
Calculate the average salary.
Find the department with the highest salary.
Print all the results.
📝 Input
const salary = {
  HR: 30000,
  Developer: 60000,
  Tester: 45000,
  Manager: 70000
};
 */

const salary = {
    HR: 30000,
    Developer: 60000,
    Tester: 45000,
    Manager: 70000
  };

let totalSalary = 0;
let count = 0;
let highestDepartment = "";
let highestSalary = 0;

for(let key in salary){
  count++
  totalSalary += salary[key]
  if(salary[key] > highestSalary){
    highestSalary = salary[key];
    highestDepartment = key
  }
}


let average = totalSalary / count
console.log(totalSalary)
console.log(average)
console.log(highestDepartment)
console.log(highestSalary)