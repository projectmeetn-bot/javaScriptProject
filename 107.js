function createTaxCalculator(tax){
    function calculate(price){
        return price + (price * tax / 100)
    }
    return calculate
}

const ten = createTaxCalculator(10);

console.log(ten(100000));