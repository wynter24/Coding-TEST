let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let myCards = new Set(input[1].split(' ').map(Number));
let newCards = input[3].split(' ').map(Number);

function compareCard (arr) {
  return arr.map(card => {
    return myCards.has(card) ? 1 : 0;
  })
}

console.log(compareCard(newCards).join(' '));