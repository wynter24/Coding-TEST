let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
let arr = input[1].split(' ').map(Number);
let ranges = input.slice(2,);

let prefix_sum = new Array(arr.length+1).fill(0);

arr.forEach((el, i) => {
  prefix_sum[i+1] = prefix_sum[i] + el;
})

for(let range of ranges) {
  let [i,j] = range.split(' ').map(Number);
  console.log(prefix_sum[j] - prefix_sum[i-1]);
}