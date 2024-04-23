// function solution(n, arr1, arr2) {
//     return arr1.map((a,i) => (a|arr2[i]).toString(2)
//                                         .padStart(n)
//                                         .replace(/0/g,' ')
//                                         .replace(/1/g, '#'))
// }

// 중괄호 {}를 사용하지 않고 한 줄로 작성하면 : (a, i) => ...
// 해당 표현식의 결과가 자동으로 반환된다.
var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
