let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const [_, gameType] = input.shift().split(' ');
const gameRequirements = {
  Y: 2,
  F: 3,
  O: 4,
}

let uniquePlayers = [...new Set(input)];

const maxGames = Math.floor(uniquePlayers.length / (gameRequirements[gameType] - 1));
console.log(maxGames);