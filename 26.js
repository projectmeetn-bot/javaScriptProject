/*
Write a JavaScript program to print all the property names (keys) of an object using the for...in loop.

Create the following object:

const student = {
  name: "Meet",
  age: 22,
  city: "Rajkot",
  course: "BCA"
};

Print only the keys.
 */

const student = {
  name: 'Meet',
  age: 22,
  city: 'Rajkot',
  course: 'BCA',
};

let property = 0;

for (let meet in student) {
  property++;
}

console.log(property);
