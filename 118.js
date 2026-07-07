    /*
    TypeError

    A TypeError occurs when you try to use a method or operation on a value that doesn't support it.

    Task

    Write a program that:

    Uses try...catch.
    Create a variable:
    let num = 100;
    Try to call:
    num.toUpperCase();
    In the catch block, print only:
    error.name
    Expected Output
    TypeError
    */

    try {
        let num = 100;
        num.toUpperCase()
    } catch (error) {
        console.log(error.name)
    }