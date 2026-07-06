/*
Create the following array:

const names = ["meet", "rahul", "amit", "jay"];

Using map(), create a new array where every name is converted to uppercase.

Expected Output
["MEET", "RAHUL", "AMIT", "JAY"]
*/

const names = ["meet", "rahul", "amit", "jay"];

const newArray = names.map((name) => {
    return name.toUpperCase()
})

console.log(newArray)