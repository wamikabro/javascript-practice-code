function myFactoryFunction(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;

  // don't make this mistake of making function inside myFactoryFunction
  // instead of newUser object, because you're only returning that object
  // other thigs that aren't related to that object are automatically destroyed
  // but object is kept in backpack
  // function increment() {
  //   newUser.score++;
  // }

  newUser.increment = function () {
    return (newUser.score = score + 1);
  };

  return newUser;
}

const user1 = myFactoryFunction("wamique", 20);

console.log(user1.name);
console.log(user1.score);
console.log(user1.increment());
