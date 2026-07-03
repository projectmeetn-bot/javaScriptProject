/*
A company stores department salaries in an object.

Write a JavaScript program to calculate:

Total salary
Average salary
Highest salary department
Lowest salary department
📝 Input
const departments = {
    HR: 30000,
    Developer: 60000,
    Tester: 45000,
    Manager: 80000,
    Sales: 40000
};
*/

const departments = {
    HR: 30000,
    Developer: 60000,
    Tester: 45000,
    Manager: 80000,
    Sales: 40000
};

let totalSalary = 0;
let count = 0;
let average = 0;
let highsalary = 0;
let highDept = "";
let lowDept = "";
let lowSalary = Infinity;

for (let key in departments) {
    totalSalary += departments[key];
    count++
    if (departments[key] > highsalary) {
        highsalary = departments[key]
        highDept = key
    }
    if (departments[key] < lowSalary) {
        lowSalary = departments[key]
        lowDept = key
    }
}
average = totalSalary / count
console.log('Total Salary : ', totalSalary)
console.log('Average Salary : ', average)
console.log('Highest Department : ', highDept)
console.log('Highest Salary : ', highsalary)
console.log('Lowest Department : ', lowDept)
console.log('Lowest Salary : ', lowSalary)