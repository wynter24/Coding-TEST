function solution(N, stages) {
  let result = [];

  for(let i = 1; i <= N; i++) {
    let reach = stages.filter(stage => i === stage).length;
    let curr = stages.filter(stage => i <= stage).length;
    result.push([i, reach/curr]);
  }
  result.sort((a,b) => b[1] - a[1]);

  return result.map(el => el[0]);
}