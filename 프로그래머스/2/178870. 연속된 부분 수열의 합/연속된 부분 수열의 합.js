function solution(sequence, k) {
  let answer = [];
  let sum = 0;
  let start = 0;
  let end = 0;
  let len = sequence.length;

  while (end < sequence.length) {
    sum += sequence[end];
    while (sum >= k) {
      if (sum === k) {
        if (end - start < len) {
          answer = [start, end];
          len = end - start;
        }
      }
      sum -= sequence[start];
      start++;
    }
    end++;
  }

  return answer;
}