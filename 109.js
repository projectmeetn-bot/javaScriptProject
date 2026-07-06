function createCounter(){
    let count = 0;

    function increment(){
        count += 1
    }

    function decrement(){
        count -= 1
    }

    function getCount(){
        console.log(count)
    }

    return {
        increment, decrement, getCount
    }
}

let counter = createCounter()

counter.increment()
// counter.increment()
// counter.increment()

// counter.decrement()

counter.getCount()