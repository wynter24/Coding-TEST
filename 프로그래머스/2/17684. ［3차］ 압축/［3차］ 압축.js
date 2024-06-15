function solution(msg) {
  let answer = [];
  let dictionary = {};
  let lastIdx = 26;
  
  for (let i = 1; i <= 26; i++) {
    dictionary[String.fromCharCode(64 + i)] = i;
  }

  let w = "";
  for (let i = 0; i < msg.length; i++) {
    let c = msg[i];
    if(dictionary[w+c] !== undefined) {
      w += c;
    } else {
      answer.push(dictionary[w]);
      dictionary[w+c] = ++lastIdx;
      w = c;
    }
  }

  // 마지막 문자열 처리
  if(w !== "") answer.push(dictionary[w]);

  return answer;
}