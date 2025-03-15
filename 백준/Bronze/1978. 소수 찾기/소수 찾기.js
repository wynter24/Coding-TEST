let [n, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function isPrimeNum(num) {
  num = Number(num);
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(nums.split(' ').filter(num => isPrimeNum(num)).length);