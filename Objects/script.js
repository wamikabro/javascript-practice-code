const person = {
  first_name: "Wamique",
};

console.log(person);

// Add new attribute to the existing object
person.last_name = "Abro";

console.log(person);

// Use object.create to set __proto__
const newObject = Object.create(person); // setting person object as prototype of newObject
console.log(newObject); // it will be chained to the person
// proof
console.log(newObject.first_name); // calling the property of person
