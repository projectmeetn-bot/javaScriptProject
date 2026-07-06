/*
Now let's work with strings.

const names = [
    "Meet",
    "Rahul",
    "Amit",
    "Jay",
    "Milan"
];

Using filter(), create a new array that contains only names with more than 4 characters.

Expected Output
["Rahul", "Milan"]
*/

const names = [
    "Meet",
    "Rahul",
    "Amit",
    "Jay",
    "Milan"
];

const newArray = names.filter((name) => {
    return name.length > 4
})
console.log(newArray)