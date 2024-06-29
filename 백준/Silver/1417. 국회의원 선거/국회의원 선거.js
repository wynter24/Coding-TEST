let [n, dasom, ...others] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let count = 0;

others.sort((a,b) => b - a);

while(dasom <= others[0]) {
  count++;
  dasom++;
  others[0]--
  others.sort((a,b) => b - a);
}

console.log(count);