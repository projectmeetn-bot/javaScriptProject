/*
Now let's make it a little more interesting.

const products = [
    { id: 1, name: "Mouse", price: 500 },
    { id: 2, name: "Keyboard", price: 1200 },
    { id: 3, name: "Monitor", price: 10000 }
];

Using map(), create a new array that contains only the prices.

Expected Output
[500, 1200, 10000]
*/

const products = [
    { id: 1, name: "Mouse", price: 500 },
    { id: 2, name: "Keyboard", price: 1200 },
    { id: 3, name: "Monitor", price: 10000 }
];

const newArray = products.map((product) => {
    return product.price
})

console.log(newArray)