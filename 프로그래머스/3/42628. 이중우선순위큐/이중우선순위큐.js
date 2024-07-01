function solution(operations) {
  var answer = [];
  let idx = 0 ;
  for (const el of operations) {
    let [a, b] = el.split(' ');
    b = Number(b);
    if(a === 'I') {
      answer.push(b);
    } else if(a === 'D') {
      if(b === 1) idx = answer.indexOf(Math.max(...answer));
      else idx = answer.indexOf(Math.min(...answer));
      answer.splice(idx,1);
    }
  }
  answer = answer.length === 0 ? [0,0] : [Math.max(...answer),Math.min(...answer)];
  return answer;
}