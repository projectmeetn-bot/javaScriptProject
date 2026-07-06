/*
Let's combine everything you've learned.

const products = [
    { id: 1, name: "Mouse", price: 500, stock: 10 },
    { id: 2, name: "Keyboard", price: 1200, stock: 0 },
    { id: 3, name: "Monitor", price: 10000, stock: 5 },
    { id: 4, name: "Printer", price: 7000, stock: 0 }
];
Task

Create a new array that contains only the products that are in stock.

Expected Output
[
    { id: 1, name: "Mouse", price: 500, stock: 10 },
    { id: 3, name: "Monitor", price: 10000, stock: 5 }
]
*/

const products = [
    { id: 1, name: "Mouse", price: 500, stock: 10 },
    { id: 2, name: "Keyboard", price: 1200, stock: 0 },
    { id: 3, name: "Monitor", price: 10000, stock: 5 },
    { id: 4, name: "Printer", price: 7000, stock: 0 }
];

const  newArray = products.filter((product) => {
    return product.stock > 0
})

console.log(newArray)