/*
Write this program.

function welcome(callback) {
    console.log("Welcome to JavaScript");
    callback();
}

function learn() {
    console.log("Let's learn callbacks");
}

Now call the function correctly so the output becomes:

Welcome to JavaScript
Let's learn callbacks
*/

function welcome(callback) {
    console.log("Welcome to JavaScript");
    callback();
}

function learn() {
    console.log("Let's learn callbacks");
}

welcome(learn)