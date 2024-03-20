let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

arr = arr.map(el => el.split(' ').map(Number));

arr.sort((a,b) => {
  return a[0] === b[0] ? a[1]- b[1] : a[0] - b[0]
})

console.log(arr.map(el => el.join(' ')).join('\n'))