let input = +require('fs').readFileSync('/dev/stdin').toString().trim();

console.log((Math.floor(input / 3) + input % 3) % 2 === 0 ? 'CY' : 'SK') 