/*
Task

Write a Node.js program that:

Uses try...catch.
Inside try, print an undefined variable.
Inside catch, print the entire error object.
Expected Output (similar to)
ReferenceError: name is not defined
*/

try {
    console.log(name)
} catch (error) {
    console.log(error)
}