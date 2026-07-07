/*
Reading a Missing File (fs + Error Handling)

This is your first real Node.js file system error handling question.

Task

Write a Node.js program that:

Import the fs module.
Use:
fs.readFileSync("data.txt", "utf8");
If the file does not exist, handle the error using:
✅ try
✅ catch
✅ finally
In the catch block, print:
error.code
In the finally block, print:
File Operation Completed
Expected Output (if data.txt does not exist)
ENOENT
File Operation Completed*/

const fs = require('fs')

try {
    fs.readFileSync("data.txt", "utf8");
} catch (error) {
    console.log(error.code)
}finally{
    console.log('File Operation Completed')
}