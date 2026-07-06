const line = require('readline-sync')

let sid = Number(line.question('Enter Student ID :'))

const students = [
    {id: 1, name: 'Meet', marks: 90},
    {id: 2, name: 'Smit', marks: 80},
    {id: 3, name: 'Kevin', marks: 50}
]

function findStudent(students, id, callback){
    
    const student = students.find((stu) => {
        return stu.id === id
    })
    
    if(student){
        callback(student)
    }else{
        console.log(`Student Not Found`)
    }
}

function showStudent(student){
    console.log(`Student Name : ${student.name}`);
    console.log(`Student Marks : ${student.marks}`)
}

findStudent(students, sid, showStudent)