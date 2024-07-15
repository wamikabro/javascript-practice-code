// Factory Function
function userCreator(name, score) {
  // const newUser = {}; instead of creating object this way
  const newUser = Object.create(userFunctionStore); // we've passed our store object to it
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  // keep in mind 'this' was used to point towards calling object's score
  // to be incremented
  increment: function () {
    this.score++;
  },
  // we can create more functions...
};

// reusing same object structure to create multiple objects
const user1 = userCreator("wamique", 10);
const user2 = userCreator("moazzam", 8);

user1.increment();

console.log(user1.score);
