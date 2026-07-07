/*
Task

Write a Node.js program that:

Uses try...catch.
Inside the try block, print an undefined variable.
Inside the catch block, print only the error name.
Expected Output
ReferenceError
*/

try {
    console.log(name)
} catch (error) {
    console.log(error.name)
}