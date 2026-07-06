function placeOrder(productName, callback){
    callback(productName)
}

function orderSuccess(pname){
    console.log(`Order placed for ${pname}`);
    console.log(`Payment Successful`)
}

placeOrder('Laptop', orderSuccess)