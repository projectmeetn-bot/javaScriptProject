/*
Array Search Validation
Task

Create the following array:

const products = ["Laptop", "Mouse", "Keyboard"];

Create:

let search = "Monitor";

Now:

If search is not found in the array, throw:
Error("Product not found.")
Otherwise, print:
Product Found
In the catch block, print only the error message.
💡 Hint

Use:

includes()
Expected Output
Product not found.

This introduces validation after searching data, which is a common pattern in inventory and database operations.
*/

const products = ["Laptop", "Mouse", "Keyboard"];

try {
    let search = "Monitor";
    if(!products.includes(search)){
        throw Error("Product not found.")
    }
} catch (error) {
    console.log(error.message)
}