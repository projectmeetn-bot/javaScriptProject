/*
A store keeps the stock quantity of products in an object.

Write a JavaScript program to print only the products that are out of stock.

A product is out of stock if its quantity is 0.

📝 Input
const inventory = {
  Laptop: 5,
  Mobile: 0,
  Tablet: 8,
  Headphone: 0,
  Mouse: 12
};
*/

const inventory = {
    Laptop: 0,
    Mobile: 0,
    Tablet: 8,
    Headphone: 0,
    Mouse: 12
};

console.log('Out Of Stock :')
for (let key in inventory) {
    if (inventory[key] === 0) {
        console.log(key)
    }
}
