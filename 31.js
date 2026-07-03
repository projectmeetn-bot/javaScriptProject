/*
A school stores a student's marks in an object.

Write a JavaScript program to calculate the total marks, average marks, and determine whether the student has passed or failed.

A student passes if the average is 35 or more.

📝 Input
const marks = {
  maths: 85,
  science: 92,
  english: 78,
  computer: 95
};
📤 Expected Output
Total Marks : 350
Average : 87.5
Result : Pass
 */

const marks = {
  maths: 85,
  science: 92,
  english: 78,
  computer: 95,
};

let total = 0;
let count = 0;

for (let key in marks) {
  total += marks[key];
  count++;
}
let average = total / count;

console.log('Total Marks :', total);
console.log('Average :', average);
if (average >= 35) {
  console.log('Result : Pass');
} else {
  console.log('Result : Fail');
}
