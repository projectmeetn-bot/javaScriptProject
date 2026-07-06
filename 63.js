/*
Until now, you've returned one property.

Now you'll create a new object.

const users = [
    { id: 1, name: "Meet", age: 22 },
    { id: 2, name: "Rahul", age: 24 },
    { id: 3, name: "Amit", age: 20 }
];

Using map(), create a new array like this:

[
    { username: "Meet" },
    { username: "Rahul" },
    { username: "Amit" }
]*/

const users = [
    { id: 1, name: "Meet", age: 22 },
    { id: 2, name: "Rahul", age: 24 },
    { id: 3, name: "Amit", age: 20 }
];


const newObject = users.map((user) => {
    return {
        username : user.name 
    };
});

console.log(newObject)