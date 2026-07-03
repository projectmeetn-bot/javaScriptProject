/*
Write a JavaScript program to calculate the sum of all numeric values in an object using a for...in loop.

Create the following object:

const marks = {
  maths: 85,
  science: 92,
  english: 78,
  computer: 95
};

Calculate the total marks.
 */

const marks = {
  maths: 85,
  science: 92,
  english: 78,
  computer: 95,
};

let totalMarks = 0;

for (let key in marks) {
  totalMarks += marks[key];
}
console.log(totalMarks);
