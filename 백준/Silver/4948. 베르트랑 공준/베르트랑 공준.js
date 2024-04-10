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
  let arr = [];
  if(el === 1) console.log(1)
  else {
    for (let i = el+1; i <= el*2; i++) {
      if(isPrime(i)) arr.push(i)
    }
    console.log(arr.length);
  }
})