let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const numArr = arr[0].split(' ').map(Number)
let sortedArr = [...new Set(numArr)].sort((a,b) => a-b);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    let mid = Math.floor((left+right) / 2);

    if(arr[mid] === target) {
      return mid
    }

    if(arr[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}

console.log(
  numArr.map(num => binarySearch(sortedArr, num)).join(' ')
);