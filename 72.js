/*
Now let's do something closer to how callbacks are used in real applications.

function calculate(a, b, operation) {
    operation(a, b);
}

function add(x, y) {
    console.log(x + y);
}
Your Task

Write only one line to produce this output:

30
*/

function calculate(a, b, operation) {
    operation(a, b);
}

function add(x, y) {
    console.log(x + y);
}

calculate(10, 20, add)