/*
const students = [
    { id: 1, name: "Meet", marks: 85 },
    { id: 2, name: "Rahul", marks: 72 },
    { id: 3, name: "Amit", marks: 90 }
];

Using forEach(), print:

1. Meet scored 85 marks
2. Rahul scored 72 marks
3. Amit scored 90 marks
*/

const students = [
    { id: 1, name: "Meet", marks: 85 },
    { id: 2, name: "Rahul", marks: 72 },
    { id: 3, name: "Amit", marks: 90 }
];

students.forEach((stu, index) => {
    console.log(`${index+1}. ${stu.name} scored ${stu.marks} marks`)
})