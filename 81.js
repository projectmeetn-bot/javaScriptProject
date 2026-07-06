function login(username, callback){
    callback(username)
}
function dashboard(name){
    console.log(`Welcome, ${name}`);
    console.log(`Dashboard Loaded`)
}

login('Kevin', dashboard)