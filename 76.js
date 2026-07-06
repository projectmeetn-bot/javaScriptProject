function calculator(){
    function add(a, b){
        console.log(a + b);
    }
    return add
}

const sum = calculator();
sum(10, 20);