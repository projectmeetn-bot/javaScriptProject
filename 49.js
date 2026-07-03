/*
Create the following object:

const student = {
    name: "Meet",
    age: 22,
    address: {
        city: "Rajkot",
        state: "Gujarat"
    }
};

Add these new properties inside the address object:

country : "India"
area : "University Road"

Finally, print the complete object.
*/

const student = {
    name: "Meet",
    age: 22,
    address: {
        city: "Rajkot",
        state: "Gujarat"
    }
};

student.address.country = 'India'
student.address.area = 'University Road'

console.log(student)

delete student.address.country
delete student.address.area

console.log(student)