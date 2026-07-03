/*
Write a JavaScript program to find the largest numeric value in an object using a for...in loop.

Create the following object:

const marks = {
  maths: 85,
  science: 92,
  english: 78,
  computer: 95
};

Find the subject with the highest marks and print both the subject name and its marks.
 */

const marks = {
  maths: 85,
  science: 92,
  english: 78,
  computer: 95,
};

let highestMark = 0;
let subject = '';
for (let key in marks) {
  if (marks[key] > highestMark) {
    highestMark = marks[key];
    subject = key;
  }
}

console.log(subject, ':', highestMark);
