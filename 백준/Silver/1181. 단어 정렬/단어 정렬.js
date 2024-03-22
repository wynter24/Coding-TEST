let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let set = [...new Set(arr)]

let result = set.sort((a,b) => {
  if(a.length === b.length) {
    return a > b ? 1 : -1
  }
  return a.length - b.length
})

console.log(result.join('\n'));