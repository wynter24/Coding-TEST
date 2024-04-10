let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.pop();

function isPrime(num) {
  if(num<2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) return false
  }
  return true;
}

input.forEach(el => {
  let sum = 0;
  if(el === 1) console.log(1)
  else {
    for (let i = el+1; i <= el*2; i++) {
      if(isPrime(i)) sum++;
    }
    console.log(sum);
  }
})