let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function calculateGap(arr) {
  let gap = [];
  for (let i = 1; i < arr.length; i++) {
    gap.push(arr[i]-arr[i-1])
  }
  return gap;
}

function gcb(a,b) {
  while(b>0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function countStreetTree(arr) {
  let gaps = calculateGap(arr);
  let gcbValue = gaps.reduce((acc, val) => gcb(acc, val));
  let additionalTrees = 0;
  for(let gap of gaps) {
    additionalTrees += Math.floor(gap/gcbValue) - 1
  }
  return additionalTrees;
}

console.log(countStreetTree(arr));