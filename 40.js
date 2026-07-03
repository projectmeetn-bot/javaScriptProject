/*
An electronics store stores product prices in an object.

Write a JavaScript program to check whether a product exists in the inventory.

If it exists, print:

Product Found
Price : <price>

Otherwise, print:

Product Not Found
*/
const readline = require("readline-sync");

const products = {
  Laptop: 60000,
  Mobile: 25000,
  Tablet: 18000,
  Headphone: 5000,
  TV: 75000
};

let searchProduct = readline.question("Enter Product Name: ");

let productName = "";
let price = 0;

for (let key in products) {
    if (key === searchProduct) {
        productName = key;
        price = products[key];
        break;
    }
}

if (productName !== "") {
    console.log("Product Found");
    console.log("Product :", productName);
    console.log("Price :", price);
} else {
    console.log("Product Not Found");
}