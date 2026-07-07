/*
Handling Invalid JSON
Task

Write a program that:

Creates an invalid JSON string:
let json = '{"name":"Meet","age":22';
Use JSON.parse(json).
Use:
✅ try
✅ catch
✅ finally
In the catch block, print:
error.name
In the finally block, print:
JSON Validation Finished
Expected Output
SyntaxError
JSON Validation Finished
*/

try {
    let json = '{"name":"Meet","age":22';
    let obj = JSON.parse(json)
} catch (error) {
    console.log(error.name)
}finally{
    console.log('JSON Validation Finished')
}