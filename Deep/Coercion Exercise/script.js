let userName = "wamique";

function isValidName(name) {
  // if given value is string and there are at least 3 non whitespace letters
  // if the string isn't null is automatically checked by second validation
  return typeof name == "string" && name.trim().length >= 3;
}

const nameValidity = isValidName(userName);
console.log(`Name is Valid: ${nameValidity}`);

function hoursAttended(attended, length) {
  if (typeof attended == "string" && attended.trim() != "") {
    attended = Number(attended);
  }
  if (typeof length == "string" && length.trim() != "") {
    length = Number(length);
  }

  // to ignore booleans, nulls, undefined if passed
  if (
    typeof attended == "number" &&
    typeof length == "number" &&
    attended >= 0 && // just to check if they're not in minus
    length >= 0 &&
    Number.isInteger(attended) && // to check if numbers aren't in points / fractoins eg. 1.1
    Number.isInteger(length) &&
    attended <= length // attended hours should be less than the length of the course
  ) {
    return true;
  }

  return false;
}

hoursAttended(10, 10);
