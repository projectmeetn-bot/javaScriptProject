fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        console.log("Users List:");

        users.forEach((user) => {
            console.log("-------------------------");
            console.log("ID     :", user.id);
            console.log("Name   :", user.name);
            console.log("Email  :", user.email);
            console.log("City   :", user.address.city);
        });
    })
    .catch((error) => {
        console.log("Error :", error.message);
    });