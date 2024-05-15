let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();

for(let i=0; i<input.length; i++) {
  let days = 0;
  let [l, p, v] = input[i].split(' ').map(Number);
  days += Math.floor(v / p) * l;
  days += (v % p > l ? l : v % p);
  
  console.log(`Case ${i+1}: ${days}`);
}