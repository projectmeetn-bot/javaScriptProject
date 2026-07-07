/*
Task

Write a program that:

Creates:
let num = -10;
If the number is negative, throw:
Error("Negative numbers are not allowed.")
Otherwise, print the number.
In the catch block, print only the error message.
Expected Output
Negative numbers are not allowed.
*/

try {
    let num = -10
    if(num < 0){
        throw Error('Negative numbers are not allowed.')
    }
} catch (error) {
    console.log(error.message)
}