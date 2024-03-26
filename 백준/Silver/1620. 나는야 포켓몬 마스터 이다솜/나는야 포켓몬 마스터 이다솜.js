const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(v=>+v);
const NumToName = new Map(); 
const NameToNum = new Map(); 
for (let i = 0; i < N; i++) { 
    NumToName.set(i+1, input[i]);
    NameToNum.set(input[i], i+1);
}
const quiz = input.slice(N, input.length);
let answer = '';
quiz.forEach(v=> {
    if (isNaN(v)) {
        answer += NameToNum.get(v) + '\n';
    } else {
        answer += NumToName.get(+v) + '\n';
    }
});
console.log(answer.trim());