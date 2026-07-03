/*
A company stores employee salaries in an object.

Employees who earn less than ₹50,000 receive a 10% bonus.

Employees who earn ₹50,000 or more receive a 5% bonus.

Update the object with the new salary after adding the bonus.

📝 Input
const employees = {
  Rahul: 30000,
  Amit: 60000,
  Neha: 45000,
  Priya: 80000
};
*/

const employees = {
    Rahul: 30000,
    Amit: 60000,
    Neha: 45000,
    Priya: 80000
  };

for (let key in employees){
    let newSalary = 0;
    if(employees[key] < 50000){
        newSalary = employees[key] * (10 / 100)
    }else if(employees[key] >= 50000){
        newSalary = employees[key] * (5 / 100)
    }
    employees[key] += newSalary
}

console.log(employees)