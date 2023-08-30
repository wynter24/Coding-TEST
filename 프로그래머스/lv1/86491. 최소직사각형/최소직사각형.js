// function solution(sizes) {
//   let maxA=[];
//   let maxB= [];
//   for(let i=0;i<sizes.length;i++) {
//     // 세로가 길면 세로를 가로로 바꾸기
//     if(sizes[i][0]<sizes[i][1]) {
//       let a = sizes[i][0];
//       sizes[i][0] = sizes[i][1];
//       sizes[i][1] = a;
//     }
//     maxA.push(sizes[i][0]);
//     maxB.push(sizes[i][1]);
//   }
//   return Math.max(...maxA) * Math.max(...maxB);
// }


function solution(sizes) {
  let maxA=[];
  let maxB= [];
  let answer = sizes.map((v)=> {
    v.sort((a,b) => b-a); 
    maxA.push(v[0]);
    maxB.push(v[1]);
  })
  
  return Math.max(...maxA) * Math.max(...maxB);
}