function createGreeting(greeting){
    function greet(name){
        console.log(greeting + " " + name)
    }
    return greet
}

const sayHello = createGreeting('Hello')

sayHello('Meet')