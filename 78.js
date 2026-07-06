function processNumbers(a, b, callback){
    callback(a, b)
}
function multiply(x, y){
    console.log(x * y)
}

processNumbers(15, 4, multiply)