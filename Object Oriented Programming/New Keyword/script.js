// Things made easier with new keyword that handle some things by own
function userCreator(name, score) {
  // this thing is automatically indicating
  // that the factory funciton should be changed to
  // the class definition

  // we're using this to refer to the newly created object by new automatically
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function () {
  this.score++;
};

const user1 = new userCreator("Wamique", 8);

user1.increment(); // 9
user1.increment(); // 10

console.log(user1.score);
