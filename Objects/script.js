const person = {
  first_name: "Wamique",
};

console.log(person);

// Add new attribute to the existing object
person.last_name = "Abro";

console.log(person);

// freeze an object so some options are frozen/not available anymore
person.freeze();
