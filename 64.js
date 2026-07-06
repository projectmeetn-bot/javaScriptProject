/*
Create the following array:

const numbers = [5, 10, 15, 20, 25, 30];

Using filter(), create a new array that contains only numbers greater than 15.

Expected Output
[20, 25, 30]
*/

const numbers = [5, 10, 15, 20, 25, 30];

const newArray = numbers.filter((num) => {
    return num > 15
})

console.log(newArray)