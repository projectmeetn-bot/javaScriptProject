/*
throw

Until now, JavaScript has been throwing errors automatically.

Now you will throw an error yourself.

Task

Write a program that:

Uses try...catch.
Creates:
let age = 15;
If age is less than 18, throw this error:
You are not eligible to vote.
Print the error inside the catch block.
*/

try {
    let age = 15
    if(age < 18){
        throw ('You are not eligible to vote.')
    }
} catch (error) {
    console.log(error)
}