function solution(players, callings) {
  let hash = new Map();

  players.forEach((name, index) => {
    hash.set(name, index);
  });

  callings.forEach(name => {
    let currIdx = hash.get(name);
    let front = players[currIdx - 1];

    [players[currIdx], players[currIdx-1]] = [players[currIdx-1], players[currIdx]];

    hash.set(name, hash.get(name)-1);
    hash.set(front, hash.get(name)+1);
  })
  
  return players;
}