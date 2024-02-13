let [nums,...arr] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(nums.split(' ')[0]);
// const m = Number(nums.split(' ')[1]);

arr = arr.map(el => el.split(' '));
arr = arr.map(el => el.map(Number));

let basket = [];

for (let i = 1; i <= n; i++) {
  basket.push(i);
}

arr.forEach(el => {
  let temp = basket[el[0]-1];
  basket[el[0]-1] = basket[el[1]-1];
  basket[el[1]-1] = temp;
});

console.log(basket.join(' '));