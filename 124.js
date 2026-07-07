/*
Task

Write a program that:

Creates:
let quantity = -5;
If quantity is less than or equal to 0, throw:
Error("Quantity must be greater than 0.")
Otherwise, print:
Stock Updated Successfully
In the catch block, print only the error message.
Expected Output
Quantity must be greater than 0.
*/

try {
    let quantity = -5;
    if(quantity <= 0){
        throw Error(`Quantity must be greater than 0.`)
    }else{
        console.log(`Stock Updated Successfully`)
    }
} catch (error) {
    console.log(error.message)
}