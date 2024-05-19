let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [_, k] = input.shift().split(' ');
let coins = input.map(Number).sort((a,b) => b-a);
let count = 0;

for(let coin of coins) {
  if(k >= coin) {
    count += Math.floor(k / coin);
    k = k % coin;
  }
}

console.log(count);