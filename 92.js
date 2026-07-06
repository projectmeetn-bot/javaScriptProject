const line = require('readline-sync')

const sid = Number(line.question('Enter Student ID :'));

const students = [
    {id: 1, name: 'Meet', marks: 90},
    {id: 2, name: 'Smit', marks: 80},
    {id: 3, name: 'Kevin', marks: 50}
]

function updateMarks(students, id, callback){
    const student = students.find((stu) => {
        return stu.id == id
    })
    if(student){
        student.marks += 5
        callback(student)
    }else{
        console.log(`Student Not Found`)
    }
}

function showResult(student){
    console.log(`Student Name : ${student.name}`);
    console.log(`Student Marks : ${student.marks}`);
}

updateMarks(students, sid, showResult)