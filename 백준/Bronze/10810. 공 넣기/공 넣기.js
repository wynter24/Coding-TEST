let [nums,...arr] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(nums.split(' ')[0]);
// const m = Number(nums.split(' ')[1]);

arr = arr.map(el => el.split(' '));
arr = arr.map(el => el.map(Number));

const basket = Array(n).fill(0);

arr.forEach(el => {
  for (let i = el[0]; i <= el[1]; i++) {
    basket[i-1] = el[2]  
  }
});

console.log(basket.join(' '));