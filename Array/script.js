// it is sorting alphabatically even if we use numbers
console.log(["c", "a", "d", "b"].sort());

// it won't sort like 2 50 100, because it's looking at them as if they're strings
// so it will think 100 is smallest since it's first letter is 1
console.log([100, 2, 50].sort());

// it's gonna return string
console.log(["lions", "tigers", "bears oh my!"].join(" & "));

// it takes 2 arrays, and return single array concatinating
console.log([1, 2, 3].concat([4, 5, 6]));

// concat does not mutate the actual array
let array1 = [1, 2, 3];
let array2 = array1.concat([4]);
console.log(array2); // it's new array after concatination
console.log(array1); // it's unchanged array

// since arrays are references in Javascript just like Array List in Java unlike Array of java
let array3 = [1, 2, 3];
let array4 = array3;
array3[2] = 3.1; // array4 is also changed since it has reference to array3
console.log(array4);
