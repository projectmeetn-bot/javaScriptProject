function welcome(){
    function greet(){
        console.log('Welcome Meet')
    }

    return greet
}
const message = welcome();
message();