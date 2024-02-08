const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().split(/\s/).map(Number);

let result;

if(a===b && a===c) {
  result = 10000 + a*1000
} else if(a===b || a===c) {
  result = 1000 + a*100
} else if(b===c) {
  result = 1000 + b*100
} else {
  const biggest = Math.max(a,b,c);
  result = biggest*100
}

console.log(result);