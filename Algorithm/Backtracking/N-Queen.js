// BackTracking 이란?
// 해를 찾는 도중 해가 아니어서 막히면, 되돌아가서 다시 해를 찾아가는 기법

function solveNQueens(n) {
  let board = Array(n).fill().map(() => Array(n).fill(false)); // 체스판
  let solutions = []; // 배치할 수 있는 해결책

  // 위치 검증
  function isValid(row, col) {
    for (let i = 0; i < row; i++) { // 세로
      if (board[i][col]) {
        return false;
      }
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) { // 대각선
      if (board[i][j]) return false;
    }

    for (let i = row, j = col; i >= 0 && j < n; i--, j++) { // 반대 대각선
      if (board[i][j]) return false;
    }

    return true;
  }

  // 퀸 배치
  function placeQueen(row) {
    if (row === n) {
      solutions.push(board.map(row => row.map(col => col ? 'Q' : '.').join('')));
      return;
    }

    // col: 열 -> 각 행의 요소
    for (let col = 0; col < n; col++) { // 가로
      if (isValid(row, col)) {
        board[row][col] = true; // 퀸 하나 배치
        placeQueen(row + 1); // 다음 행에 대해 검사
        // 퀸 하나를 배치하고 다음 행 검사에서 문제가 생기면 아래 코드가 실행된다.
        // 문제 === false -> 재귀 실행X -> 퀸을 놓을 수 없음 -> 근데 위에서 true로 설정했으니까 다시 false로 되돌려야 함
        board[row][col] = false; // 놓았던 퀸을 되돌림 -> 백트래킹
      }
    }
  }

  placeQueen(0);
  return solutions.length;
}

console.log(solveNQueens(8));

// 참고 사이트
// https://www.youtube.com/watch?v=yEZOwnsme3A&t=182s