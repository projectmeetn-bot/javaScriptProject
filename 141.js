const fs = require('fs')
const line = require('readline-sync')

let json = fs.readFileSync("product.json", "utf8");
let obj = JSON.parse(json);

try {
    let id = Number(line.question('Enter Product ID :'));
    let name = line.question('Enter Product Name :');
    let price = Number(line.question('Enter Product Price :'));
    let quantity = Number(line.question('Enter Product Quantity :'));

    const product = {
        id : id,
        name : name,
        price : price,
        quantity : quantity,
    }
    obj.push(product)
    JSON.stringify(products, null, 4);
    fs.writeFileSync("products.json", updatedData);
} catch (error) {
    
}