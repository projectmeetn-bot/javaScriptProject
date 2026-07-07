/*
Task

Write a program that:

Creates:
let json = '{"name":"Meet","age":22}';
Convert the JSON string into a JavaScript object using:
JSON.parse()
Print:
obj.name
obj.age
Use:
✅ try
✅ catch
✅ finally
In the finally block, print:
JSON Processing Completed
Expected Output
Meet
22
JSON Processing Completed
*/


try {
    let json = '{"name":"Meet","age":22}';
    let obj = JSON.parse(json)
    console.log(obj.name)
    console.log(obj.age)    
} catch (error) {
    console.log(error.message)
}finally{
    console.log('JSON Processing Completed')
}