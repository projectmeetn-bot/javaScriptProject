/*
Task

Write a Node.js program that:

Uses try...catch.
Inside the try block, print an undefined variable.
Inside the catch block, print only the error message.
Expected Output
name is not defined
*/

try {
    console.log(name)
} catch (error) {
    console.log(error.message)
}