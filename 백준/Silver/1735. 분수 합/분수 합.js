let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input.map(el => el.split(' ').map(Number));

function lcm(a,b) {
  return a*b / gcb(a,b);
}

function gcb(a,b) {
  while(b>0) {
    [a,b] = [b, a % b];
  }
  return a;
}

let denominatorLcm = lcm(arr[0][1],arr[1][1]);

let sumNumerator = (((denominatorLcm / arr[0][1]) * arr[0][0]) + ((denominatorLcm / arr[1][1]) * arr[1][0]));

console.log(`${sumNumerator/gcb(denominatorLcm,sumNumerator)} ${denominatorLcm/gcb(denominatorLcm,sumNumerator)}`);