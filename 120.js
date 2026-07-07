/*
Custom Error Message

Instead of printing error.name or error.message, display your own user-friendly message.

Task

Write a program that:

Uses try...catch.
Inside the try block:
Print an undefined variable.
Inside the catch block:
Print:
An error occurred. Please try again.
*/

try {
    console.log(name)
} catch{
    console.log(`An error occurred. Please try again.`)
}