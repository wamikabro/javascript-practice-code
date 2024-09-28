function myFactoryFunction(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  let unknownNumber = 1;

  newUser.increment = function () {
    return (newUser.score = score + 1);
  };

  newUser.incrementUnknwnNumber = function () {
    unknownNumber++;
    return unknownNumber;
  };

  return newUser;
}

const user1 = myFactoryFunction("wamique", 20);

console.log(user1.incrementUnknwnNumber()); // 2
