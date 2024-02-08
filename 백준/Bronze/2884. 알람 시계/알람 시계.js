const [h, m] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

let min;
let result = [];

if(m >= 45) {
  result.push(h, m-45);
} else {
  if(h === 0) {
    result.push(23);
    min = (24*60+m - 45) % 60;
    result.push(min);
  } else {
    result.push(h-1);
    min = (h*60+m - 45) % 60;
    result.push(min);
  }
}

console.log(result.join(' '));