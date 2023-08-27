// function solution(numbers) {
//     var answer = 0;
//     for(let i=0;i<numbers.length;i++){
//         answer+=numbers[i];
//     }
//     return answer/numbers.length;
// }

function solution(numbers) {
  let answer = numbers.reduce((acc,cur) => {return acc+cur;})/numbers.length
  return answer;
}