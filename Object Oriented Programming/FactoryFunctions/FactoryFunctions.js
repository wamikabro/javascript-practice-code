// Factory Function
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

// reusing same object structure to create multiple objects
const user1 = userCreator("wamique", 10);
const user2 = userCreator("moazzam", 8);

user1.increment();
