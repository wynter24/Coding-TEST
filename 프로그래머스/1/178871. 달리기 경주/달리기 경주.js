function solution(players, callings) {
  const rank = {};
  players.forEach((p,i) => rank[p] = i);
  for (const winner of callings) {
    let winnerI = rank[winner];
    let loserI = winnerI - 1;

    rank[winner]--;
    rank[players[loserI]]++;

    players[winnerI] = players[loserI];
    players[loserI] = winner;
  }
  return players;
}