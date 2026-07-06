/*
This is how forEach() is used in real MERN projects.

Example Data
const products = [
    { id: 1, name: "Mouse", price: 500 },
    { id: 2, name: "Keyboard", price: 1200 },
    { id: 3, name: "Monitor", price: 10000 }
];
🎯 Practice Question 5

Using forEach(), print only the product names.

Expected Output:

Mouse
Keyboard
Monitor
*/

const products = [
    { id: 1, name: "Mouse", price: 500 },
    { id: 2, name: "Keyboard", price: 1200 },
    { id: 3, name: "Monitor", price: 10000 }
];

products.forEach((product) => {
    console.log(product['name'])
})