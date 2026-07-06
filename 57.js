/*
Now print the product name and its price.

Data
const products = [
    { id: 1, name: "Mouse", price: 500 },
    { id: 2, name: "Keyboard", price: 1200 },
    { id: 3, name: "Monitor", price: 10000 }
];
Expected Output
Mouse - ₹500
Keyboard - ₹1200
Monitor - ₹10000
*/

const products = [
    { id: 1, name: "Mouse", price: 500 },
    { id: 2, name: "Keyboard", price: 1200 },
    { id: 3, name: "Monitor", price: 10000 }
];

products.forEach((product) => {
    console.log(`${product.name} - ₹${product.price}`)
})