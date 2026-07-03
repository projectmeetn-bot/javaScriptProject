/*
Write a JavaScript program to update existing properties of an object using dot notation (.).

Create the following object:

const student = {
  name: "Meet",
  age: 22,
  city: "Rajkot",
  course: "BCA"
};

Update these properties:

age    → 23
city   → Ahmedabad
course → MCA

Finally, print the updated object.
 */

const student = {
  name: 'Meet',
  age: 22,
  city: 'Rajkot',
  course: 'BCA',
};

// student.age = 23;
// student.city = 'Ahmedabad';
// student.course = 'MCA';

// student['age'] = 23;
// student['city'] = 'Ahmedabad';
// student['course'] = 'MCA';

let key = 'name';

student[key] = 'Kevin';

console.log(student);
