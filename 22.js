/*
Write a JavaScript program to add new properties to an existing object using dot notation (.).

Create a student object with the following properties:

name : Meet
age  : 22

After creating the object, add these new properties:

city   : Rajkot
course : BCA
cgpa   : 8.9

Finally, print the complete object.
 */

const student = {
  name: 'Meet',
  age: 22,
};

student.city = 'Rajkot';
student.course = 'BCA';
student.cgpa = 8.9;

console.log(student);
