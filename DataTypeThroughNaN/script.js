const string = "5";

// although it's a string, it coerced and found out, it was a number.
console.log("Is Not a Number: " + isNaN(string));

// checks if it's NaN strictly.
// it will return false for strings, symbol etc. Only true on pure NaN
// it doesn't coerce.
// that's why only number should be passed inside this kind of NaN
console.log("Is Not a Number: " + Number.isNaN(string));

const string2 = "123abc";

console.log(isNaN(string2)); // true (whole string is invalid for conversion)
console.log(isNaN(parseInt(string2))); // false (parseInt converts "123abc" to 123)
