const input = +require('fs').readFileSync('/dev/stdin');

let block = 1;
let range = 1;

while(block <= input) {
  if(block === input) break;
  block += 6 * range;
  range++;
}

console.log(range);