function fetchUser(id, callback){
    callback(id)
}
function displayUser(id){
    console.log(`User ID : ${id}`)
}

fetchUser(101, displayUser)