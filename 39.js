/*
An electronics store stores product prices in an object.

Write a JavaScript program to find:

The most expensive product
Its price
📝 Input
const products = {
    Laptop: 60000,
    Mobile: 25000,
    Tablet: 18000,
    Headphone: 5000,
    TV: 75000
};
*/

const products = {
    Laptop: 60000,
    Mobile: 25000,
    Tablet: 18000,
    Headphone: 5000,
    TV: 75000
};

let highestPrice = 0;
let productName = "";