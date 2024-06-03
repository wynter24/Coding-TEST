function solution(today, terms, privacies) {
  let answer = [];
  today = today.split('.').map(Number);
  let termsList = {};
  terms.forEach(el => {
    let [type, term] = el.split(' ');
    termsList[type] = +term;
  });

  privacies.forEach((privacy,i) => {
    let [day ,type] = privacy.split(' ');
    let [y,m,d] = day.split('.').map(Number);
    m += termsList[type];
    while(m > 12) {
      y += 1;
      m -= 12;
    }
    if(y < today[0]) {
      answer.push(i+1);
    } else if(y === today[0]) {
      if(m < today[1]) {
        answer.push(i+1);
      } else if(m === today[1]) {
        if(d <= today[2]) answer.push(i+1);
      }
    }
  })

  return answer;
}