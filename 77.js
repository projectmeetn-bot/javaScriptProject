function greetUser(name, callback){
    callback(name)
}
function welcome(name){
    console.log(`Welcome ${name}`)
}


greetUser("Meet", welcome)