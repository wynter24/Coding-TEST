function solution(s) {
  let result = 0;
  let x_count = 0;
  let notX_count = 0;

  s.split('').reduce((a,c) => {
    if(x_count === notX_count) {
      result++;
      x_count = 0;
      notX_count = 0;
      a = c;
    }
    a === c ? x_count++ : notX_count++;
    return a;
  },'');

  return result;
}