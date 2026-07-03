/*
Create the following object:

const student = {
    name: "Meet",
    age: 22,
    address: {
        city: "Rajkot",
        state: "Gujarat",
        pincode: 360001
    }
};

Update the following values:

city → "Ahmedabad"
state → "Rajasthan"
pincode → 380001

Finally, print the complete object.
*/

const student = {
    name: "Meet",
    age: 22,
    address: {
        city: "Rajkot",
        state: "Gujarat",
        pincode: 360001
    }
};

student.address.city = 'Ahmedabad'
student.address.state = 'Rajasthan'
student.address.pincode = '380001'


console.log(student)