let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let aArr = new Set(input[1].split(' ').map(Number));
let bArr = new Set(input[2].split(' ').map(Number));

function relativeComplement(aArr, bArr) {
  let sum = 0;

  aArr.forEach(el => {
    if(!bArr.has(el)) sum++
  })
  bArr.forEach(el => {
    if(!aArr.has(el)) sum++
  })

  return sum;
}

console.log(relativeComplement(aArr, bArr));