function solution(numbers) {
  var answer = [];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i!==j) {
        let sum = numbers[i] + numbers[j];
        answer.push(sum);
      }
    }
  }
  let result = [...new Set(answer)];
  return result.sort((a, b) => a > b ? 1 : -1);
}