function solution(board, moves) {
  var answer = 0;
  let stack = [];
  let newBoard = [];

  for (let i = 0; i < board.length; i++) {
    let arr = [];
    for (let j = 0; j < board[i].length; j++) {
      if(board[j][i]) arr.push(board[j][i]);
    }
    newBoard.push(arr);
  }
  for (const move of moves) {
    if(newBoard[move-1][0]) {
      stack.push(newBoard[move-1][0]);
      newBoard[move-1] = newBoard[move-1].slice(1);
    }
    if(stack[0] && (stack[stack.length-1] === stack[stack.length-2])) {
      stack = stack.slice(0,stack.length-2);
      answer += 2;
    }
  }

  return answer;
}