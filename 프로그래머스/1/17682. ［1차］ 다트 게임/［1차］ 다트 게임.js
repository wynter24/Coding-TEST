function solution(dartResult) {
  let score = 0;
  let cnt = [];

  for (let i = 0; i < dartResult.length; i++) {
    if(!isNaN(dartResult[i])) {
      score = Number(dartResult[i-1]) === 1 ? 10 : Number(dartResult[i]);
    } else if(dartResult[i] === 'S') {
      cnt.push(score);
    } else if(dartResult[i] === 'D') {
      cnt.push(score**2);
    } else if(dartResult[i] === 'T') {
      cnt.push(score**3);
    } else if(dartResult[i] === '*') {
      cnt[cnt.length-2] = cnt[cnt.length-2]*2;
      cnt[cnt.length-1] = cnt[cnt.length-1]*2;
    } else if(dartResult[i] === '#') {
      cnt[cnt.length-1] = -1 * cnt[cnt.length-1];
    }
  }
  let answer = cnt.reduce((a,c) => a+c);
  return answer;
}