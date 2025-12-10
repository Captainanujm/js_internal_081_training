let user = { name: "Aman", age: 21, course: "JS" };

// Convert object to JSON
let jsonData = JSON.stringify(user);
console.log(jsonData);

// Convert JSON back to object
let objAgain = JSON.parse(jsonData);
console.log(objAgain);