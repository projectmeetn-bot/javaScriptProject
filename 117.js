/*
Task

Write a program that:

Uses try...catch.
Inside the try block:

Create two variables:

let a = 10;
let b = 20;
Print their sum.
Inside the catch block:

Print:

Something went wrong!
Expected Output
30

Since there is no error, the catch block should not execute.
*/

try {
    let a = 10;
    let b = 20;
    console.log(`Sum : ${a + b}`)
} catch (error) {
    console.log(`Something Went Wrong!`)
}