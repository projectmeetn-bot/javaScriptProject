/*
Create the following object:

const student = {
    name: "Meet",
    age: 22,
    address: {
        city: "Rajkot",
        state: "Gujarat",
        country: "India",
        pincode: 360001,
        area: "University Road"
    }
};

Write a JavaScript program to count how many properties are inside the address object.
*/

const student = {
    name: "Meet",
    age: 22,
    address: {
        city: "Rajkot",
        state: "Gujarat",
        country: "India",
        pincode: 360001,
        area: "University Road"
    }
};

let count = 0;

for(let key in student.address){
    count++
}

console.log(count)