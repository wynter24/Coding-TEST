function solution(A, B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);
  
  let answer = 0;
  let j = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] < B[j]) {
      answer++;
      j++;
    }
  }

  return answer;
}