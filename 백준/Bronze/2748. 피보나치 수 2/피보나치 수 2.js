let n = +require('fs').readFileSync('/dev/stdin').toString().trim();

// top-down
const memo = Array(n+1).fill(undefined);

function fib(n) {
  if(n === 0) return BigInt(0);
  if(n === 1) return BigInt(1);
  if(memo[n] !== undefined) return memo[n];

  memo[n] = fib(n-1) + fib(n-2);
  return memo[n];
}

console.log(fib(n).toString());