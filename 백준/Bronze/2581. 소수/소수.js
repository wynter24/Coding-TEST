const [m, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => Number(str.trim()));

let arr = [];

for (let i = m; i <= n; i++) {
  let primeNumber = []
  for (let j = 1; j <= i; j++) {
    if(i%j === 0) primeNumber.push(j);    
  }
  if(primeNumber.length === 2) arr.push(i);
}

if(arr.length > 0) {
  let sum = arr.reduce((a,c) => a+c);
  let minArr = Math.min(...arr);
  console.log(sum+'\n'+minArr);
} else {
  console.log(-1);
}