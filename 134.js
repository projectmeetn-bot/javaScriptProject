/*
Reading Object Properties After Parsing
Task

Write a program that:

Create this JSON string:
let json = '{"product":"Laptop","price":50000,"stock":15}';
Convert it into a JavaScript object using JSON.parse().
Print:
Product: Laptop
Price: 50000
Stock: 15
Use:
✅ try
✅ catch
✅ finally
In the finally block, print:
Product Data Processed
Expected Output
Product: Laptop
Price: 50000
Stock: 15
Product Data Processed
*/

try {
    let json = '{"product":"Laptop","price":50000,"stock":15}';
    let obj = JSON.parse(json)

    console.log(`Product : ${obj.product}`)
    console.log(`Price : ${obj.price}`)
    console.log(`Stock : ${obj.stock}`)
} catch (error) {
    console.log(error.message)
}finally{
    console.log(`Product Data Processed`)
}