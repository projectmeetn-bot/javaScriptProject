/*
Now let's make it a little more interesting.

function office(work) {
    console.log("Office Open");

    work();

    console.log("Office Closed");
}

function meeting() {
    console.log("Meeting Started");
}
❓Task

Call the office() function correctly so the output becomes:

Office Open
Meeting Started
Office Closed
*/

function office(work) {
    console.log("Office Open");

    work();

    console.log("Office Closed");
}

function meeting() {
    console.log("Meeting Started");
}

office(meeting)