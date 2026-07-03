/*
Write a JavaScript program to add new properties to an existing object using bracket notation ([]).

Create the following object:

const mobile = {
  brand: "Samsung",
  price: 25000
};

Add these properties using bracket notation only:

color    : Black
storage  : 256GB
camera   : 50MP

Finally, print the complete object.
 */

const mobile = {
  brand: 'Samsung',
  price: 25000,
};

mobile['color'] = 'Black';
mobile['storage'] = '256GB';
mobile['camera'] = '50MP';

console.log(mobile);
