const product = {
    name: "Mouse",
    stock: 2
};

function buyProduct(product, callback) {
    // Reduce stock by 1
    product.stock -= 1;

    // Execute callback
    callback(product);
}

function checkStock(product) {
    if (product.stock === 0) {
        console.log(`${product.name} is Out of Stock`);
    } else {
        console.log(`Stock Left: ${product.stock}`);
    }
}

// Call the function
buyProduct(product, checkStock);