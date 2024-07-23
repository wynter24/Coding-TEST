function solution(weights) {
  const map = {};
  const ratio = [1, 3 / 2, 4 / 3, 2]; 

  return weights
    .sort((a, b) => b - a)
    .reduce((result, weight) => {
      ratio.map((v) => (result += map[weight * v] || 0)); 
    
      map[weight] = (map[weight] || 0) + 1; 
      return result;
    }, 0);
}