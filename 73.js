/*
Task

Create a function that accepts three parameters:

a
b
operation (a callback function)

Inside that function, execute the callback by passing a and b.

Then:

Create another function named subtract.
subtract should print the subtraction of two numbers.
Call the first function so the final output is:
70
*/

function calculate(a, b, operation){
    operation(a, b)
}

function multiply(x, y){
    console.log(x * y)
}

calculate(20, 10, multiply)