let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function countLeft(arr) {
  let enterMap = new Map();

  arr.forEach(el => {
    let [name, log] = el.split(' ').map(record => record.trim());
    if(log === "enter") {
      enterMap.set(name, true);
    } else {
      enterMap.delete(name);
    }
  });

  return [...enterMap.keys()].sort().reverse().join('\n');
}

console.log(countLeft(arr));