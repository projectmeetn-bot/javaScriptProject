/*
Create the following array:

const numbers = [10, 20, 30, 40];

Using map(), create a new array where every number is multiplied by 3.

Expected Output
[30, 60, 90, 120]
*/

const numbers = [10, 20, 30, 40];

const newArray = numbers.map((num) => {
    return num * 3
})

console.log(newArray)