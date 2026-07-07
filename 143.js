function getProducts() {

    return new Promise((resolve, reject) => {

        console.log("📡 Calling Product API...");

        setTimeout(() => {

            const products = require("./product.json");

            resolve(products);

        }, 2000);

    });

}

async function displayProducts() {

    try {

        const products = await getProducts();

        console.table(products);

    } catch (error) {

        console.log(error.message);

    }

}

displayProducts();