if (!Object.is || true) {
  Object.is = function ObjectIs(x, y) {
    var xNegZero = isItNegZero(x);
    var yNegZero = isItNegZero(y);

    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero;
    } else if (isItNaN(x) && isItNaN(y)) {
      return true;
    } else {
      return x === y;
    }

    // functions

    function isItNegZero(v) {
      return v == 0 && 1 / v == -Infinity;
    }

    function isItNaN(v) {
      return v !== v;
    }
  };
}

// Tests

// All should be true
console.log(Object.is(42, 42));
console.log(Object.is("foo", "foo"));
console.log(Object.is(false, false));
console.log(Object.is(null, null));
console.log(Object.is(undefined, undefined));
console.log(Object.is(NaN, NaN));
console.log(Object.is(-0, -0));
console.log(Object.is(0, 0));

// All should be false
console.log(Object.is(-0, 0));
console.log(Object.is(0, -0));
console.log(Object.is(0, NaN));
console.log(Object.is(NaN, 0));
console.log(Object.is(42, "42"));
console.log(Object.is("42", 42));
console.log(Object.is("foo", "bar"));
console.log(Object.is(false, true));
console.log(Object.is(null, undefined));
console.log(Object.is(undefined, null));
