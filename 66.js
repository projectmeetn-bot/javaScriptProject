/*
Now we'll use filter() exactly as it's used in MERN projects.

const students = [
    { id: 1, name: "Meet", marks: 85 },
    { id: 2, name: "Rahul", marks: 45 },
    { id: 3, name: "Amit", marks: 72 },
    { id: 4, name: "Jay", marks: 30 }
];

Using filter(), create a new array that contains only students who passed.

Assume:

Passing marks = 50 or more

Expected Output
[
    { id: 1, name: "Meet", marks: 85 },
    { id: 3, name: "Amit", marks: 72 }
]
*/

const students = [
    { id: 1, name: "Meet", marks: 85 },
    { id: 2, name: "Rahul", marks: 45 },
    { id: 3, name: "Amit", marks: 72 },
    { id: 4, name: "Jay", marks: 30 }
];

const newArray = students.filter((student) => {
    return student.marks >= 50
})

console.log(newArray)