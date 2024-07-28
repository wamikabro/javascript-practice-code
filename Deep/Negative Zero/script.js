const number = -0;

console.log(number == 0); // true
console.log(number === 0); // true

console.log(Object.is(number, 0)); // false
console.log(Object.is(number, -0)); // true

function formatTrend(trendRate) {
  let direction = trendRate < 0 || Object.is(trendRate, -0) ? "▼" : "▲";
  return `${direction} ${Math.abs(trendRate)}`;
}

console.log(formatTrend(-3)); // ▼ 3
console.log(formatTrend(3)); // ▲ 3
console.log(formatTrend(-0)); // ▼ 0
console.log(formatTrend(0)); // ▲ 0
