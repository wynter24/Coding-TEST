// function solution(numbers) {
//   var answer = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       if (i!==j) {
//         let sum = numbers[i] + numbers[j];
//         answer.push(sum);
//       }
//     }
//   }
//   let result = [...new Set(answer)];
//   return result.sort((a, b) => a > b ? 1 : -1);
// }

function solution(numbers) {
  let answer = [];
  numbers.map((v,i)=>{
    numbers.map((v2,i2)=>{
      if(i !== i2) answer.push(v+v2);
    })
  })
  let arr = [...new Set(answer)].sort((a,b)=>a-b);
  return arr;
}