/*
Task

Write a program that:

Creates:
let name = "";
If the name is an empty string, throw:
Error("Name cannot be empty.")
Otherwise, print:
Valid Name
In the catch block, print only the error message.
Expected Output
Name cannot be empty.
*/

try {
    let name = "";
    if(name.length === 0){
        throw Error("Name cannot be empty.")
    }else{
        console.log(`Valid Name`)
    }
} catch (error) {
    console.log(error.message)
}