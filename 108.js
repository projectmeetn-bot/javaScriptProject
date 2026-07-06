function createCounter(){
    let count = 0;

    function increment(){
        count += 1
        console.log(count)
    }
    return increment
}

let counter = createCounter()

counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();