/*
Task

Write a program that:

Creates:
let password = "abc123";
If the password length is less than 8, throw:
Error("Password must be at least 8 characters long.")
Otherwise, print:
Password Accepted
In the catch block, print only the error message.
Expected Output
Password must be at least 8 characters long.
*/

try {
    let password = 'abc123'
    if(password.length < 8){
        throw Error("Password must be at least 8 characters long.");
    }else{
        console.log('Password Accepted')
    }
} catch (error) {
    console.log(error.message)
}