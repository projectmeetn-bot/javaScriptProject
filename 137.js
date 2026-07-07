/*
Nested try...catch
Task

Write a program that:

Use an outer try...catch.
Inside the outer try, create an inner try...catch.
In the inner try, write:
console.log(name);
In the inner catch, print:
Inner Error Handled
After the inner try...catch, still inside the outer try, print:
Outer Try Continues
In the outer catch, print:
Outer Error Handled
Expected Output
Inner Error Handled
Outer Try Continues
*/

try {
    try {
        console.log(name)
    } catch{
        console.log('Inner Error Handled')
    }
    console.log('Outer Try Continues')
} catch (error) {
    console.log('Outer Error Handled')
}