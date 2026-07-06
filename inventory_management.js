const line = require("readline-sync");

// ===============================
// Inventory Management System
// ===============================

let products = [];

let choice;

do {

    console.log("\n======================================");
    console.log("      INVENTORY MANAGEMENT SYSTEM");
    console.log("======================================");
    console.log("1. Add Product");
    console.log("2. View Products");
    console.log("3. Search Product");
    console.log("4. Update Product");
    console.log("5. Delete Product");
    console.log("6. Stock In");
    console.log("7. Stock Out");
    console.log("8. Low Stock Report");
    console.log("9. Out Of Stock Report");
    console.log("10. Inventory Value");
    console.log("11. Exit");

    choice = Number(line.question("\nEnter Choice : "));

    switch (choice) {

        case 1:
            addProduct();
            break;

        case 2:
            viewProducts();
            break;

        case 3:
            searchProduct();
            break;

        case 4:
            updateProduct();
            break;

        case 5:
            deleteProduct();
            break;

        case 6:
            stockIn();
            break;

        case 7:
            stockOut();
            break;

        case 8:
            lowStockReport();
            break;

        case 9:
            outOfStockReport();
            break;

        case 10:
            inventoryValue();
            break;

        case 11:
            console.log("\nThank You!");
            break;

        default:
            console.log("\nInvalid Choice!");

    }

} while (choice !== 11);


// =========================================
// Functions
// =========================================

// ==========================
// Add Product
// ==========================

function addProduct() {

    const id = Number(line.question("Enter Product ID : "));
    const name = line.question("Enter Product Name : ");
    const category = line.question("Enter Category : ");
    const price = Number(line.question("Enter Price : "));
    const stock = Number(line.question("Enter Stock : "));

    const product = products.find((pro) => pro.id === id);

    if (product) {
        console.log("\nProduct ID Already Exists");
        return;
    }

    const newProduct = {
        id,
        name,
        category,
        price,
        stock
    };

    products.push(newProduct);

    console.log("\nProduct Added Successfully");
}


// ==========================
// View Products
// ==========================

function viewProducts() {

    if (products.length === 0) {
        console.log("\nNo Products Found");
        return;
    }

    products.forEach((product) => {

        console.log("--------------------------------");
        console.log(`ID       : ${product.id}`);
        console.log(`Name     : ${product.name}`);
        console.log(`Category : ${product.category}`);
        console.log(`Price    : ${product.price}`);
        console.log(`Stock    : ${product.stock}`);
        console.log("--------------------------------");

    });

}


// ==========================
// Search Product
// ==========================

function searchProduct() {

    const id = Number(line.question("Enter Product ID : "));

    const product = products.find((pro) => pro.id === id);

    if (product) {

        console.log("--------------------------------");
        console.log(`ID       : ${product.id}`);
        console.log(`Name     : ${product.name}`);
        console.log(`Category : ${product.category}`);
        console.log(`Price    : ${product.price}`);
        console.log(`Stock    : ${product.stock}`);
        console.log("--------------------------------");

    } else {

        console.log("Product Not Found");

    }

}


// ==========================
// Update Product
// ==========================

function updateProduct() {

    const id = Number(line.question("Enter Product ID : "));

    const product = products.find((pro) => pro.id === id);

    if (!product) {
        console.log("Product Not Found");
        return;
    }

    product.name = line.question("Enter New Name : ");
    product.category = line.question("Enter New Category : ");
    product.price = Number(line.question("Enter New Price : "));
    product.stock = Number(line.question("Enter New Stock : "));

    console.log("Product Updated Successfully");

}


// ==========================
// Delete Product
// ==========================

function deleteProduct() {

    const id = Number(line.question("Enter Product ID : "));

    const index = products.findIndex((pro) => pro.id === id);

    if (index === -1) {

        console.log("Product Not Found");
        return;

    }

    products.splice(index, 1);

    console.log("Product Deleted Successfully");

}

function stockIn() {

    const id = Number(line.question("Enter Product ID : "));

    const product = products.find((pro) => pro.id === id);

    if (!product) {
        console.log("Product Not Found");
        return;
    }

    const quantity = Number(line.question("Enter Stock Quantity : "));

    if (quantity <= 0) {
        console.log("Invalid Quantity");
        return;
    }

    product.stock += quantity;

    console.log("\nStock Added Successfully");

    console.log("--------------------------------");
    console.log(`ID       : ${product.id}`);
    console.log(`Name     : ${product.name}`);
    console.log(`Category : ${product.category}`);
    console.log(`Price    : ${product.price}`);
    console.log(`Stock    : ${product.stock}`);
    console.log("--------------------------------");

}

function stockOut() {

    const id = Number(line.question("Enter Product ID : "));

    const product = products.find((pro) => pro.id === id);

    if (!product) {
        console.log("Product Not Found");
        return;
    }

    const quantity = Number(line.question("Enter Sell Quantity : "));

    if (quantity <= 0) {
        console.log("Invalid Quantity");
        return;
    }

    if (product.stock >= quantity) {

        product.stock -= quantity;

        console.log("\nStock Updated Successfully");

        console.log("--------------------------------");
        console.log(`ID       : ${product.id}`);
        console.log(`Name     : ${product.name}`);
        console.log(`Category : ${product.category}`);
        console.log(`Price    : ${product.price}`);
        console.log(`Stock    : ${product.stock}`);
        console.log("--------------------------------");

    } else {

        console.log("Insufficient Stock");

    }

}

function lowStockReport() {

    const lowStock = products.filter((product) => product.stock <= 5);

    if (lowStock.length === 0) {
        console.log("\nNo Low Stock Products");
        return;
    }

    console.log("\n========== LOW STOCK REPORT ==========");

    lowStock.forEach((product) => {

        console.log("--------------------------------");
        console.log(`ID       : ${product.id}`);
        console.log(`Name     : ${product.name}`);
        console.log(`Category : ${product.category}`);
        console.log(`Price    : ${product.price}`);
        console.log(`Stock    : ${product.stock}`);
        console.log("--------------------------------");

    });

}

function outOfStockReport() {

    const outStock = products.filter((product) => product.stock === 0);

    if (outStock.length === 0) {
        console.log("\nNo Out Of Stock Products");
        return;
    }

    console.log("\n========== OUT OF STOCK REPORT ==========");

    outStock.forEach((product) => {

        console.log("--------------------------------");
        console.log(`ID       : ${product.id}`);
        console.log(`Name     : ${product.name}`);
        console.log(`Category : ${product.category}`);
        console.log(`Price    : ${product.price}`);
        console.log(`Stock    : ${product.stock}`);
        console.log("--------------------------------");

    });

}

function inventoryValue() {

    let totalValue = 0;

    products.forEach((product) => {

        const value = product.price * product.stock;

        console.log("--------------------------------");
        console.log(`Product : ${product.name}`);
        console.log(`Price   : ${product.price}`);
        console.log(`Stock   : ${product.stock}`);
        console.log(`Value   : ${value}`);
        console.log("--------------------------------");

        totalValue += value;

    });

    console.log(`\nTotal Inventory Value : ₹${totalValue}`);

}