let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let arr = new Set();

for (let i = 0; i < input.length; i++) {
  for (let j = i+1; j <= input.length; j++) {
    arr.add(input.substring(i,j));
  }
}

console.log(arr.size);