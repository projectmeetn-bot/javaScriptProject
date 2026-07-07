/*
Multiple Validations
Task

Create:

let mobile = "987654321";

Now validate:

If the mobile number is not exactly 10 digits, throw:
Error("Mobile number must contain exactly 10 digits.")

Otherwise, print:

Mobile Number Verified

In the catch block, print only the error message.

Expected Output
Mobile number must contain exactly 10 digits.
*/

try {
    let mobile = "987654321";

    if(mobile.length !== 10){
        throw Error("Mobile number must contain exactly 10 digits.")
    }else{
        console.log('Mobile Number Verified')
    }
} catch (error) {
    console.log(error.message)
}