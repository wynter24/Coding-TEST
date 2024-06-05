function solution(park, routes) {
  let start;
  let w = park[0].length - 1;
  let h = park.length - 1;
  // N:위, S:아래, W:왼쪽, E: 오른쪽
  park.forEach((v,i) => {
    if(v.includes('S')) start = [i,v.indexOf('S')];
  });

  let directions = {
    N: [-1, 0],
    S: [1, 0],
    E: [0, 1],
    W: [0, -1],
  }

  for (const route of routes) {
    let [sCol, sRow] = start;
    let [dir, move] = route.split(' ');

    let step = 0;
    while(step<move) {
      sCol += directions[dir][0];
      sRow += directions[dir][1];
      if(sCol < 0 || sCol > h || sRow < 0 || sRow > w || park[sCol][sRow] === 'X') {
        break;
      }
      step++;
    }
    if(step === +move) start = [sCol, sRow];
  }

  return start;
}