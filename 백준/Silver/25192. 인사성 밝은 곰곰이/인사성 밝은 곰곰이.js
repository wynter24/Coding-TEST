let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input = input.map(v=>v.trim());
let enter = new Set();
let count = 0;

for(let v of input) {
  if(v === 'ENTER') {
    count += enter.size;
    enter.clear();
  } else {
    enter.add(v);
  }
}

if(enter.size) count += enter.size

console.log(count);