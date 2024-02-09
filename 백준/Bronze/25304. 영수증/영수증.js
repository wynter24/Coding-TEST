const [x,n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = 0;

const receipt = arr.map(el => {
  let new_arr = el.split(' ');
  return new_arr.map(Number);
});

for (let i = 0; i < n; i++) {
  sum += receipt[i][0] * receipt[i][1]
};

sum === Number(x) ? console.log('Yes') : console.log('No');