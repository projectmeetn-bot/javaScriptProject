/*
Object Property Validation
Task

Create the following object:

const user = {
    username: "meet",
    password: "12345678"
};

Now create:

let inputUsername = "admin";

If inputUsername is not equal to user.username, throw:

Error("Invalid username.")

Otherwise, print:

Username Verified

In the catch block, print only the error message.

Expected Output
Invalid username.
*/

const user = {
    username: "meet",
    password: "12345678"
};

try {
    let inputUsername = "admin";

    if(inputUsername !== user.username){
        throw Error("Invalid username.")
    }else{
        console.log('Username Verified')
    }
} catch (error) {
    console.log(error.message)
}