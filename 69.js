/*
Study this code carefully.
function execute(task) {
    console.log("Task Started");

    task();
}

function coding() {
    console.log("Coding...");
}
Your Task

Call the execute() function correctly so the output becomes:

Task Started
Coding...
*/

function execute(task) {
    console.log("Task Started");

    task();
}

function coding() {
    console.log("Coding...");
}

execute(coding)