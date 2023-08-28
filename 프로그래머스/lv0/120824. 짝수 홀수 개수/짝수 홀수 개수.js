function solution(num_list) {
  var answer = [];
  let sum1 = 0;
  let sum2 = 0;
  num_list.map((v) => v%2 ===0 ? sum1++ : sum2++);
  answer.push(sum1, sum2);
  return answer;
}