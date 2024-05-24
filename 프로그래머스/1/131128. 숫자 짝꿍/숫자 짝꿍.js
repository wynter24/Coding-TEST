function solution(X, Y) {
  let same = [];
  let Xarr = X.split('').map(Number).reduce((a,c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  },{});
  let Yarr = Y.split('').map(Number).reduce((a,c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  },{});

  for([key, value] of Object.entries(Xarr)) {
    if(Yarr[key]) {
      let cnt = Math.min(value, Yarr[key]);
      for (let i = 0; i < cnt; i++) {
        same.push(key);
      }
    }
  }

  if(!same.length) {
    return '-1';
  } else {
    let answer = same.sort((a,b) => b-a).join('');
    return answer[0] === '0' ? '0' : answer;
  }
}