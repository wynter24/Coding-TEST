const gcd = (a,b) => {
  while(b > 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

const lcm = (a,b) => {
  return a*b / gcd(a,b);
}

function solution(arr) {
  // var n = arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //   n = lcm(n, arr[i])
  // }
  // return n;
  return arr.reduce((a,c) => lcm(a,c));
}