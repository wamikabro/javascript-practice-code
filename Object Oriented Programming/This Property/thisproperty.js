function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

// basic way that we normally use
/*
const userFunctionStore = {
  increment: function () {
    this.score++;
  },
};
*/

// it looks like it will work but this keyword here is referring to global instead
// because function inside the function's this doesn't have reference to the object
/*
const userFunctionStore = {
  increment: function () {
    function add1(){this.score; }
    add1();
  },
};
*/

// to tackle the issue we can use this-that approach
// by simply making const that = this; outside the function, passing it to the function
// and inside the function this = that;

// but we can also directly change the this by passing the this to the function
// function add1(this)

// or we can use the arrow function instead, because it's this property is set to
// where it was created instead of being global.
const userFunctionStore = {
  increment: function () {
    const add1 = () => {
      this.score;
    };
    add1();
  },
};

const user1 = userCreator("wamik", 3);
const user2 = userCreator("moazzam", 5);

user1.increment;
