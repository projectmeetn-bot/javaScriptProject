/*
Task

Create a function named calculator that accepts:

a
b
operation (callback)

Create three callback functions:

add
subtract
multiply

Now call calculator() three times to print:

30
10
200
*/

function calculator(a, b, operation){
    operation(a, b)
}

function add(x, y){
    console.log(x+y)
}
function subtract(x, y){
    console.log(x-y)
}
function multiply(x, y){
    console.log(x*y)
}
function divide(x, y){
    console.log(x/y)
}

calculator(20, 10, add)
calculator(20, 10, subtract)
calculator(20, 10, multiply)
calculator(20, 10, divide)