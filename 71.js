/*
Until now, your callback function didn't receive any data.

Now let's pass data to it.

function process(student) {
    console.log("Student Found");

    student("Meet");
}

function showName(name) {
    console.log(name);
}
🎯 Task

Call process() correctly so the output becomes:

Student Found
Meet
*/

function process(student) {
    console.log("Student Found");

    student("Meet");
}

function showName(name) {
    console.log(name);
}

process(showName)