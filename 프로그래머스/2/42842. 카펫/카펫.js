function solution(brown, yellow) {
  let totalTiles = brown + yellow;
  for (let height = 1; height <= Math.sqrt(totalTiles); height++) {
    if(totalTiles % height === 0) {
      let width = totalTiles / height;
      if((width-2) * (height-2) === yellow) {
        return [width, height];
      }
    }
  }
}