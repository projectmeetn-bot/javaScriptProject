/*
Create a nested object named student.

The object should contain:

name : "Meet"
age  : 22

address
    city : "Rajkot"
    state : "Gujarat"
    pincode : 360001

Print the following:

Name : Meet
City : Rajkot
State : Gujarat
Pincode : 360001
*/

const student = {
    name : 'Meet',
    age : 22,
    address : {
        city : 'Rajkot',
        state : 'Gujarat',
        pincode : 360001
    }
}

console.log('Name : ',student.name)
console.log('City : ',student.address.city)
console.log('State : ',student.address.state)
console.log('Pincode : ',student.address.pincode)