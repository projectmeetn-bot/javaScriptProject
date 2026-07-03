/*
Using the same inventory object:

const inventory = {
    Laptop: 0,
    Mobile: 0,
    Tablet: 8,
    Headphone: 0,
    Mouse: 12
};

Write a JavaScript program to count how many products are out of stock.
*/

const inventory = {
    Laptop: 0,
    Mobile: 0,
    Tablet: 8,
    Headphone: 0,
    Mouse: 12
};

let count = 0;

for(let key in inventory){
    if(inventory[key] === 0){
        count++
    }
}

console.log('Out Of Stock Product :', count)