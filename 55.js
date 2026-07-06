/*
Suppose you're building an inventory system.

const products = [
    "Mouse",
    "Keyboard",
    "Monitor",
    "Printer"
];

Using forEach(), print the output like this:

Product 1: Mouse
Product 2: Keyboard
Product 3: Monitor
Product 4: Printer
*/

const products = [
    "Mouse",
    "Keyboard",
    "Monitor",
    "Printer"
];

products.forEach((product , index) => {
    console.log(`Product ${index+1} : ${product}`);
})