function solution(n, t, m, p) {
  let answer = '';
  let game = '';
  let myTurn = p - 1;
    
  for (let i = 0; i < t*m; i++) {
    game += i.toString(n);
  }
  for (let i = 0; i < t; i++) {
    answer += game[myTurn];
    myTurn += m;
  }
  
  return answer.toUpperCase();
}