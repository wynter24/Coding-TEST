function solution(s) {
  var answer = s;
  let number = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  
  for(let i=0;i<10;i++){
    // 영문자로 표기된 숫자는 사라지고 양옆으로 남은 문자열들이 arr배열에 들어간다
    let arr = answer.split(number[i]);
    // 배열요소+i+배열요소 -> i로 하나의 문자열로 합쳐짐
    answer = arr.join(i);
  }
  return Number(answer);
}