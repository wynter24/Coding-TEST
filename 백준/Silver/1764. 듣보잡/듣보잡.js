let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input.shift().split(' ').map(Number);
const noHearSet = new Set();
const noSeeSet = new Set();
for (let i = 0; i < input.length; i++) {
    if (i < n) {
        noHearSet.add(input[i]);
    } else {
        noSeeSet.add(input[i]);
    }
}

let answer = [];
noSeeSet.forEach(v => {  
    if (noHearSet.has(v)) answer.push(v);
});

answer.sort();

console.log(answer.length + '\n' + answer.join('\n'));