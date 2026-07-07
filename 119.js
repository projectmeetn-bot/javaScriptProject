/*
Different errors have different messages.
Task

Write a program that:

Uses try...catch.
Create:
let num = 100;
Call:
num.toUpperCase();
Inside the catch block, print only:
error.message
Expected Output (similar to)
num.toUpperCase is not a function
*/

try {
    let num = 100;
    num.toUpperCase();
} catch (error) {
    console.log(error.message)
}