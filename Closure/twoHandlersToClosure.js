function outer() {
  var counter = 0;
  var counterCounter = 0;
  function counterHandler() {
    return (counter = counter + 1);
  }

  function counterCounterHandler() {
    return counterCounter + counter;
  }

  return { counterHandler, counterCounterHandler };
}

var counterHandlersArray = outer();

counterOfOuter = counterHandlersArray.counterHandler(); // It turned 1 from 0

console.log(counterOfOuter);

counterCounterOfOuter = counterHandlersArray.counterCounterHandler(); // It also turned 1 because we've already executed first function that already changed this Value.

console.log(counterCounterOfOuter);
