const line = require('readline-sync')

const product_id = Number(line.question(`Enter Product ID :`));
const products = [
    {
        id: 1,
        name: "Mouse",
        price: 500,
        stock: 10
    },
    {
        id: 2,
        name: "Keyboard",
        price: 1200,
        stock: 5
    },
    {
        id: 3,
        name: "Monitor",
        price: 10000,
        stock: 1
    },
    {
        id: 4,
        name: "Printer",
        price: 7000,
        stock: 0
    }
];

function sellProduct(products, id, nimavat){
    const product = products.find((pro) => {
        return pro.id == id
    })

    if(product){
        if(product.stock > 0){
            product.stock -= 1;
            nimavat(product);
        }else{
            console.log(`Out of Stock`)
        }
    }else{
        console.log(`Product Not Found`)
    }
}

function showProduct(product){
    console.log(`Product Name : ${product.name}`);
    console.log(`Product Stock : ${product.stock}`);
}

sellProduct(products, product_id, showProduct)