/*
Task

Write a Node.js program that:

Import the fs module.
Read products.json:
fs.readFileSync("products.json", "utf8");
Convert the file content into a JavaScript object using:
JSON.parse()
Print the parsed object.
Use:
✅ try
✅ catch
✅ finally
In the catch block, print:
error.message
In the finally block, print:
Product File Processing Completed
*/

const fs = require('fs')

try {
    let json = fs.readFileSync("products.json", "utf8");
    let obj = JSON.parse(json);
    console.log(obj)
} catch (error) {
    console.log(error.message)
}finally{
    console.log('Product File Processing Completed')
}