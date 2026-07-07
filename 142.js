const fs = require("fs");

console.log("Program Started");

fs.readFile("products.json", "utf8", (error, data) => {

    if (error) {
        console.log(error.stock);
        return;
    }

    console.log("File Read Successfully");
    console.log(data);

});

console.log("Program Finished");