console.log(1 + 1); // 2
console.log(typeof (1 + 1)); // number

console.log(1 + "1"); // 11
console.log(typeof (1 + "1")); // string

console.log(1 + 1 + ""); // 2
console.log(typeof (1 + 1 + "")); // string

console.log(1 + (1 + "")); // 11 : brackets changed the result
console.log(typeof (1 + (1 + ""))); // string
