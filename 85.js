const products = [
    { id: 1, name: "Mouse", stock: 5 },
    { id: 2, name: "Keyboard", stock: 2 },
    { id: 3, name: "Monitor", stock: 1 }
];

function sellProduct(products, id, callback) {

    // Find the product by id
    const product = products.find((item) => {
        return item.id === id;
    });

    // Check if product exists
    if (product) {
        // Reduce stock
        product.stock -= 1;

        // Execute callback
        callback(product);
    } else {
        console.log("Product not found");
    }
}

function stockStatus(product) {

    if (product.stock === 0) {
        console.log(`${product.name} is Out of Stock`);
    } else {
        console.log(`${product.name} Stock Left: ${product.stock}`);
    }
}

// Function Call
sellProduct(products, 3, stockStatus);