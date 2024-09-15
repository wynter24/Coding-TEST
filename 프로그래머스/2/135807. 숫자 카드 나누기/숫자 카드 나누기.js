function solution(arrayA, arrayB) {
  let answer = 0;

  const gcd = (a, b) => {
    while (b > 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  const a = arrayA.reduce((a, c) => gcd(a, c));
  const b = arrayB.reduce((a, c) => gcd(a, c));

  if (b !== 1 && arrayA.every(el => el % b !== 0)) {
    answer = Math.max(a, b);
  } else if (a !== 1 && arrayB.every(el => el % a !== 0)) {
    answer = Math.max(a, b);
  }

  return answer;
}