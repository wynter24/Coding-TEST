function solution(wallpaper) {
  var answer = [];
  let x = [];
  let ySPoint = [];
  let yEPoint = [];
  // (세로, 가로) 
  wallpaper.forEach((v, i) => {
    if(v.includes('#')) {
      x.push(i);
      ySPoint.push(v.indexOf('#'));
      yEPoint.push(v.lastIndexOf('#'))
    }
  });
  answer.push(Math.min(...x));
  answer.push(Math.min(...ySPoint));
  answer.push(Math.max(...x)+1);
  answer.push(Math.max(...yEPoint)+1);

  return answer;
}