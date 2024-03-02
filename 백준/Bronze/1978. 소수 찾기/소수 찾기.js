const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1].split(' ').map(Number);
let count = 0;

arr.forEach(num => {
  let primeNumber = []
  for (let i = 1; i <= num; i++) {
    if(num%i === 0) primeNumber.push(i);    
  }
  if(primeNumber.length === 2) count++;
})

console.log(count);