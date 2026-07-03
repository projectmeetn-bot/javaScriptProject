/*
Create the following object:

const student = {
    name: "Meet",
    age: 22,
    address: {
        city: "Rajkot",
        state: "Gujarat",
        pincode: 360001
    }
};

Create two variables:

let key1 = "address";
let key2 = "city";

Using only the variables, print:

Rajkot
*/

const student = {
    name: "Meet",
    age: 22,
    address: {
        city: "Rajkot",
        state: "Gujarat",
        pincode: 360001
    }
};

let key1 = 'address'
let key2 = 'city'

console.log(student[key1][key2])