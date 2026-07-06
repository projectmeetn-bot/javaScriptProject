const user = {
    name: "Meet",
    email: "meet@gmail.com"
};

function registerUser(user, emailCallback, logCallback){
    console.log('User Registered Successfully');

    emailCallback(user);
    logCallback(user);
}

function sendEmail(user){
    console.log(`Email sent to ${user.email}`)
}

function saveLog(user){
    console.log(`Registration logged for ${user.name}`)
}

registerUser(user, sendEmail, saveLog)