let [m, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const isPrime = (num) => {
  if(num<2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) return false
  }
  return true;
}

for (let i = m; i <= n; i++) {
  if(isPrime(i)) console.log(i);
}