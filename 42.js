/*
A company gives a bonus only to employees earning less than ₹50,000.

Write a JavaScript program to print the names of employees eligible for the bonus.

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

console.log('Employee Eligible for Bonus :')
for(let key in employees){
    if(employees[key] < 50000){
        console.log(key)
    }
}