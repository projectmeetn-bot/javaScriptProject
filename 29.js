/*
Write a JavaScript program to find the smallest numeric value in an object using a for...in loop.

Create the following object:

const marks = {
  maths: 85,
  science: 92,
  english: 78,
  computer: 95
};

Find the subject with the lowest marks and print both the subject name and its marks.
 */

const marks = {
  maths: 85,
  science: 92,
  english: 78,
  computer: 95,
};

let smallest = Infinity;
let subject = '';

for (let key in marks) {
  if (marks[key] < smallest) {
    smallest = marks[key];
    subject = key;
  }
}

console.log(subject, ':', smallest);
