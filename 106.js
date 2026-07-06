function createDiscount(discount){
    function calculate(price){
        return price - (price * discount / 100)
    }
    return calculate
}

const hundred = createDiscount(0.123456)

console.log(hundred(1000))