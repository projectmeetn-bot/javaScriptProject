/*
Create the following object:

const student = {
    name: "Meet",
    age: 22,
    address: {
        city: "Rajkot",
        state: "Gujarat",
        country: "India",
        pincode: 360001
    }
};

Using a for...in loop, print all the properties inside the address object.

📤 Expected Output
city : Rajkot
state : Gujarat
country : India
pincode : 360001
*/

const student = {
    name: "Meet",
    age: 22,
    address: {
        city: "Rajkot",
        state: "Gujarat",
        country: "India",
        pincode: 360001
    }
};

for(let key in student.address){
    console.log(key, ':', student.address[key])
}