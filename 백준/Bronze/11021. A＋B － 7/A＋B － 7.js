let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

arr = arr.map(el => el.split(' '));
arr = arr.map(el => el.map(Number));

for(let i=0; i<n; i++) {
    console.log(`Case #${i+1}: ${arr[i][0] + arr[i][1]}`);
};