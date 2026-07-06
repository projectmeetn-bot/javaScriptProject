const student = {
    name : 'Meet',
    marks : 70
}

function updateMarks(student, callback){
    student.marks += 10
    callback(student)
}

function showMarks(student){
    console.log(`${student.name} scored ${student.marks} marks`)
}

updateMarks(student, showMarks)