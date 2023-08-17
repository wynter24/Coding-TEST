function solution(s) {
  s = s.toUpperCase();
  let pCount = 0;
  let yCount = 0;
  
  for (var i = 0; i < s.length; i++) {
  if (s[i] === 'P') pCount++;
  if (s[i] === 'Y') yCount++;
  }
  return pCount === yCount ? true : false;
}