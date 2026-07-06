const student = {
    name: "Meet",
    marks: 85
};

function showResult(student, callback){
    callback(student)
}

function displayStudent(student){
    console.log(`Name : ${student.name}\nMarks : ${student.marks}`)
}

showResult(student, displayStudent)