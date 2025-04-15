let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.map(Number);
const targetSum = arr.reduce((a, c) => a + c, 0) - 100;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === targetSum) {
      const filtered = arr.filter((_, idx) => idx !== i && idx !== j);
      console.log(filtered.sort((a, b) => a - b).join('\n'));
      return;
    }
  }
}