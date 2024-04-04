let [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

function lcm(a, b) {
  return a*b / gcb(a,b);
}

function gcb(a, b) {
  while(b > 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

console.log(lcm(a, b));