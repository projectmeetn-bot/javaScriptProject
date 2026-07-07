/*
Task

Write a Node.js program that:

Uses try...catch.
Inside the try block, print an undefined variable.
Inside the catch block, print:
Error Name: <error.name>
Error Message: <error.message>
Expected Output
Error Name: ReferenceError
Error Message: name is not defined
*/

try {
    console.log(name)
} catch (error) {
    console.log(`Error Name : ${error.name}`);
    console.log(`Error Message : ${error.message}`);
}