let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

let coins = [25, 10, 5, 1];
let count = [0,0,0,0];

for(let cost of input) {
  for (let i = 0; i < coins.length; i++) {
    count[i] = Math.floor(cost / coins[i]);
    cost = cost % coins[i]
  }
  console.log(count.join(' '));
}