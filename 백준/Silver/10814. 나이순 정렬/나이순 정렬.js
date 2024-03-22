let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let members = arr.map(el => el.split(' '));

members.sort((a,b) => {
  if(a[0] === b[0]) {
    members[a] - members[b]
  }
  return a[0] - b[0]
})

console.log(members.map(el => el.join(' ')).join('\n'));