// "use strict";  // uncomment it to get errors in strict mode.

{
  function sayHello() {
    return "Hello!";
  }
}

console.log(sayHello()); // Works, 'sayHello' is available globally

{
  let a = 10;
  function sayHelloAgain() {
    return "Hello!";
  }
}

console.log(sayHelloAgain());
// let is unreachable because it's in block scope console.log(a);
