/*
Task

Write a program that:

Creates:
let marks = 120;
If marks is less than 0 or greater than 100, throw:
Error("Marks must be between 0 and 100.")
Otherwise, print:
Valid Marks
In the catch block, print only the error message.
Expected Output
Marks must be between 0 and 100.
*/

try {
    let marks = 120;
    if(marks < 0 || marks > 100){
        throw Error("Marks must be between 0 and 100.")
    }else{
        console.log('Valid Marks')
    }
} catch (error) {
    console.log(error.message)
}