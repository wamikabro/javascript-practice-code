function createCounter() {
  let count = 0; // Private variable

  function function1() {
    count += 1;
    return count;
  }

  function function2() {
    count += 1;
    return count;
  }

  return [function1, function2];
}

const counter = createCounter();

console.log(counter[0]()); // 1
console.log(counter[0]()); // 2
// it also has same backback as above
console.log(counter[1]()); // 3
console.log(counter[1]()); // 4
