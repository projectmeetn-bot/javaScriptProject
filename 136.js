/*
Validate Multiple Product Fields
Task

Create:

let productName = "";
let price = -500;
let quantity = 0;
Validation Rules
If productName is empty, throw:
Error("Product name cannot be empty.")
Else if price <= 0, throw:
Error("Price must be greater than 0.")
Else if quantity <= 0, throw:
Error("Quantity must be greater than 0.")
Otherwise, print:
Product Added Successfully
Use
✅ try
✅ catch
✅ finally
In the finally block, print:
Product Validation Completed
*/

try {
    let productName = "";
    let price = -500;
    let quantity = 0;

    if(productName.length === 0){
        throw Error("Product name cannot be empty.")
    }else if(price <= 0){
        throw Error("Price must be greater than 0.")
    }else if(quantity <= 0){
        throw Error("Quantity must be greater than 0.")
    }else{
        console.log('Product Added Successfully')
    }
} catch (error) {
    console.log(error.message)
}finally{
    console.log('Product Validation Completed')
}