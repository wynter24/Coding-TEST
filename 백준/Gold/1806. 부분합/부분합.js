let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, s] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let left = 0;
let right = 0;
let sum = 0;
let minLength = Infinity;

while(right < n) {
  sum += arr[right];
  right++;

  while(sum >= s) {
    minLength = Math.min(minLength, right - left);
    sum -= arr[left];
    left++;
  }
}

console.log(minLength === Infinity ? 0 : minLength);