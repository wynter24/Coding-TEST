let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let members = arr.map(el => el.split(' '));

members.sort((a,b) => {
  if(a[0] === b[0]) {
    members[a] - members[b]
  }
  return a[0] - b[0]
})

for(let member of members) {
  console.log(member.join(' '));
}