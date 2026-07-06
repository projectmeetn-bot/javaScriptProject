/*
Create the following array:

const users = [
    { id: 1, name: "Meet", age: 22 },
    { id: 2, name: "Rahul", age: 24 },
    { id: 3, name: "Amit", age: 20 }
];

Using map(), create a new array that contains only the names.

Expected Output
["Meet", "Rahul", "Amit"]
*/

const users = [
    { id: 1, name: "Meet", age: 22 },
    { id: 2, name: "Rahul", age: 24 },
    { id: 3, name: "Amit", age: 20 }
];

const newArray = users.map((name) => {
    return name.name
})

console.log(newArray)