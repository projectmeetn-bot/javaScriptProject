/*
Multiple Validations in One Program
Task

Write a program that:

Create:
let username = "";
let password = "12345";
Validation rules:
If username is empty, throw:
Error("Username cannot be empty.")
Else if password.length < 8, throw:
Error("Password must be at least 8 characters long.")
Otherwise, print:
Login Successful
Use:
✅ try
✅ catch
✅ finally
In the catch block, print only error.message.
In the finally block, print:
Login Process Completed

Goal: Learn how to perform multiple validations in sequence, just like a real login API.
*/

try {
    let username = "";
    let password = "1234567";

    if(username.length === 0){
        throw Error("Username cannot be empty.")
    }else if (password.length < 8){
        throw Error("Password must be at least 8 characters long.")
    }else{
        console.log('Login Successful')
    }
} catch (error) {
    console.log(error.message)
}finally{
    console.log('Login Process Completed')
}