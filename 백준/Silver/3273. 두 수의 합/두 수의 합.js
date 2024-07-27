let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[1].split(' ').map(Number).sort((a,b) => a-b);
let target = input[2];

let count = 0;
let left = 0;
let right = arr.length-1;

while(left < right) {
  let sum = arr[left] + arr[right]
  if(sum < target) {
    left++;
  } else if(sum > target) {
    right--;
  } else {
    count++;
    left++;
    right--;
  }
}

console.log(count);