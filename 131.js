/*
Task

Write a program that:

Creates:
let a = 10;
let b = 2;
Prints the result of:
a / b
Uses try, catch, and finally.
In the finally block, print:
Program Finished
Expected Output
5
Program Finished
*/

try {
    let a = 10;
    let b = 2
    
    if(b === 0){
        throw Error('Cannot divide by zero')
    }else{
        console.log(a / b)
    }
} catch (error) {
    console.log(error.message)
}finally{
    console.log('Program Finished')
}