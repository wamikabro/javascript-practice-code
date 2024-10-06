var teacher = "Kyle";

function ask(question) {
  console.log(teacher, question);
}

function otherClass() {
  var teacher = "Suzy";
  ask("Why?");
}

otherClass();
