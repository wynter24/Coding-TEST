let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

arr = arr.map(el => el.split(' ').map(Number));

arr.sort((a,b) => {
  if(a[1] === b[1]) {
    return a[0] - b[0]
  }
  return a[1] - b[1]
});

console.log(arr.map(el => el.join(' ')).join('\n'));