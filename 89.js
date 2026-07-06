const employee = {
    name: 'Meet',
    salary: 30000,
}

function increaseSalary(employee, callback){
    employee.salary += 5000;
    callback(employee);
}

function showSalary(employee){
    if(employee.salary >= 35000){
        console.log(`Employee Name : ${employee.name}\nSalary : ${employee.salary}`)
    }else{
        console.log('Salary updated failed')
    }
}

increaseSalary(employee, showSalary)