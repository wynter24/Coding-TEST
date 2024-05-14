const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let coins =[25,10,5,1];
let count = [0,0,0,0];

for (let i = 0; i < n; i++) {
  let cost = arr[i] 
  for (let j = 0; j < coins.length; j++) {
    count[j] = Math.floor(cost/coins[j]);
    cost %= coins[j];
  }
  console.log(count.join(' '));
}