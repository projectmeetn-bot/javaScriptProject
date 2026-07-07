/*
Task

Write a program that:

Creates two variables:
let a = 10;
let b = 0;
If b is 0, throw:
Error("Cannot divide by zero.")
Otherwise, print:
a / b
In the catch block, print only the error message.
Expected Output
Cannot divide by zero.
*/

try {
    let a = 10;
    let b = 0;
    if(b === 0){
        throw Error('Cannot Divide by zero.')
    }else{
        console.log(`Divsion : ${a / b}`)
    }
} catch (error) {
    console.log(error.message)
}