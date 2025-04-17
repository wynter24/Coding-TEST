let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let trees = input[1].split(' ').map(Number);

function binarySearch(n, m, trees) {
  let start = 1;
  let end = Math.max(...trees);
  let height = 0;

  while(start <= end) {
    let mid = Math.floor((start+end) / 2);
    let count = 0;

    for (let i = 0; i < n; i++) {
      if((trees[i]-mid) > 0) count += trees[i]-mid;
    }

    if(count >= m) {
      height = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return height;
}

console.log(binarySearch(n,m,trees));