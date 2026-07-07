/*
Re-throwing an Error

Sometimes an inner catch cannot fully handle an error. It logs it and passes it to the outer catch.

Task

Write a program that:

Use an outer try...catch.
Inside the outer try, create an inner try...catch.
In the inner try, write:
throw Error("Database Connection Failed");
In the inner catch:
Print:
Inner Catch
Then re-throw the same error.
In the outer catch:
Print:
Outer Catch
Then print:
error.message
Expected Output
Inner Catch
Outer Catch
Database Connection Failed
*/

try {
    try {
        throw Error("Database Connection Failed");
    } catch (error) {
        console.log('Inner Catch')
        throw error;
    }
} catch (error) {
    console.log('Outer Catch')
    console.log(error.message)
}