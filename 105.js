function createMultiplier(multiplier){
    function multiply(number){
        return multiplier * number
    }
    return multiply
}

const double = createMultiplier(5)

console.log(double(5))