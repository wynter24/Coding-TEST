let [_, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = arr.map(v => {
  v = v.trim();
  return `${v[0]}${v[v.length - 1]}`
})

console.log(answer.join('\n'));