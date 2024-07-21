// Class
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }
}

const user1 = new UserCreator("Wamique", 8);

user1.increment(); // 9

console.log(user1.score);
