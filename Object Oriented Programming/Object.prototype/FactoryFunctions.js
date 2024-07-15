// Factory Function
function userCreator(name, score) {
  // const newUser = {}; instead of creating object this way
  const newUser = Object.create(userFunctionStore); // we've passed our store object to __proto__
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
};

const user1 = userCreator("wamique", 10);
const user2 = userCreator("moazzam", 8);

user1.increment();

console.log(user1.score);

// we used function from Object.prototype
//since our user made objects don't have that method
console.log(user1.hasOwnProperty("score"));
