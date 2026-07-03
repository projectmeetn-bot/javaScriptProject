/*
Write a JavaScript program to access an object's property using a variable.

Create a student object and a variable named key.

Store "city" inside the variable key.

Print the value of the city property using the variable, not by writing "city" directly.
 */

const student = {
  name: 'Meet',
  age: 22,
  city: 'Rajkot',
};

let key = 'city';

console.log(student[key]);
