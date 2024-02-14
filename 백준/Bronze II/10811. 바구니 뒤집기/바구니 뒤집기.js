let [nm, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n,m] = nm.split(' ').map(Number);
arr = arr.map(el => el.split(' ')).map(el => el.map(el => +el -1));

let baskets = Array(n).fill(0).map((v,i) => i+1);

arr.forEach(([i,j]) => {
  const chosen = baskets.slice(i,j+1).reverse();

  baskets.splice(i,j-i+1,...chosen)
});

console.log(baskets.join(' '));