let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let num = Number(input.shift());

let arr = [];
for (let i = 0; i < num; i++) {
    arr.push(input[i].split(' ').map(Number))
}


arr = arr.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);

let result = 1;
let end = arr[0][1];

for (let i = 1; i < arr.length; i++) {
    let [from, to] = arr[i];
    if (from >= end) {
        end = to;
        result++;
    }
}

console.log(result)