function solution(s, n) {
  let answer = '';
  for (let i = 0; i < s.length; i++) { //s문자열을 차례로 탐색
    let ascii = s.charCodeAt(i)
    if (ascii >= 65 && ascii <= 90) {
      ascii += n;
      if (ascii > 90) {
        ascii -= 26;
      }
    }
    else if (ascii >= 97 && ascii <= 122) {
      ascii += n;
      if (ascii > 122) {
        ascii -= 26;
      }
    }
    string = String.fromCharCode(ascii);
    answer += string;
  }
  return answer;
}