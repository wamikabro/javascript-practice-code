const number = -0;

console.log(number == 0); // true
console.log(number === 0); // true

console.log(Object.is(number, 0)); // false
console.log(Object.is(number, -0)); // true
