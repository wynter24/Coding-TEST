let input = +require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(!(input % 4) && (input % 100) || !(input % 400) ? 1 : 0);