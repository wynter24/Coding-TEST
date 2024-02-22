const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const word = input.toUpperCase();
// A-Z (65-90)
const count = new Array(26).fill(0);

for(let i of word) {
  count[i.charCodeAt()-65] ++
};

const max = Math.max(...count);
const maxCount = count.filter(x => x===max).length;

const idx = count.indexOf(max);
const result = String.fromCharCode(idx+65);

console.log(maxCount === 1 ? result : '?');