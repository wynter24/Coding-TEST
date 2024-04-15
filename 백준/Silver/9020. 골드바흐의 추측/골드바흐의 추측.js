let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();

const MAX = Math.max(...input);
let answer = [];

const isPrime = new Array(MAX + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= MAX; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      isPrime[j] = false;
    }
  }
}

input.forEach(v => {
  for (let i=Math.ceil(v/2);i>1;i--) {
    if (isPrime[i] && isPrime[v-i]) {
      answer.push(`${i} ${v-i}`)
      break;
    };
  };
});

console.log(answer.join('\n'));