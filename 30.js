/*
Write a JavaScript program to calculate the average of all numeric values in an object using a for...in loop.

Create the following object:

const marks = {
  maths: 85,
  science: 92,
  english: 78,
  computer: 95
};

Calculate the average marks and print the result.
 */

const marks = {
  maths: 85,
  science: 92,
  english: 78,
  computer: 95,
};

let count = 0;
let total = 0;

for (let key in marks) {
  count++;
  total += marks[key];
}
let average = total / count;

console.log(total);
console.log(average);
