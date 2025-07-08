let input = +require('fs').readFileSync('/dev/stdin').toString().trim();
const start = Math.max(1, input - 9 * String(input).length);
for (let i = start; i < input; i++) {
  const sum = i + String(i).split('').map(Number).reduce((a, c) => a + c, 0);
  if (sum === input) {
    console.log(i);
    return;
  }
}

console.log(0);