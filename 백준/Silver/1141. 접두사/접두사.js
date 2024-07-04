let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let sorted = arr.sort().map(el => el.trim());
let prefixCnt = 0

for (let i = 0; i < n-1; i++) {
  if(sorted[i+1].startsWith(sorted[i])) prefixCnt++;
}

console.log(sorted.length - prefixCnt);