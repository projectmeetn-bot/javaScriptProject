const fs = require('fs')

console.log("Start");

const data = fs.readFileSync("product.json", "utf8");

console.log(data);

console.log("End");