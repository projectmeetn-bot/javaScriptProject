const fs = require('fs')
const line = require('readline-sync')

try {
    let json = fs.readFileSync("product.json", "utf8");
    let obj = JSON.parse(json);

    let id = Number(line.question("Enter ID :"));
    let name = line.question('Enter Name :');
    let price = Number(line.question('Enter Price :'));
    let quantity = Number(line.question('Enter Quantity :'));

    const product = {
        id,
        name,
        price,
        quantity
    }
    // Check ID
    if(id <= 0){
        throw Error('ID must be greater than 0')
    }

    // Check Duplicate ID
    let existingID = obj.find((product) => {
        return product.id === id
    })

    if(existingID){
        throw Error('Same ID existing in Inventory');
    }
    
    // Name Validation
    if(name.length === 0){
        throw Error('Name cannot be empty');
    }

    // Price Validation
    if(price <= 0){
        throw Error('Price must be greater than 0.');
    }

    // Quantity Validation
    if(quantity <= 0){
        throw Error('Quantity must be greater than 0.');
    }

    // Add Product
    obj.push(product)

    // Convert Array to JSON
    let updatedData = JSON.stringify(obj, null, 4);

    // Save file
    fs.writeFileSync("product.json", updatedData);

    // Success message
    console.log("✅ Product Added Successfully");


} catch (error) {
    console.log("❌", error.message);
}finally{
    console.log(`👍 Program Finished`)
}