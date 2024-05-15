let input = require('fs').readFileSync('/dev/stdin');

let coins = [500, 100, 50, 10, 5, 1];
let change = 1000 - input;
let count = 0;

for(let coin of coins) {
  count += Math.floor(change / coin);
  change = change % coin
}

console.log(count);